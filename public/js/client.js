/**
 * 3DPrinterOS JS client.
 *
 * @param {object} settings
 * @constructor
 */
var Client3DPrinterOS = function(settings) {

    /**
     * Client settings
     * @type {object}
     */
    var options = $.extend({
        type: null,
        email: null,
        session: null,
        hash: null,
        file_id: null,
        debug: false
    }, settings);

    /**
     * 3DPrinterOD API service
     * @type {Api3DPrinterOS}
     */
    var api = new Api3DPrinterOS(options.debug);

    /**
     * Auth status of localhost client
     * @type {string|null}
     */
    var clientStatus;

    /**
     * Printers list
     * @type {Array}
     */
    var printers = [];

    /**
     * Current printer
     * @type {object}
     */
    var printer = {
        printer_id: 0,
        type_id: 0,
        type: '',
        slicer_settings: null
    };

    /**
     * Current file ID
     * @type {int|null}
     */
    var file_id;

    /**
     * Printing job ID
     * @type {int|null}
     */
    var job_id;

    /**
     * Self instance
     * @type {Client3DPrinterOS}
     */
    var self = this;

    /**
     * Set option value
     * @param {string} name
     * @param {*} value
     */
    this.setOption = function(name, value) {
        options[name] = value;
    };

    /**
     * Auth url of local 3DPrinterOS client
     * @returns {string}
     */
    this.getClientAuthUrl = function() {
        return 'http://localhost:8008/?' + options.hash;
    };

    /**
     * Get printer list
     * @returns {Array}
     */
    this.getPrinterList = function() {
        return printers;
    };

    /**
     * Get current (selected) printer
     * @returns {Object}
     */
    this.getCurrentPrinter = function() {
        return printer;
    };

    /**
     * Start js client
     */
    this.start = function() {
        //Init api service
        api.setClientType(options.type);
        api.setEmail(options.email);
        api.setSession(options.session);
        //Define file ID
        file_id = options.file_id;
        //Localhost client signIn
        signIn();
        //Retrieve user printers
        window.printer_list_promise = setInterval(function() {
            api.getPrinters(function(response) {
                if (response.success && response.result.length) {
                    printers = response.result;
                    clearInterval(window.printer_list_promise);
                    dispatch('printer_list', {'printers': printers});
                }
            });
        }, 2000);
    };

    /**
     * Select printer type
     * @param {int} index Printer index in printer list
     */
    this.selectPrinter = function(index) {
        if (printers[index] == undefined) {
            return;
        }
        //Send request to select printer type on client
        api.selectPrinter(options.file_id, printers[index].printer_id, printers[index].type_id, function(response) {
            if (response.success) {
                printer = printers[index];
                dispatch('select_printer', {'printer': printer});
                //Get slicer settings for selected printer
                if (!printer.slicer_settings) {
                    api.getSlicerSettings(printer.type_id, function(response) {
                        if (response.success) {
                            printer.slicer_settings = response.result;
                            dispatch('printer_slicer_settings', {
                                'printer_index': index,
                                'printer': printer,
                                'slicer_settings': printer.slicer_settings
                            });
                        }
                    });
                }
            }
        });
    };

    /**
     * Execute magic fix application
     */
    this.executeMagicFix = function() {
        //Application settings
        var settings = {'move':true, 'rotate':true, 'zoom':true};
        if (arguments.length > 0) {
            settings = arguments[0];
        }
        //Notify about magic fix starting
        dispatch('app.magic_fix', {status: 'start'});
        //Check file
        onFileReady(function() {
            //Execute application
            dispatch('app.magic_fix', {status: 'execute'});
            executeApplication('STLMagicFix', {'printer_type_id': printer.type_id, 'settings': settings}, function() {
                onFileReady(function() {
                    dispatch('app.magic_fix', {status: 'finish'});
                });
            });
        });
    };

    /**
     * Execute slice application
     * @param {object} settings
     */
    this.executeSlicer = function(settings) {
        //Application settings
        settings.printer_type_id = printer.type_id;
        //Notify about start slicer
        dispatch('app.slicer', {status: 'start'});
        //Check file
        onFileReady(function() {
            //Execute application
            dispatch('app.slicer', {status: 'execute'});
            executeApplication('slicer', settings, function() {
                onFileReady(function() {
                    dispatch('app.slicer', {status: 'finish'});
                });
            });
        });
    };

    /**
     * Start printing
     */
    this.print = function() {
        //Start printing
        api.print(printer.printer_id, file_id, function(response) {
            if (response.success) {
                dispatch('printing.start', {});
                //Save job id
                job_id = response.result.job_id;
                //Check printing state
                checkPrintingState(job_id);
            }
        });
    };

    /**
     * Printing pause signal
     */
    this.pausePrint = function() {
        api.jobPause(job_id, function() {});
    };

    /**
     * Printing resume signal
     */
    this.resumePrint = function() {
        api.jobRejectPause(job_id, function() {});
    };

    /**
     * Printing cancel signal
     */
    this.cancelPrint = function() {
        api.jobCancel(job_id, function() {});
    };

    /**
     * Clear all processes
     */
    this.clear = function() {
        //Clear all promises
        clearInterval(window.printer_list_promise);
        clearInterval(window.file_state_promise);
        clearInterval(window.app_promise);
        clearInterval(print_promise);
        //Revert data
        file_id = options.file_id;
        job_id = null;
    };

    /**
     * Dispatch event
     * @param {string} name
     * @param {object} data
     */
    var dispatch = function(name, data) {
        var event = $.extend(data, {'type': '3dprinteros.client.' + name});
        $(document).trigger(event);
    };

    /**
     * Try sign in to localhost client
     */
    var signIn = function() {
        //Send login request via image loading. It's a trick to send request from HTTPS to HTTP.
        var i = new Image();
        i.onload = function() {
            if (this.naturalWidth == 1) {
                //Success authentication
                clientStatus = 'auth';
            } else {
                //Login failed, try again
                if (clientStatus != 'not_auth') {
                    clientStatus = 'not_auth';
                }
                setTimeout(signIn, 1000);
            }
            //Notify about auth status changing
            dispatch('auth_status_change', {'status': clientStatus});
        };
        i.onerror = function() {
            //Client is not open, try again
            setTimeout(signIn, 100);
            //Change auth status
            if (clientStatus != 'off') {
                clientStatus = 'off';
                dispatch('auth_status_change', {'status': clientStatus});
            }
        };
        i.src = self.getClientAuthUrl();
    };

    /**
     * Check file state and run callback function if file "ready"
     * @param {Function} callback
     */
    var onFileReady = function(callback) {
        window.file_state_promise = setInterval(function() {
            api.getFileState(file_id, function(response) {
                if (response.success && response.result.state == 'ready') {
                    clearInterval(window.file_state_promise);
                    callback();
                }
            })
        }, 2000);
    };

    /**
     * Execute remote application, run callback function after app finished success
     * @param {string} name
     * @param {object} settings
     * @param {Function} callback
     */
     var executeApplication = function(name, settings, callback) {
        api.executeApplication(file_id, name, settings, function(response) {
            if (response.success) {
                //Wait when application has finished job
                window.app_promise = setInterval(function() {
                    api.getApplicationState(response.result.app_job_id, function(response) {
                        if (response.success && response.result.state == 'ready') {
                            clearInterval(window.app_promise);
                            file_id = response.result.output_file_id;
                            callback();
                        }
                    });
                }, 2000);
            }
        });
    };

    /**
     * Request current printer state
     * @param {int} jobId
     */
    var checkPrintingState = function(jobId) {
        window.print_promise = setInterval(function() {
            api.getJobState(jobId, function(response) {
                if (response.success) {
                    //Check critical printing state
                    var jobState = response.result.job_state;
                    if (jobState == 'canceled' || jobState == 'done' || jobState == 'failed') {
                        clearInterval(window.print_promise);
                        dispatch('printing.' + jobState, response.result);

                        return;
                    }
                    //Notify about printing state
                    dispatch('printing.state', response.result);
                }
            });
        }, 2000);
    }
};

