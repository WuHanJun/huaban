/**
 * Created by lenovo on 2017/3/7.
 */
require(['jquery', 'goTop', 'model', 'navFix'], function($, goTop, model, navFix){   //jquery可以不用引入直接就能用
    var $goTopBtn = $('.elevator>li:first-child');
    $('a').on('click', function(ev) {
        ev.preventDefault();
    })
    goTop.init($goTopBtn);
    model.init();
    navFix.init();
})

