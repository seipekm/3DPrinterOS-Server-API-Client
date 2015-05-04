function c3dViewer(){
    var t = this;
    this.ctmModel = null;
    this.editor = null;
    this.viewport = {};
    this.init = function(){
        window.URL = window.URL || window.webkitURL;
        window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
        Number.prototype.format = function (){
            return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        };
        this.editor = new Editor();
        viewport = new Viewport( this.editor,'aseviewport' );
        var container = document.getElementById( 'aseviewport' );
        container.appendChild( viewport.dom );
        var paneleEditor = new PaneleEditor(this.editor);
        this.editor.setTheme( this.editor.config.getKey( 'theme' ) );
        document.addEventListener( 'dragover', function ( event ) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';

        }, false );

        document.addEventListener( 'drop', function ( event ) {
            event.preventDefault();
            t.editor.loader.loadFile( event.dataTransfer.files[ 0 ] );
        }, false );

        document.addEventListener( 'keydown', function ( event ) {
            switch ( event.keyCode ) {
                case 8: // prevent browser back
                    event.preventDefault();
                    break;

            }
        }, false );

        var onWindowResize = function ( event ) {
            t.editor.signals.windowResize.dispatch();
        };
        window.addEventListener( 'resize', onWindowResize, false );
        onWindowResize();
    }
    this.getFileMessage = function(file){
        var reader = new FileReader();
        reader.addEventListener( 'load', function ( event ) {
            var data = null;
                var contents = event.target.result;
                // 2.0
                if ( contents.indexOf( 'postMessage' ) !== -1 ) {
                    var blob = new Blob( [ contents ], { type: 'text/javascript' } );
                    var url = URL.createObjectURL( blob );
                    var worker = new Worker( url );
                    worker.onmessage = function ( event ) {
                        event.data.metadata = { version: 2 };
                        data = event.data;
                    };
                    worker.postMessage( Date.now() );
                    return;
                }
                // >= 3.0
                try {
                    data = JSON.parse( contents );
                } catch ( error ) {
                    alert( error );
                    return;
                }
                var msg;
                if ( (data.error != undefined))
                {
                    if (data.error.content != undefined){
                        msg = data.error.content;
                    } else {
                        msg = data.error;
                    }
                } else {
                    msg = data;
                }
                 t.setProgressBar( { type: 'message', message: msg } );
        }, false );
        reader.readAsText( file );
    }
    this.loadFile = function(url, fileId, client_email, user_token){
        url = generateAPIUrl('get_ctm_model');
        var xhrFile = new XMLHttpRequest();
        xhrFile.open('POST', url, true);
        xhrFile.responseType = 'blob';
        
        xhrFile.onload = function(e) {
            if (this.status == 200) {
                if ( e.loaded < 100 ) {
                    t.getFileMessage(this.response);
                    setTimeout(function(){
                        t.loadFile(url, fileId, client_email, user_token);
                    }, 1000);
                    return false;
                }
                t.msgBlock.text(" ");
                this.response.name = fileId + ".cloudfmt";
                this.response.fileId = fileId;
                t.ctmModel = this.response;
                t.editor.loader.loadFile( this.response );
            }
        };
        xhrFile.addEventListener( 'progress', function ( event ) {
            t.setProgressBar( { type:'progress', loaded: event.loaded, total: event.total } );
        }, false );
        xhrFile.addEventListener( 'error', function () {
            t.setProgressBar( { type: 'error', message: 'Couldn\'t load URL [' + url + ']' } );
        }, false );
        if ( xhrFile.overrideMimeType ) xhrFile.overrideMimeType( 'text/plain; charset=x-user-defined' );

        var params = "file_id=" + fileId + "&email=" + client_email + "&session=" + user_token;

        xhrFile.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhrFile.send(params);
    }
    this.setProgressBar = function(event){
        var width = 100;
        var message = "";
        switch(event.type){
            case 'message':
                message = event.message;
                break;
            case 'error':
                message = 'Error: ' + event.message;
                break;
            case 'progress':
                width = parseInt(event.loaded /event.total* 100);
                var mb = event.loaded/1024/1024;
                mb = mb.toFixed(2);
                message = 'Download file: ' + mb+ ' MB';
                break;
            case 'parse':
                width = parseInt(event.loaded /event.total* 100);
                var mb = event.loaded;
                mb = mb.toFixed(2);
                message = 'Parsing : ' + mb+ ' polygons..';
                break;
                break;
            case 'complite':
                break;
        }
        if (message.length > 1){
            if (event.type == "message"){
                if (this.msgBlock == undefined){
                    var div = document.createElement("div");
                    div.style.position = "absolute";
                    div.style.top = "0";
                    div.style.left = "0";
                    this.msgBlock = jQuery(div);
                    jQuery("#aseviewport").append(this.msgBlock);
                }
                this.msgBlock.text(message);
            }
            setProgressEditor(width);
            if(width == 100){
                setAllActivButtons();
                stopProgressBgAnimate();
            }
        } else {
            setProgressEditor(0);
        }
    }
}
function cStlEditor3dClass(root){
    var t = this;
    this.root = $("#"+root);
    this.state = null;
    this.viewer = null;
    this.viewerEl = null;
    this.inited = {};
    this.fileId = null;
    this.printers = null;
    this.paneApi = null;
    this.interval = 3000;
    this.intervalId = null;
    this.showControls = true;
    this.planeWidth = 200;
    this.planeHeight = 200;
    this.objects = null;
    this.startObjects = null;
    this.startObjectsLoad = true;
    this.init = function(){
        /* this.root.find('.close').click(function () {
         t.hidePopup();
         }); */
        jQuery(document).on('click', '.close-stl-editor3d',function(){
            t.hidePopup();
        });

        this.viewerEl = this.root.find('.viewer3d');
        //t.startLoad(43306);

        jQuery(document).on('mouseover','#printer-list', function(){
            $(this).find('ul.sub').show();
        });
        jQuery(document).on('mouseout','#printer-list', function(){
            $(this).find('ul.sub').hide();
        });

        jQuery(document).on('click','#printer-list ul.sub a',function(){
            var PrinterAvtiveId = $(this).data('printer-id');
            var printerParameters = JSON.parse(window.printersList[parseInt(PrinterAvtiveId)].printer_parameters);;
            t.removeBed();
            t.newBed(parseFloat(printerParameters.x),parseFloat(printerParameters.y),parseFloat(printerParameters.z),printerParameters.bed_type);
            ///t.newBed(200,200,100);
            $(this).parents('ul.sub').hide();
        });

    }

    this.newBed = function(x,y,z,type){
        var round = false;
        if ( (type != undefined) && (type == "round") ){
            round = true;
        }
        var grid = new asePlane(y,x,z,5,50,round);

        window.strlEditor3d.viewer.editor.sceneHelpers.add(grid);
        window.strlEditor3d.viewer.editor.focus(grid);
        //window.strlEditor3d.viewer.viewport.render();

    }
    this.removeBed = function(){
        for(var key in window.strlEditor3d.viewer.editor.sceneHelpers.children){
            var scheneItemHelepers = window.strlEditor3d.viewer.editor.sceneHelpers.children[key] ;
            if(scheneItemHelepers.name == 'bed'){
                window.strlEditor3d.viewer.editor.sceneHelpers.remove(scheneItemHelepers);
            }
        }
    }

    this.getStatus = function(){
        clearInterval(this.intervalId);
        return false;
    }
    this.putMessage = function (msg){
        alert(msg);
    }
    this.callApi = function(){
        if (this.state != null){
            return;
        }
        //window.MFM.setLoadingFile(this.fileId,'show');
        //t.state = true;

        var url =  "/apps/stleditor3d/save/"+this.fileId;
        var data = {'objects':t.objects};
        astl_after( t.objects );
        return;
        this.hidePopup();
        $.ajax({
            url: url,
            data: data,
            type: "POST",
            dataType: 'json',
            success: function (result) {
                t.state = null;
                //console.log(result);
                window.MFM.quickAddFewFiles(t.fileId);
                if (result.error == false){
                    t.job_id = result.job_id;
                    window.MFM.setLoadingFile(t.fileId,'hide');
                    //t.getStatus();
                    //t.intervalId = setInterval(function(){t.getStatus();},t.interval);
                } else {
                    t.putMessage(result.error);
                }

            },
            error: function(a,b,c){
                alert(a.responseText);
            }
        });

    }
    this.startLoad = function (id, client_email, user_token){
        this.fileId = id;
        this.viewer = new c3dViewer(this.viewerEl);
        var url = "/apps/viewer3d/getstl/"+this.fileId+"/";
        var url_info = "/ajax/get_file_info/"+this.fileId+"/";
        this.viewer.init();
        this.viewer.editor.exportObjects = function(objects){
            /*
            if ( t.startObjectsLoad ){
                t.startObjects = objects;
                t.startObjectsLoad = false;
            }
            */
            if ( false ) {

            }
            else {
                t.objects = objects;
                t.callApi();
            }
        }
        this.viewer.loadFile(url, id, client_email, user_token);
    }

    this.loadPrinters = function (){
        if (this.printers == null){
            if (window.printersList != undefined){
                this.printers = window.printersList;
                t.drawPrintersList();
            } else {
                var url = "/ajax/get_printers/";
                $.ajax({
                    url: url,
                    type: "POST",
                    dataType: 'json',
                    success: function (result) {
                        t.printers = result;
                        window.printersList = result;
                        t.drawPrintersList();
                    }
                });
            }
        }

    }

    this.getPrinters = function (){
        return this.printers;
    }

    this.drawPrintersList = function(){

        var ul,ul2,li,li2,a,params,k,div;
        var params = {};
        var byName = Array();
        for (var i in this.printers) {
            byName.push({description: this.printers[i].description, id: i,printer_parameters:this.printers[i].printer_parameters});

        }
        byName.sort(function(a,b) {
            var x = a.description.toLowerCase();
            var y = b.description.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });

        var printer_obj_param = {};
        for (var i in byName){
            printer_obj_param[byName[i].description] = byName[i].printer_parameters;

            this.setPrinterListRow('<li><a href="javascript:;" data-printer-id="'+ byName[i].id  +'">' + byName[i].description + '</a></li>');
        }

        var obj_value = '';
        for (var i in this.printers){
            obj_value = JSON.parse(t.printers[i].printer_parameters);
            break;
        }
    }

    this.setPrinterListRow = function(row){
        $('#printer-list ul.sub').append(row);
    }

    this.hidePopup = function(){
        clearInterval(this.intervalId);
        this.viewerEl.empty();
        setProgressEditor(0);
        disablePopupsBlur();
        this.root.fadeOut('slow');
    }

    this.showPopup = function(){
        this.state = null;
        hideAllPopups();
        setAllDisabledButtons();
        enablePopupsBlur();
        this.root.fadeIn();
        centrify(this.root);
        startProgressBgAnimate();
        if (this.showControls == true){
            if (this.paneApi == null){
                this.paneApi = this.root.find('.printerslist').jScrollPane().data('jsp');
            }
        }
    }

    this.setPlaneSize = function(width,height,depth,dontLoad){
        if (dontLoad == undefined){
            this.viewer.planeSizeX = width;
            this.viewer.planeSizeY = height;
            this.viewer.planeSizeZ = depth;
            this.viewer.createPlaneBg();
        } else {
            this.planeSizeX = width;
            this.planeSizeY = height;
            this.planeSizeZ = depth;
        }
    }


}
$(document).ready(function() {
    window.strlEditor3d = new cStlEditor3dClass("stl_editor3d_popup");
    window.strlEditor3d.init();
    setAllDisabledButtons();

    var ActiveControl = 'translate'
    /*  Buttons  */
    // paneleEventOpen(ActiveControl);
    var objectStartSize = {};

    $(document).on('click','.stl-editor3d-btn',function(){
        ActiveControl = 'translate';
        removeAllButtonActiveCalss();
        paneleEventOpen(ActiveControl);
        $('#obj-move').parent('li').addClass('active');
        setPositionObject('-','-','-');
    });

    function removeAllButtonActiveCalss(){
        $('#stl-ed-nav ul li').removeClass('active');
    }


    $('#obj-move').click(function(){
        window.strlEditor3d.viewer.editor.signals.transformModeChanged.dispatch('translate');
        $("#os-panel-scale").hide();
        $(".obj-sizes input").prop('disabled',true);
    });

    $('#obj-rotate').click(function(){
       $("#os-panel-scale").hide();
       $(".obj-sizes input").prop('disabled',true);
        window.strlEditor3d.viewer.editor.signals.transformModeChanged.dispatch('rotate'); 
    });


    $('#obj-scale').click(function(){
        window.strlEditor3d.viewer.editor.signals.transformModeChanged.dispatch('scale');
        $("#os-panel-scale").show();
        $(".obj-sizes input").prop('disabled',false);
    });

    $('#obj-save').click(function(){
        window.strlEditor3d.viewer.editor.signals.saveObjects.dispatch();
        /*
        if($('#content-header a.myfilestab').hasClass('selected')){
            goToProjectTab();
        }
        */
    });
    $('#obj-scale-slider,#obj-scale-value input').change(function(){
        setObjScale(this);
    });
    $('.obj-sizes input').change(function(){
        var factor = (parseFloat(this.value)) / objectStartSize[this.name];
        var input = $('#obj-scale-value input');
        input.val(parseFloat(factor*100).toFixed(2));
        setObjScale(input);
    })
    window.setObjScale = function(obj) {
        var el = jQuery(obj);
        var value = el.val();
        value = parseFloat(value).toFixed(2);
        $('#obj-scale-value input').val(value);
        $('#obj-scale-slider').val(value);
        
        if (window.strlEditor3d.viewer.editor.selected){
            var obj = window.strlEditor3d.viewer.editor.selected;
            obj.scale.x = (value/100);
            obj.scale.z = (value/100);
            obj.scale.y = (value/100);
            window.strlEditor3d.viewer.editor.signals.sceneGraphChanged.dispatch();
            var box = new THREE.BoundingBoxHelper( window.strlEditor3d.viewer.editor.selected );
            box.update();
            defBox={};
            defBox.x = box.box.max.x - box.box.min.x;
            defBox.y = box.box.max.y - box.box.min.y;
            defBox.z = box.box.max.z - box.box.min.z;
            $('.obj-sizes input[name=obj-size-x]').val(defBox.x.toFixed(2));
            $('.obj-sizes input[name=obj-size-y]').val(defBox.y.toFixed(2));
            $('.obj-sizes input[name=obj-size-z]').val(defBox.z.toFixed(2));
            if (objectStartSize['obj-size-x'] == undefined){
                objectStartSize['obj-size-x'] = defBox.x;
                objectStartSize['obj-size-y'] = defBox.y;
                objectStartSize['obj-size-z'] = defBox.z;
            }
        }
    };
    var oldScale = {};
    window.setScaleObject = function (x,y,z){
        var newScale;
        if (oldScale.x = undefined){
            oldScale.x = x;
            oldScale.y = y;
            oldScale.z = z;
        }
        if (oldScale.x != x){
            newScale = x;            
        }
        if (oldScale.y != y){
            newScale = y;
        }
        if (oldScale.z != z){
            newScale = z;
        }
        var input = $('#obj-scale-value input');
        var val = Math.abs(newScale * 100);
        
        input.val(val.toFixed(2));
        setObjScale(input);
        oldScale.x = window.strlEditor3d.viewer.editor.selected.scale.x;
        oldScale.y = window.strlEditor3d.viewer.editor.selected.scale.y;
        oldScale.z = window.strlEditor3d.viewer.editor.selected.scale.z;
    }
    $('#aseviewport').click(function(){
        $('.os-panel .block').hide()
        if(!window.strlEditor3d.viewer.editor.selected){
            setAllDisabledButtons();
            paneleEventClose();
        }else{
            setAllActivButtons();
            if( ActiveControl == 'translate'){
                paneleEventOpen(ActiveControl);
                $('.os-panel .block.move').show();
            }
            if( ActiveControl == 'rotate'){
                paneleEventOpen(ActiveControl);
                $('.os-panel .block.rotate').show();
            }
        }
    });

    $('#obj-onbed').click(function(){
        window.strlEditor3d.viewer.editor.signals.onBed.dispatch();
    });

    $('#obj-center').click(function(){
        window.strlEditor3d.viewer.editor.signals.objectCenter.dispatch();
    });

    $('#obj-reset').click(function(){
        window.strlEditor3d.viewer.editor.signals.objectReset.dispatch();
    });


    function checkParseFloat(num){
        var numData =  parseFloat(num);
        if(!numData){
            numData = 0;
        }
        return numData;
    }

    $('#update-panele').click(function(){
        var x_position = checkParseFloat($('#x-position').val());
        var y_position = checkParseFloat($('#y-position').val());
        var z_position = checkParseFloat($('#z-position').val());



        // editor.selected.position.set(position.x,position.y,editor.selected.position.z -= box.position.y - (box.box.max.y - box.box.min.y)/2);



        // var position = THREE.GeometryUtils.center( window.strlEditor3d.viewer.editor.selected.geometry );

        var box = new THREE.BoundingBoxHelper( window.strlEditor3d.viewer.editor.selected );
        box.update();
        // editor.selected.position.set(position.x,position.y,window.strlEditor3d.viewer.editor.selected.position.z - box.position.y - (box.box.max.y - box.box.min.y)/2);

        //window.strlEditor3d.viewer.editor.selected.position.set(x_position,y_position,z_position);
        window.strlEditor3d.viewer.editor.signals.objectMove.dispatch(x_position,y_position,z_position -(box.box.max.y - box.box.min.y)/2);

        //window.strlEditor3d.viewer.editor.selected.updateMatrix();
        //window.strlEditor3d.viewer.editor.focus(window.strlEditor3d.viewer.editor.selected);
        setPositionObject(x_position,y_position,z_position);
    });

    $('#reset-panele').click(function(){
        window.strlEditor3d.viewer.editor.signals.objectCenter.dispatch();
        var position = window.strlEditor3d.viewer.editor.selected.position;
        setPositionObject(position.x,position.y,position.z);
    });


    /* rotate */
    $('.block.rotate button').click(function(){
        var positionRotation = $(this).parents('.el').data('position');
        var objectPosition =  window.strlEditor3d.viewer.editor.selected.rotation;
        var corner = Math.PI * 90 / 4;
        if($(this).hasClass('minus')){
            corner = parseFloat('-' + corner);
        }

        switch (positionRotation) {
            case 'x':
                objectPosition.x += corner;
                break;
            case 'z':
                objectPosition.y += corner;
                break;
            case 'y':
                objectPosition.z += corner;
                break;

        }
        window.strlEditor3d.viewer.editor.signals.objectRotate.dispatch(objectPosition.x ,objectPosition.y,objectPosition.z);

    });

});