/*****************************************************************************************************
 *
 * Example of how to use 3DPrinterOS JS client. You can use as template of printing wizard.
 *
 *****************************************************************************************************/

//Create 3DPrinterOS JS client
var client = new Client3DPrinterOS({
    debug: true
});

//Create wizard object
var wizard = new Wizard('button-next', 'button-back', 5);
//Data binder for slicer settings
var binder = new Binder('json-anchor');
//Define file type
var file_type = 'stl'; //"stl" or "gcode"

/**
 * Actions after the page loads
 */
function afterLoad() {
    //Create session
    $.ajax({
        'url': 'client.php',
        'data': {'method': 'create_session'},
        'dataType': 'json',
        'method': 'POST',
        'success': function(response) {
            if (response.success) {
                //Set client params
                client.setOption('type', response.result.type);
                client.setOption('email', response.result.email);
                client.setOption('session', response.result.session);
                client.setOption('hash', response.result.hash);
                //Switch progress view
                $('#cloud_auth').hide();
                $('#upload_file').show();
                //$('#connecting-box').addClass('hidden');
                //Upload file
                setClientLink(response.result.client_links,response.result.client_version);
                upload(response.result.email, response.result.session);
            }
        }
    })
}

function setClientLink(links,version){

    var option = "<option value='"+ links.mac +"'>MacOS (10.10.2+)</option>";
        option += "<option value='"+ links.win +"'>Windows (7/8/8.1, 32/64bit)</option>";
        option += "<option value='"+ links.ubuntu +"'>Ubuntu (14.10+)</option>";
    $('#clientLink').html(option);
}

