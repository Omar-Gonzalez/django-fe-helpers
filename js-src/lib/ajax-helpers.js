let API = window.API || {};

API.html = class {
    /**
    * Append / Replace html within the document with AJAX Call
    * @parms {url:"..",sel:"div selector"}
    * Static Methods:
    * API.html.append (appends new html to existing) 
    * API.html.replace (swaps html for new one)
    */
    constructor() {
        //...
    }

    static _validate(options) {
        if (!options) {
            throw "Append.html missing options - [url, selector]";
        }
    }

    static append(options) {
        API.html._validate(options);
        options.action = "APPEND";
        API.html._GET(options);
    }

    static replace(options) {
        API.html._validate(options);
        options.action = "HTML";
        API.html._GET(options);
    }

    static _GET(opt) {
        jQuery.ajax({
                url: opt.url,
                type: "GET",
            })
            .done(function(data, textStatus, jqXHR) {
                if (opt.action === "APPEND") {
                    $(opt.sel).append(data);
                }
                if (opt.action === "HTML") {
                    $(opt.sel).html(data);
                }
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                return errorThrown;
            })
            .always(function() {
                /* ... */
            });
    }
};