var ProgressBgAnimate;
function setProgressEditor(num){
    var ProgressBarSelector = $('#stl_editor3d_popup .progress .value');
    ProgressBarSelector.css({'width': num + '%' });
    if (num == 0){
        ProgressBarSelector.parent().hide();
    } else {
        ProgressBarSelector.parent().show();
    }
}
function startProgressBgAnimate(){
    var ProgressSelectror = $('#stl_editor3d_popup .progress');
    ProgressSelectror.show();
    ProgressSelectror.css({'background-image': 'url(http://acorn.3dprinteros.com/assets/i/preloading.png)'});
    ProgressSelectror.css({'background-color': '#E1E1E1'});
    ProgressBgAnimate = setInterval(
        function(){
            ProgressSelectror.animate({
                backgroundPositionY: "0px",
                backgroundPositionX: "-20px"
            }, 500,function(){

                ProgressSelectror.css({'background-position-x':'-2.5px'});
            });
        },
        500
    )
}
function stopProgressBgAnimate(){

    clearInterval(ProgressBgAnimate);
    var ProgressSelectror = $('#stl_editor3d_popup .progress');
    ProgressSelectror.css({'background-image':'none'});
    ProgressSelectror.hide();
}

function setPositionObject(x,y,z){
    if (x != '-'){
        x = x.toFixed(4);
    }
    if (y != '-'){
        y = y.toFixed(4);
    }
    if (z != '-'){
        z = z.toFixed(4);
    }
    document.querySelector('#x-position').value = x;
    document.querySelector('#y-position').value = y;
    document.querySelector('#z-position').value = z;
}