/**
 * Call server method to upload static file into 3DPrinterOS cloud
 */
function upload(email, session) {
    $.ajax({
        'url': 'client.php',
        'data': {
            'email': email,
            'session': session,
            'method': 'static_upload',
            'file_type': file_type
        },
        'method': 'POST',
        'dataType': 'json',
        'success': function(response) {
            if (response.success) {
                //Set file_id
                client.setOption('file_id', response.result.file_id);
                //Show wizard page
                $('#upload_file').hide();
                $('.api-box').show();
                //Start wizard
                wizard.init();
            }
        }
    })
}

//Global wizard customization
wizard.customizeStep('*', function(event) {
    //Hide print button on first 3 steps
    if (event.step < 3) {
        $('#button-print').addClass('hidden');
    } else {
        $('#button-next').addClass('hidden');
    }
    //Hide back button on last steps
    if (event.step > 3) {
        $('#button-back').addClass('hidden');
    }
    //Need to clear all printing preparation and print processes if go back to first 2 steps
    if (event.step <= 2 && event.targetStep > 2) {
        client.clear();
    }
    //Switch breadcrumb navigation
    $('.nav-wizard li').removeClass('active');
    $('.nav-wizard li.nav-' + event.step).addClass('active');
});
//First step actions (choose printer)
wizard.customizeStep(1, function(event) {
    if (event.direct != 'back') {
        //Start client
        client.start();
    }
    if (file_type == 'gcode') {
        $('#button-next').addClass('hidden');
        $('#button-print').removeClass('hidden');
    }
});
//Second step actions (slicer settings)
wizard.customizeStep(2, function(event) {
    //Only printing for gcode
    if (file_type == 'gcode') {
        wizard.jump(event.direct == 'next' ? 4 : 1);
    }
});
//Third step action (prepare file for printing)
wizard.customizeStep(3, function(event) {
    if (event.direct == 'back') {
        //Back to slicing settings step
        wizard.back();
    }
    //Clear progress bars
    $('#prepare-progress .progress-bar').css({'width':'0%'});
    $('#prepare-progress .progress-bar').html('');
    $('#prepare-step').html('Init design...');
    //Show print button
    $('#button-print').removeClass('hidden');
    $('#button-print').prop('disabled', true);
    //Start magic fix
    client.executeMagicFix();
});
//Four step action (start printing)
wizard.customizeStep(4, function() {
    //Hide print button
    $('#button-print').hide();
    $('#cancel').show();
    $('#pause').show();
    //Clear progress bar
    $('#print-progress .progress-bar').css({'width':'0%'});
    //Start printing
    client.print();
});
//Five step action (printing finished, congrats page)
wizard.customizeStep(5, function() {
    $('#cancel').hide();
    $('#pause').hide();
});

