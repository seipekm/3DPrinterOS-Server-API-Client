var config = {
    url: 'our_website_host',
    type: 'enter_your_api_name'
};

function generateAPIUrl(func) {
    return config['url'] + "api/" + config['type'] + "/" + func + "/";
}

function printValue(sliderID, textbox) {
    var x = document.getElementById(textbox);
    var y = document.getElementById(sliderID);
    x.value = y.value;
}

// Get Post Data
function get_post(func, data, callback) {
    get_server_post(generateAPIUrl(func), data, callback);
}

function get_server_post(url, data, callback) {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function(object) { callback(jQuery.parseJSON(object)) }
        //headers: {'X-Requested-With': 'XMLHttpRequest'}
        //dataType: dataType
    });
    /*
     $.post(url, data, function(object) {
     callback(jQuery.parseJSON(object));
     })
     */
}

$(document).ready(function(){
    var user_token = "";
    var client_hash = "";
    var client_email = "";
    var file_id = 0;
    var job_id = 0;
    var app_job_id = 0;
    var printers;
    var slicer_json = "";
    var logout_flag = false;

    var local_host_url = "http://127.0.0.1:8008/?";

    var printersSelect = $('#printers');
    var mattSelect = $('#f_material');

    var PrinterTimeOut, FileTimeOut, PrintingTimeOut, LiveViewTimeout, CameraTimeOut, ImgLoginTimeOut;

    var stepId = 1;
    var stepPrint = "gcode";

    var matt = {
        'PLA': [210, 70],
        'PLA-237': [237, 70],
        'PLA-260': [260, 70],
        'ABS': [230, 110],
        'ABS-255': [255, 110],
        'HIPS': [230, 115],
        'Nylon': [260, 120],
        'Nylon-PA12': [280, 130],
        'PC': [285, 115],
        'PET': [220, 65],
        'PVA': [175, 55],
        'FPE-40D': [210, 75]
    }

    //carousel
    var owl = $("#owl-example");
    owl.owlCarousel({
        "items": 1
    });

    $('#onClickPrinting #next-btn').click(function(){
        setStep (stepId + 1);
    });

    $('#onClickPrinting #prev-btn').click(function(){
        setStep (stepId - 1,true);
    });

    function setStep(step,minus){
        switch (step) {
            case 1:
                $("#myModalLabel").html("Generating user");
                goStep(minus);
                break;
            case 2:
                $("#myModalLabel").html("Software download and setting’s screen");
                goStep(minus);
                $("#step-2 p.nothing").show();
                $("#step-2 p.soft_link").hide();
                $("#step-2 a.soft_data_more").hide();
                $("#step-2 p.soft_data").hide();
                break;
            case 3:
                $("#myModalLabel").html("Preparing your 3D print");
                goStep(minus);
                break;
            case 4:
                $("#myModalLabel").html("3D Printing");
                goStep(minus);
                break;
            case 5:
                $("#myModalLabel").html("Leave your feedback");
                goStep(minus);
                break;
            default:
                //statements_def
                break;
        }
    }

    function goStep(minus){
        if(minus == undefined){
            stepId  += 1;
        }else{
            stepId  -= 1;
        }
        $('#onClickPrinting .step').hide();
        $('#onClickPrinting #step-' + stepId).show();
    }

    //getSeconds
    function getSeconds(time)
    {
        var ts = time.split(':');
        return Date.UTC(1970, 0, 1, ts[0], ts[1], ts[2]) / 1000;
    }

    function toHHMMSS(seconds) {
        var sec_num = parseInt(seconds);
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var time    = hours+':'+minutes+':'+seconds;
        return time;
    }

    //download client from iframe
    $('#go_download_btn').on('click', function() {
        var option = $("#go_download").find('option:selected').val();
        if (option.length > 3)
            if ( $("#for_downdload").length ) $("#for_downdload").remove();
        var _iframe_dl = $('<iframe id="for_downdload" />')
            .attr('src', option)
            .hide()
            .appendTo('body');

        return false;
    });

    //first open
    $('#onClickPrinting').on('shown.bs.modal', function () {
        stepId = 1;
        $(".step").hide();
        $("#step-1").show();
        $('.modal-footer').hide();
        login();
    })

    //printer change
    printersSelect.on('change', function () {
        get_post("get_slicer_settings", {
            'email': client_email,
            'type_id': printers[printersSelect.val()].type_id,
            'session': user_token
        }, get_slicer_settings_after);
    })

    //matterial change
    mattSelect.on('change',function(){
        $('#print_temperature').val( matt[mattSelect.val()][0] );
        $('#print_bed_temperature').val( matt[mattSelect.val()][1] );
    })

    //checkbox change
    $("button.btn-checkbox").on('click',function(){
        if ( $(this).hasClass("active") ){
            $(this).find("span").removeClass("glyphicon-check").addClass("glyphicon-unchecked");
            $(this).find("input[type='checkbox']").prop("checked",false)
            $(this).removeClass("active")
        }
        else {
            $(this).find("span").removeClass("glyphicon-unchecked").addClass("glyphicon-check");
            $(this).find("input[type='checkbox']").prop("checked",true)
            $(this).addClass("active")
        }
    })

    $("#print-btn").click(function(){
        setStep (stepId + 1);
        get_post("select_printer", {
            'email': client_email,
            'type_id': printers[printersSelect.val()].type_id,
            'printer_id': printers[printersSelect.val()].printer_id,
            'printer_type_id': printers[printersSelect.val()].type_id,
            'session': user_token
        }, select_printer_after);
    })

    //feedback
    $("#comment-btn").on("click",function(){
        get_post("feedback", {
            'email': client_email,
            'mark': $("#feedback_rating").val(),
            'comment': $("#feedback_comment").val(),
            'session': user_token
        }, feedback_after);
    })

    //printing commands
    $("#resume").on("click",function(){
        get_post("job_unpause", {
            'email': client_email,
            'session': user_token,
            'job_id': job_id
        });
    })

    $("#pause").on("click",function(){
        get_post("job_pause", {
            'email': client_email,
            'session': user_token,
            'job_id': job_id
        });
    })

    $("#continue_in_background").on("click",function(){
        $("#onClickPrinting").modal('toggle');
    })

    $("#cancel").on("click",function(){
        get_post("job_cancel", {
            'email': client_email,
            'session': user_token,
            'job_id': job_id
        });
    })

    $("p.nothing").on("click",function(){
        $(this).hide();
        $("p.soft_link").show();
        setTimeout(function(){
            $("a.soft_data_more").show();
        },30000)
    })

    $("a.soft_data_more").on("click",function(){
        $("p.soft_link").hide();
        $("p.soft_data").show();
    })

    function getClientUrl(uri, nocache) {
        return local_host_url+uri+(nocache?'&nocache='+Date.now():'');
    }

    function login(){
        logout_flag = false;
        get_server_post("/client.php", {}, function(data){
            if ( data.success ) {
                $('#onClickPrinting #next-btn').trigger('click');

                user_token = data.result.session;
                client_hash = data.result.hash;
                client_email = data.result.email;

                var func = function(){
                    var i;

                    i = new Image();
                    i.onload = function () {
                        if (this.naturalWidth==2) {
                            if (!logout_flag) {
                                logout_flag = true;
                                var i = new Image();
                                i.onerror = function () {
                                    i.onerror = null;
                                    i.src = '';
                                };
                                i.src = getClientUrl('logout', true);
                            }
                            setTimeout(func, 100);
                        }
                    };
                    i.onerror = function () {
                        setTimeout(func, 1000);
                    };
                    i.src = getClientUrl(client_hash, true);
                };
                setTimeout(func, 1000);

                $("#client_link_to_run").attr("href", getClientUrl(client_hash));
                var temp_hash = client_hash.substring(client_hash.indexOf("=")+1);
                $("p.soft_data span.username").text( temp_hash.substring(0,temp_hash.indexOf("&")) );
                $("p.soft_data span.password").text( temp_hash.substring(temp_hash.indexOf("=") + 1) );

                get_server_post("/client.php?files=true", {
                    'email': client_email,
                    'session': user_token
                }, upload_after);

                PrinterTimeOut = setInterval(function() {
                    get_post("get_printers", {
                        'email': client_email,
                        'session': user_token
                    }, get_printers_after);
                }, 1000);
            }
            else login();
        });
    }

    function upload_after(data){
        if ( data.success ) {
            file_id = data.result.file_id;
        }
    }

    function get_printers_after(data){
        if ( data.result.length ){
            var printer_id  = 0;
            var printer_num = 0;
            printersSelect.empty();
            for ( var i in data.result ){
                if ( data.result[i].printer_id != printer_id ){
                    printer_id = data.result[i].printer_id;
                    printer_num++;
                }
                printersSelect.append($("<option></option>")
                    .attr("value", i)
                    .text("[Printer" + printer_num + '] ' + data.result[i].type ));
            }

            $(".slicer").css("opacity","1");
            clearInterval(PrinterTimeOut);
            //clearInterval(ImgLoginTimeOut);
            $("#printer_progress").removeAttr("class");
            $("#printer_progress").addClass("green").text("OK");
            printers = data.result;

            //enabled fields
            $("select").removeAttr("disabled");
            $("input").removeAttr("disabled");

            //add materials
            for ( var i in matt ) {
                mattSelect.append($("<option></option>")
                    .attr("value", i)
                    .text(i));
            }
            mattSelect.append($("<option></option>")
                .attr("value", "CUSTOM")
                .text("CUSTOM"));

            printersSelect.trigger('change');
        }
    }

    function get_slicer_settings_after(data){
        if (  data.success ) {
            slicer_json = data.result;
            $('#layer_height').val(slicer_json['layer_height']);
            $('#wall_thickness').val(slicer_json['wall_thickness']);
            $('#fill_density').val(slicer_json['fill_density']);

            //sliders
            $('#layer_height_slider').val(slicer_json['layer_height']);
            $('#wall_thickness_slider').val(slicer_json['wall_thickness']);
            $('#fill_density_slider').val(slicer_json['fill_density']);

            mattSelect.val("CUSTOM");

            $('#print_temperature').val(slicer_json['print_temperature']);
            $('#print_bed_temperature').val(slicer_json['print_bed_temperature']);

            $("#print-btn").prop("disabled",false);
        }
    }

    function select_printer_after(){
        get_state_file();
    }

    function get_state_file(){
        if ( file_id == undefined ) {
            FileTimeOut = setInterval(get_state_file, 3000);
        }
        else {
            clearInterval(FileTimeOut);
            FileTimeOut = setInterval(function(){
                get_post("get_file_state", {
                        'email': client_email,
                        'session': user_token,
                        'file_id': file_id
                    }, function(data) {
                        if (data.success && data.result.state == "ready") {
                            clearInterval(FileTimeOut);
                            get_render_file();
                        }
                    }
                )
            },2000)
        }
    }

    function get_render_file(){
        clearInterval(FileTimeOut);
        FileTimeOut = setInterval(function(){
            get_post("get_file_render", {
                    'email': client_email,
                    'session': user_token,
                    'file_id': file_id
                }, function(data) {
                    if (data.success) {
                        clearInterval(FileTimeOut);
                        if ( stepPrint == "gcode" ) stepLabel = "Getting design";
                        else if ( stepPrint == "MagicFix" ) stepLabel = "Improve printability";
                        else stepLabel = "Locate on a build tray";
                        var content = "<div class=\"item dodgerBlue\"><p><label>" + stepLabel + "</label></p><img src='" + data.result.link + "'/></div>";
                        owl.data('owlCarousel').addItem(content);
                        owl.data('owlCarousel').jumpTo( $(".dodgerBlue").length );
                        setTimeout(function(){ step_to_print(); }, 3000);
                    }
                }
            )
        },2000)
    }

    function execute_app(app_name,settings){
        get_post("execute_application", {
                'email': client_email,
                'session': user_token,
                'file_id': file_id,
                'app_name': app_name,
                'settings': JSON.stringify(settings)
            }, function(data) {
                if (data.success) {
                    app_job_id = data.result.app_job_id;
                    get_app();
                }
            }
        )
    }

    function get_app(){
        FileTimeOut = setInterval(function(){
            get_post("get_application_state", {
                    'email': client_email,
                    'session': user_token,
                    'app_job_id': app_job_id
                }, function(data) {
                    if (data.success && data.result.state == "ready") {
                        clearInterval(FileTimeOut);
                        file_id = data.result.output_file_id;
                        get_state_file();
                    }
                }
            )
        },2000)
    }

    function step_to_print(){
        if ( stepPrint == "gcode" ){
            stepPrint = "MagicFix";
            execute_app("STLMagicFix",{"printer_type_id":printers[printersSelect.val()].type_id,"settings":{"move":true,"rotate":true,"zoom":true}});
        }
        else if ( stepPrint == "MagicFix" ){
            stepPrint = "slicer";

            //take user settings
            slicer_json['printer_type_id']       = printers[printersSelect.val()].type_id;
            slicer_json['layer_height']          = $('#layer_height').val();
            slicer_json['wall_thickness']        = $('#wall_thickness').val();
            slicer_json['fill_density']          = $('#fill_density').val();
            slicer_json['print_temperature']     = $('#print_temperature').val();
            slicer_json['print_bed_temperature'] = $('#print_bed_temperature').val();
            slicer_json['platform_adhesion']     = $("#platform_adhesion").val();
            slicer_json['f_material']            = mattSelect.val();
            slicer_json['f_support']             = $("#f_support").prop("checked");

            execute_app("slicer",slicer_json);
        }
        else{
            setTimeout(function() {
                get_post("print", {
                        'email': client_email,
                        'session': user_token,
                        'printer_id': printers[printersSelect.val()].printer_id,
                        'file_id': file_id
                    }, function (data) {
                        if (data.success) {
                            job_id = data.result.job_id;
                            setStep(stepId + 1);
                            print();
                        }
                    }
                )
            }, 5000);
        }
    }

    function print(){
        PrintingTimeOut = setInterval(function(){
            get_post("get_job_state", {
                    'email': client_email,
                    'session': user_token,
                    'job_id': job_id
                }, function(data) {
                    if (data.success) {

                        if ( (data.result.job_state == 'canceled') || (data.result.job_state == 'done') || (data.result.job_state == 'failed') ){
                            setStep (stepId + 1);
                            clearInterval(PrintingTimeOut);
                            clearInterval(LiveViewTimeout);
                        }
                        else {

                            if (data.result.state == 'paused'){
                                $("#resume").show();
                                $("#pause").hide();
                            }
                            else {
                                $("#pause").show();
                                $("#resume").hide();
                            }

                            var percent = data.result.printer_parameters.percent;
                            if (data.result.state == 'downloading'){
                                $(".progress-bar").attr("class","").addClass("progress-bar").addClass("progress-bar-default");
                                $("#job_progress").html("DOWNLOADING");
                                $("#job_progress").width( "100%");
                            }
                            else if (data.result.state == 'paused'){
                                $(".progress-bar").attr("class","").addClass("progress-bar").addClass("progress-bar-warning");
                                $("#job_progress").html("PAUSE");
                                $("#job_progress").width("100%");
                            }
                            else if (data.result.state == 'heating'){
                                $(".progress-bar").attr("class","").addClass("progress-bar").addClass("progress-bar-default");
                                $("#job_progress").html("HEATING");
                                $("#job_progress").width("100%");
                            }
                            else {
                                $(".progress-bar").attr("class","").addClass("progress-bar").addClass("progress-bar-success");
                                $("#job_progress").html(percent + "%");
                                $("#job_progress").width(percent + "%");
                            }

                            //logs
                            $("#logs").val(data.result.logs);

                            //temps
                            if (data.result.printer_parameters.target_temps !== undefined) {
                                var setTemp = "";
                                if (data.result.printer_parameters.target_temps[2] !== undefined) {
                                    setTemp += "R Extruder: " + data.result.printer_parameters.temps[2] + "/" + data.result.printer_parameters.target_temps[2] + " ";
                                }
                                if (data.result.printer_parameters.target_temps[1] !== undefined) {
                                    setTemp += "L Extruder: " + data.result.printer_parameters.temps[1] + "/" + data.result.printer_parameters.target_temps[1] + " ";
                                }
                                if (data.result.printer_parameters.target_temps[0] !== undefined) {
                                    setTemp += "<span> Heated Bed: " + data.result.printer_parameters.temps[0] + "/" + data.result.printer_parameters.target_temps[0] + " </span>";
                                }

                                $('#statusTemp').html(setTemp);
                            }

                            //time to print
                            //var total_duration = getSeconds(jobsArray[parseInt(job_id)].time_to_print);
                            var total_duration = data.result.time_to_print;
                            var one_protsent   =  total_duration / 100;
                            total_duration = total_duration - (percent * one_protsent);
                            total_duration = toHHMMSS(parseInt(total_duration));
                            $('#end-time-print').text(total_duration);
                        }
                    }
                }
            )
        },2000);
        LiveViewTimeout = setInterval(function(){
            get_post("get_live_view", {
                    'email': client_email,
                    'session': user_token,
                    'printer_id': printers[printersSelect.val()].printer_id
                }, function(data) {
                    if (data.success) {
                        $("#live_view").attr("src", "data:image/jpeg;base64," + data.result.image)
                    }
                    else $("#live_view").attr("src", "http://placehold.it/800x600");
                }
            )
        },2000);
    }

    function feedback_after(){
        $("#onClickPrinting").modal('toggle');
        alert("Feedback has been sent");
    }

});