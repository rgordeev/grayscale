// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
// Это манифест, на осонве которого будет собран файл application.js, являющийся глобальным файлом,
// соражщащим все js приложения. (@link http://bertramdev.github.io/asset-pipeline/guide/usage.html#directives)
//
// На любой файл JavaScript в этом каталоге можно ссылаться, используя относительный путь, т.е.
// добавление какого-либо ресурса js будет иметь вид //= require путь/к/файлу/внутри/директории/asserts/javascripts/
//

// добавляем ресурс jquery не из папки asserts, а по имени плагина jquery, подключенного в BuildConfig.groovy:81
//= require jquery
// петерь добавляем обычные фалы js из директории assets/javastripts
//= require jquery.browser.js
//= require jquery.easing.1.3.js
//= require jquery.prettyPhoto.js
//= require jquery.sticky.js
//= require jquery.isotope.min.js
//= require sorting.js
//= require jquery.jcarousel.js
//= require js.js
//= require jquery.stellar.min.js
//= require waypoints.min.js
//= require jquery.tagcanvas.js
//= require placeholder/jquery.placeholder.min.js
//= require noty/jquery.noty.js
//= require noty/default.js
//= require noty/bottomLeft.js

// можно рекурсивно добавить все ресурсы из папки, указав require_tree /относительный путь, например . (точка), т.е. текущий каталог
// require_tree .

// собственно добавляем сам файл application.js выражением require_self
//= require_self

if (typeof jQuery !== 'undefined') {
    (function($) {
        var ajaxSendMail;
        $(document).ajaxStart(function () {
            var sedMailDiv = document.getElementById('ajaxSendMail')
            ajaxSendMail = new ajaxLoader(sedMailDiv);
        }).ajaxStop(function () {
            ajaxSendMail.remove();
        });

        function ajaxLoader(el, options) {

            // Becomes this.options

            var defaults = {
                bgColor: '#fff',
                duration: 800,
                opacity: 0.7,
                classOveride: false
            }

            this.options = jQuery.extend(defaults, options);

            this.container = $(el);

            this.init = function ()
            {
                var container = this.container;
                // Delete any other loaders
                this.remove();
                // Create the overlay
                var overlay = $('<div></div>').css({
                    'background-color': this.options.bgColor,
                    'opacity':this.options.opacity,
                    'width':container.width(),
                    'height':container.height(),
                    'position':'absolute',
                    'top':'0px',
                    'left':'0px',
                    'z-index':99999
                }).addClass('ajax_overlay');
                // add an overiding class name to set new loader style

                if (this.options.classOveride) {
                    overlay.addClass(this.options.classOveride);
                }
                // insert overlay and loader into DOM
                container.append(overlay.append($('<div></div>').addClass('ajax_loader')).fadeIn(this.options.duration));
            };

            this.remove = function(){
                var overlay = this.container.children(".ajax_overlay");
                if (overlay.length)
                {
                    overlay.fadeOut(this.options.classOveride, function() {
                        overlay.remove();
                    });
                }
            }

            this.init();
        };
    })(jQuery);
}

(function( intsystems, $, undefined ) {
    //Public Method
    intsystems.generate = function(message, type) {
        var n = noty({
            text: message,
            type: type,
            dismissQueue: true,
            layout: 'bottomLeft',
            theme: 'defaultTheme',
            timeout: '3000'
        });
    };
}( window.intsystems = window.intsystems || {}, jQuery ));
