/*!
 * jQueryBuildAMeal
 * author: maximusplugins@gmail.com
 */

;(function ( $, window, document, undefined ) {

    /* Create the defaults once */
    var pluginName = "jQueryPlugin";
    var defaults = {
            //web root to the plugin folder ie /wp-content/themes/themename/library/js/libs/jQueryPlugin/
            installDirectory: "/jQueryPlugin/", 
    };

    /* The actual plugin constructor */
    function Plugin( element, options ) {
        this.element = $(element);
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this._init();
    } 

    Plugin.prototype = {

        /* STATIC VARIABLES */
        
        /* METHODS */
        
        /*
         *@brief  You guessed it, this starts the whole thing off.
         *@author maximusplugins@gmail.com
         */
        "_init": function() {
            
            //add indexOf support for ie8
            this._indexOf();
            
            //detect ie
            this._detectIE();

            var _this = this;
            
            _this.bindEvents();
        },
        
        /* @brief  
         * @author maximusplugins@gmail.com
         */
        "myMethod" :function() {
            
            
        },
       
        /* EVENT BINDINGS ------------------------------------------------------------------------------------------ */
        "bindEvents": function() {
            
            var _this = this;
            
            /* @brief Generic click button
             * 
             */
            _this.element.find('#button').on( "click", function( event ) {
                
                //this refers to the button
                
                //_this refers to the plugin
               
            });
            
            
            /* @brief 
             * @author maximusplugins@gmail.com
             * requires _underscore js to debounce
            $( window ).on( "resize.jQueryPlugin", _.debounce( function() {
                
            },300));
            */
            
         },//end bind events
         
  
        /* Helpers--------------------------------------------------------------------------------------------------- */
         
        /* @brief   
         * @author maximusplugins@gmail.com
         */
         "_debug": function( message ){
            alert( "jQueryPlugin Error: "+ message );
         },
         
         
        /* @brief   Helper function to detect if we are looking at this plugin in an old version of IE   
         * @author maximusplugins@gmail.com
         */
         "_detectIE": function(){
             this.ieVersion = 10;
             //here's to the crazy guy in a cabin thats still using ie 7 or 8
             var msVersion = navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
             if(msVersion){
             var msie = msVersion[0].split(' ')[0];
                 if(msie){ 
                    if (parseFloat(msVersion[1]) < 8){
                        //ie7
                        this.element.addClass('bam-ie7');
                        this._ieVersion = 7;        
                    }
                    else if (parseFloat(msVersion[1]) < 9){
                        //ie8
                        this.element.addClass('bam-ie8');
                        this._ieVersion = 8;        
                    }
                    else if (parseFloat(msVersion[1]) < 10){
                        //ie9
                        this.element.addClass('bam-ie9');
                        this._ieVersion = 9;        
                    }
                    
                 }
             }   
         },
         
        /* @brief  indexOf functionality for old versions of ie 
         * @author maximusplugins@gmail.com
         */
         "_indexOf": function(){
             if (!Array.prototype.indexOf)
                {
                  Array.prototype.indexOf = function(elt /*, from*/)
                  {
                    var len = this.length >>> 0;
                
                    var from = Number(arguments[1]) || 0;
                    from = (from < 0)
                         ? Math.ceil(from)
                         : Math.floor(from);
                    if (from < 0)
                      from += len;
                
                    for (; from < len; from++)
                    {
                      if (from in this &&
                          this[from] === elt)
                        return from;
                    }
                    return -1;
                  };
                }
         }
        
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };
   
})( jQuery, window, document );

        
