/**
 * 3DPrinterOS API caller
 */
function Api3DPrinterOS() {
    /**
     * Debug mode
     * @type {boolean}
     */
    var debug = arguments.length > 0 ? arguments[0] : false;

    /**
     * API base url
     *
     * @type {string}
     */
    var baseUrl = 'https://cloud.3dprinteros.com/api/';

    /**
     * Client type
     * @type {string}
     */
    var type;

    /**
     * Client email
     * @type {string}
     */
    var email;

    /**
     * Current session ID
     * @type {string}
     */
    var session;

    /**
     * Link to instance
     * @type {Api3DPrinterOS}
     */
    var self = this;

    /**
     * Set client type name
     * @param value
     */
    this.setClientType = function(value) {
        type = value;
    };

    /**
     * Get client type name
     * @returns {string}
     */
    this.getClientType = function() {
        return type;
    };

    /**
     * Get client email
     * @returns {string}
     */
    this.getEmail = function() {
        return email;
    };

    /**
     * Set client email
     * @param {string} value
     */
    this.setEmail = function(value) {
        email = value;
    };

    /**
     * Get client session
     * @returns {string}
     */
    this.getSession = function() {
        return session;
    };

    /**
     * Set client session ID
     * @param {string} value
     */
    this.setSession = function(value) {
        session = value;
    };

    /**
     * Api caller
     * @param {String} method
     * @param {Object} params
     * @param {Function} callback
     */
    var callApi = function(method, params, callback) {
        var data = $.extend({
            'email': email,
            'session': session
        }, params);
        $.ajax({
            'url': baseUrl + type + '/' + method,
            'dataType': 'json',
            'data': data,
            'method': 'POST',
            'success': function(response) {
                self.logger(response, 'API caller ' + method);
                if (callback) {
                    callback(response);
                }
                //TODO: error page, handle errors
            },
            'error': function(error) {
                self.logger(error, 'API caller ERROR ' + method);
                //TODO: error page
            }
        });
    };

    /**
     * Write log
     * @param {String} message
     */
    this.logger = function(message) {
        if (!debug) return;
        var title = '';
        if (arguments.length > 1) {
            title = arguments[1] + ': ';
        }
        if (title) {
            console.log(title);
        }
        console.log(message);
    };

    /**
     * Get printers
     * @param {Function} callback
     */
    this.getPrinters = function(callback) {
        callApi('get_printers', {}, callback);
    };

    /**
     * Select printer
     * @param {int} file_id
     * @param {int} printer_id
     * @param {int} printer_type_id
     * @param {Function} callback
     */
    this.selectPrinter = function(file_id, printer_id, printer_type_id, callback) {
        callApi('select_printer', {
            'file_id': file_id,
            'printer_id': printer_id,
            'printer_type_id': printer_type_id
        }, callback);
    };

    /**
     * Get slicer settings by printer type
     * @param {int} type_id
     * @param {Function} callback
     */
    this.getSlicerSettings = function(type_id, callback) {
        callApi('get_slicer_settings', {'type_id': type_id}, callback);
    };

    /**
     * Get file state
     * @param {int} file_id
     * @param {Function} callback
     */
    this.getFileState = function(file_id, callback) {
        callApi('get_file_state', {'file_id': file_id}, callback);
    };

    /**
     * Get file render
     * @param {int} file_id
     * @param {Function} callback
     */
    this.getFileRender = function(file_id, callback) {
        callApi('get_file_render', {'file_id': file_id}, callback);
    };

    /**
     * Execute application
     * @param {int} file_id
     * @param {String} name
     * @param {Object} settings
     * @param {Function} callback
     */
    this.executeApplication = function(file_id, name, settings, callback) {
        callApi('execute_application', {
            'file_id': file_id,
            'app_name': name,
            'settings': JSON.stringify(settings)
        }, callback);
    };

    /**
     * Get application state
     * @param {int} job_id
     * @param {Function} callback
     */
    this.getApplicationState = function(job_id, callback) {
        callApi('get_application_state', {'app_job_id': job_id}, callback);
    };

    /**
     * Start printing
     * @param {int} printer_id
     * @param {int} file_id
     * @param {Function} callback
     */
    this.print = function(printer_id, file_id, callback) {
        callApi('print', {
            'printer_id': printer_id,
            'file_id': file_id
        }, callback);
    };

    /**
     * Get job state
     * @param {int} job_id
     * @param {Function} callback
     */
    this.getJobState = function(job_id, callback) {
        callApi('get_job_state', {'job_id': job_id}, callback);
    };

    /**
     * Pause job
     * @param {int} job_id
     * @param {Function} callback
     */
    this.jobPause = function(job_id, callback) {
        callApi('job_pause', {'job_id': job_id}, callback);
    };

    /**
     * Reject job pause
     * @param {int} job_id
     * @param {Function} callback
     */
    this.jobRejectPause = function(job_id, callback) {
        callApi('job_unpause', {'job_id': job_id}, callback);
    };

    /**
     * Cancel job
     * @param {int} job_id
     * @param {Function} callback
     */
    this.jobCancel = function(job_id, callback) {
        callApi('job_cancel', {'job_id': job_id}, callback);
    };

    /**
     * Get live video
     * @param {int} printer_id
     * @param {Function} callback
     */
    this.getLiveVideo = function(printer_id, callback) {
        callApi('get_live_video', {'printer_id': printer_id}, callback);
    }
}