/*
 document.querySelector('.os-panel input').onkeydown = function(){
 setPosition();
 }
 */

function setPosition(){
    update();
}


function setDisabledButton(id){
    var selector = '#stl-ed-nav li a#' + id + ' .icon img' ;
    $(selector).attr('src',$(selector).data('disabled-img'));
}

function setAllDisabledButtons(){
    $('#stl-ed-nav li a .icon img').each(function(){

        if(!$(this).parents('a').hasClass('no-disabled')){
            $(this).attr('src',$(this).data('disabled-img'));
            $(this).parents('li').addClass('disabled');
        }
    });
}

function setAllActivButtons(){
    $('#stl-ed-nav li a .icon img').each(function(){
        $(this).attr('src',$(this).data('active-img'));
        $(this).parents('li').removeClass('disabled');
    });
}

function paneleEvet(){
    if($('.os-panel').hasClass('close')){
        openPanel();
        $('.os-panel').removeClass('close');
    }else{
        closePanel();
        $('.os-panel').removeClass('active');
    }
}
function paneleEventClose(){
    if(!$('.os-panel').hasClass('close')) {
        closePanel();
        $('.os-panel').removeClass('open');
    }
}

function paneleEventOpen(ActiveControl){
    if(!$('.os-panel').hasClass('open')) {
        openPanel();
        $('.os-panel').removeClass('close');
    }
}

//var keyAnimate = true;
function closePanel(){
    $('.os-panel').stop();
    $('.os-panel').css('right','0px');
    $('.os-panel').animate({
        right: "-=320"
    }, 500, function() {
        // Animation complete.
        $('.os-panel').addClass('close');
        $('.os-panel').removeClass('open');

    });
}
function openPanel(){
    $('.os-panel').stop();
    $('.os-panel').css('right','-320px');
    $('.os-panel').animate({
        right: "+=320"
    }, 500, function() {
        // Animation complete.
        $('.os-panel').addClass('open');
        $('.os-panel').removeClass('close');
    });
}