//Click bnt Download client
$('.btn-download-client').click(function(){
    window.location.href =  $('#clientLink option:selected').val();
});
//Change printer type
$('#printers').on('change', function() {
    var printerIndex = $(this).val();
    if (printerIndex) {
        client.selectPrinter(printerIndex);
    }
});
//Click to print button
$('#button-print').on('click', function() {
    //Go next step, printing
    wizard.next();
});
//Click to pause printing button
$('#pause-button').on('click', function() {
    client.pausePrint();
});
//Click to resume printing button
$('#resume-button').on('click', function() {
    client.resumePrint();
});
//Click to cancel printing button
$('#cancel-button').on('click', function() {
    client.cancelPrint();
});

//Subscribe to client auth status chang
$(document).on('3dprinteros.client.auth_status_change', function(event) {
    if (event.status == 'off') {
        $('#clientLink').show();
        $('.btn-download-client').show();
        $('.no-client-text').show();
    } else  {
        $('#clientLink').hide();
        $('.btn-download-client').hide();
        $('.no-client-text').hide();
        $('#printers').show();
        if (event.status == 'not_auth') {
            $('.connect-client-text').show();
        }
    }
});
//Subscribe to receiving of printer list
$(document).on('3dprinteros.client.printer_list', function(event) {
    //Fill printers list in DOM
    var $printers = $('#printers');
    $printers.empty();
    //Fill printers select element
    $printers.append('<option>Choose printer</option>');
    $.each(event.printers, function(i, printer) {
        var option = $('<option>');
        option.val(i);
        option.text('[Printer ' + (i + 1) + '] ' + printer.type);
        $printers.append(option);
    });
    //Enable next button
    $('#button-next').prop('disabled', false);
    //Toggle printer connection icon
    $(".status-printer").attr('src','public/images/connected.svg');
    $("#status-label").removeClass('text-warning').addClass('text-info').text('Printer Connected !');
});
//Subscribe to receiving of slicer settings
$(document).on('3dprinteros.client.printer_slicer_settings', function(event) {
    binder.setData(event.slicer_settings);
});
//Subscribe to magic fix progress
$(document).on('3dprinteros.client.app.magic_fix', function(event) {
    if (event.status == 'start') {
        $('#prepare-progress .magic_fix').css({width: '15%'});
        $('#prepare-step').html('Magic Fix...');
        $('.class-svg-op .fix_small').css('opacity','1');
    } else if (event.status == 'execute') {
        $('#prepare-progress .magic_fix').css({width: '25%'});
    } else if (event.status == 'finish') {
        $('#prepare-progress .magic_fix').css({width: '35%'});
        $('.class-svg-op .fix_small').attr('src','public/images/ok_small.svg');
        //Execute slicing
        client.executeSlicer(binder.getData());
    }
});
//Subscribe to slicer progress
$(document).on('3dprinteros.client.app.slicer', function(event) {
    if (event.status == 'start') {
        $('#prepare-progress .slice').css({width: '15%'});
        $('#prepare-step').html('Slicing...');
        $('.class-svg-op .slice_small').css('opacity','1');
    } else if (event.status == 'execute') {
        $('#prepare-progress .slice').css({width: '35%'});
        $('#prepare-progress .slice').removeClass('progress-bar-warning');
        $('#prepare-progress .slice').addClass('progress-striped');
        $('.class-svg-op .slice_small').attr('src','public/images/ok_small.svg');
    } else if (event.status == 'finish') {
        $('#prepare-progress .finish').css({width: '30%'});
        $('#prepare-step').html('Complete!');
        $('.class-svg-op .download_small').css('opacity','1');
        $('#prepare-progress .finish').removeClass('progress-bar-finish');
        $('#prepare-progress .finish').addClass('progress-striped');
        $('.class-svg-op .download_small').attr('src','public/images/ok_small.svg');
        //Show print button
        $('#button-print').prop('disabled', false);
        wizard.jump(4);
    }
});
//Subscribe to printing start
$(document).on('3dprinteros.client.printing.start', function() {
    window.start_print_time = Date.now();
});
//Subscribe to printing cancel
$(document).on('3dprinteros.client.printing.canceled', function() {
    wizard.jump(1);
});
//Subscribe to printing fail
$(document).on('3dprinteros.client.printing.failed', function() {
    //TODO: show error
});
//Subscribe to printing done
$(document).on('3dprinteros.client.printing.done', function() {
    $('#print-progress').find('.progress-bar-striped').width('50%').html('Printing 100%');
    setTimeout(function() { wizard.next(); }, 1000);
});
//Subscribe to printing state updates
$(document).on('3dprinteros.client.printing.state', function(event) {
    var printer_params = event.printer_parameters;
    //Show printing progress
    var percent = printer_params.percent;
    var progress = $('#print-progress');
    if (event.state == 'downloading') {
        progress.find('.progress-bar-downloading').width('25%').html('Downloading');
    } else if (event.state == 'heating') {
        progress.find('.progress-bar-heating').width('25%').html('Heating');
    } else {
        if (percent > 0) {
            progress.find('.progress-bar-striped').width((percent / 2) + '%').html('Printing ' + percent + '%');
        }
    }
    //Show/hide printer and resume buttons
    if (event.state == 'paused') {
        $('#resume').removeClass('hidden');
        $('#pause').addClass('hidden');
    } else {
        $('#resume').addClass('hidden');
        $('#pause').removeClass('hidden');
    }
    //Update printing logs
    $('#print-logs').text(event.logs);
    //Show heating temperature
    if (printer_params.target_temps !== undefined) {
        var setTemp = "";
        if (printer_params.target_temps[2] !== undefined) {
            setTemp += "<p class='m-b-1'><span>R Extruder Temp:</span><span>" + printer_params.temps[2] + "/" + printer_params.target_temps[2] + "</span></p>";
        }
        if (printer_params.target_temps[1] !== undefined) {
            setTemp += "<p class='m-b-1'><span>L Extruder Temp:</span><span>" + printer_params.temps[1] + "/" + printer_params.target_temps[1] + "</span></p>";
        }
        if (printer_params.target_temps[0] !== undefined) {
            setTemp += "<p><span>Heatbed Temp:</span><span>" + printer_params.temps[0] + "/" + printer_params.target_temps[0] + "</span></p>";
        }
        $('#statusTemp').html(setTemp);
    }
    //Show printing time
    var total_duration = event.time_to_print;
    total_duration = total_duration - (percent * total_duration / 100);
    total_duration = toHHMMSS(parseInt(total_duration));
    $('#end-time-print').text(total_duration);
    $('#spend-time-print').text(toHHMMSS((Math.round(Date.now() - window.start_print_time) / 1000)));
});

function toHHMMSS(secs) {
    var sec_num = parseInt(secs);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    return hours + ':' + minutes + ':' + seconds;
}