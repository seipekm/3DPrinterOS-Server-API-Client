/**
 * Bind data with elements in DOM
 * @param {String} anchor_attr
 */
function Binder(anchor_attr) {
    /**
     * Model data
     * @type {Object}
     */
    var model = {};

    /**
     * Get data from DOM
     * @returns {Object}
     */
    this.getData = function() {
        var data = {};
        $('[' + anchor_attr + ']').each(function(i, elem) {
            var $element = $(elem);
            var name = $element.attr(anchor_attr);
            if ($element.attr('type') == 'checkbox') {
                data[name] = elem.checked;
            } else {
                data[name] = $element.val();
            }
        });

        return $.extend(model, data);
    };

    /**
     * Set data into DOM
     * @param {Object} data
     */
    this.setData = function(data) {
        model = data;
        for (var name in data) {
            var $element = $('[' + anchor_attr + '="' + name + '"]');
            if ($element.length) {
                if ($element.attr('type') == 'checkbox') {
                    $element.attr('checked', data[name]);
                } else {
                    $element.val(data[name]);
                }
            }
        }
    };
}
