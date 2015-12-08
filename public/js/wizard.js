/**
 * Step Wizard
 * @param {String} next Next button ID
 * @param {String} back Back button ID
 * @param {number} stepCount
 */
function Wizard(next, back, stepCount) {
    /**
     * Current step
     * @type {number}
     */
    var current = 0;

    /**
     * Next button
     * @type {*|jQuery|HTMLElement}
     */
    var nextButton = $('#' + next);

    /**
     * Prev button
     * @type {*|jQuery|HTMLElement}
     */
    var backButton = $('#' + back);

    /**
     * Self instance
     * @type {Wizard}
     */
    var self = this;

    /**
     * Initialize wizard
     */
    this.init = function() {
        nextButton.on('click', function() {
            self.next();
        });
        backButton.on('click', function() {
            self.back();
        });
        //Start wizard
        self.next();
    };

    /**
     * Go to next step
     */
    this.next = function() {
        if (current == stepCount) {
            return;
        }
        goto(++current, 'next', current - 1);
    };

    /**
     * Go to previous step
     */
    this.back = function() {
        if (current <= 1) {
            return;
        }
        goto(--current, 'back', current + 1);
    };

    /**
     * Jump to given step number
     * @param {number} step
     */
    this.jump = function(step) {
        if (current == step) return;
        var direct = (step > current) ? 'next' : 'back';
        var prevStep = current;
        current = step;
        goto(current, direct, prevStep);
    };

    /**
     * Get current step
     * @returns {number}
     */
    this.current = function() {
        return current;
    };

    /**
     * Customize step action
     * @param {number|String} number Step number or broadcast "*" for all steps
     * @param {Function} callback
     */
    this.customizeStep = function(number, callback) {
        if (number == '*') {
            for (var i = 1; i <= stepCount; i++) {
                self.customizeStep(i, callback);
            }
        } else {
            $(document).on('wizard.goto.' + number, callback);
        }
    };

    /**
     * Move to given step
     * @param {number} number
     * @param {String} direct
     * @param {number} prevStep Previous step
     */
    var goto = function(number, direct, prevStep) {
        //Move to step
        $('.step').addClass('hidden');
        $('#step-' + number).removeClass('hidden');
        if (number == stepCount) {
            nextButton.addClass('hidden');
        } else {
            nextButton.removeClass('hidden');
        }
        if (number == 1) {
            backButton.addClass('hidden');
        } else {
            backButton.removeClass('hidden');
        }
        //Dispatch goto event
        $(document).trigger({
            'type': 'wizard.goto.' + number,
            'step': number,
            'direct': direct,
            'targetStep': prevStep
        });
    };
}
