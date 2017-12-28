let AJAX = window.AJAX || {};

AJAX.html = class {
    /**
    * Append / Replace html within the document with AJAX Call
    * @param {url:"..",sel:"div selector"}
    * @param cb:(optional) done callback will execute after call
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

    static append(options,cb) {
        this._validate(options);
        options.action = "APPEND";
        this._GET(options, cb ? cb :null);
    }

    static replace(options,cb) {
        this._validate(options);
        options.action = "HTML";
        this._GET(options, cb ? cb : null);
    }

    static _GET(opt,cb) {
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
                if(!cb){
                    return;
                }
                if(typeof cb === "function"){
                    cb();
                }else{
                    throw("API.html on done call back must be a function");
                }
            });
    }
};