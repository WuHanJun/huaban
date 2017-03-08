/**
 * Created by lenovo on 2017/3/8.
 */
define(['jquery'], function ($) {
    var navFix = {
        init: function () {
            this.$nav = $('nav');
            this.$navCentre = $('.nav-centre');
            this.autoJudge();
            this.bind();
        },
        autoJudge: function () {
            var scrollH = $(window).scrollTop();
            console.log(scrollH);
            this.judgeOffset(scrollH);
        },
        judgeOffset: function (scrollH) {
            console.log(this);
            if (scrollH > 190) {
                this.$nav.removeClass('nologin-index');
                this.$navCentre.addClass('active');
            } else {
                if(this.$nav.hasClass('nologin-index')) return;
                this.$nav.addClass('nologin-index');
                this.$navCentre.removeClass('active');
            }
        },
        bind: function () {
            var self = this;
            $(window).on('scroll', function() {
                var scrollH = $(window).scrollTop();
                self.judgeOffset(scrollH);
            })
            $(window).scroll(function() {
                var scrollLen = $(this).scrollLeft();
                self.$nav.css('left', -scrollLen);
            })
        }
    }
    return navFix;
})