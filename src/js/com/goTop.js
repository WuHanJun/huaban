/**
 * Created by lenovo on 2017/3/8.
 */

define(['jquery'], function ($) {
    var goTop = (function () {
        function init($goTop) {
            var winH = $(window).height();
            bind($goTop);
        }
        function bind($goTop) {
            $(window).on('scroll', function() {
                var scrollH = $(window).scrollTop();
                if(scrollH > 200) {
                    $goTop.show();
                } else {
                    $goTop.hide();
                }
            })
            $goTop.on('click', function() {
                $(window).scrollTop(0);
            });
        }
        return {
            init: init
        }
    })()
    return goTop;
})

