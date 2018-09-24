(function (jQuery) {

    /*
     * @description Extension for select element to bind array of string data.
     */
    jQuery.fn.appendFilterArray = function (options) {

        var defaultOptions = {
            defaultText: 'Odaberite nesto',     // Default text for first item in select box.
            textObject: {}                      // Empty object of data
        };

        var settings = $.extend(defaultOptions, options);

        var select = $(this);

        if (!select.is('select')) {
            console.warn('Provided selector is not select element.');
            return;
        }

        select.append(new Option(settings.defaultText, ''));

        if (jQuery.isEmptyObject(settings.textObject)) {
            console.warn('settings.textObject is empty.', settings.textObject);
            return;
        }

        return $.each(settings.textObject, populateOptionsCallback);

        function populateOptionsCallback(key, value) {
            select.append(new Option(value, key));
        }
    };


}(jQuery))