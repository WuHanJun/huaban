/**
 * Created by lenovo on 2017/3/8.
 */
define(['jquery'], function ($) {
    var model = {
        init : function () {
            this.$loginBtn = $('.nav-right li:last-child a');
            this.$signInBtn = $('.nav-right li:first-child a');
            this.$signInShow = $('.sign-in');
            this.$loginShow = $('.login');
            this.$findBackShow = $('.find-back');
            this.$innerSignInBtn = $('.login .footer>p>a');
            this.$innerFindBackBtn = $('.login .footer>a');
            this.$loginBtnInfindBack = $('.find-back-wrapper>a');
            this.$loginBtnInSignIn = $('.sign-in-footer>span>a');
            this.$closeBtn = $('.header-x');
            this.$overlay = $('.overlay');
            this.$signInAndLogin = $('.sign-in-and-login');
            this.bind();
        },
        bind: function () {
            var self = this;
            this.$signInBtn.on('click',function () {
                self.$overlay.show();
                self.$signInAndLogin.show();
                self.$signInAndLogin.css('margin-top', -155);
                self.$signInShow.show();
                self.addAmimation();
                self.$loginShow.hide();
                self.$findBackShow.hide();

            })
            this.$loginBtn.on('click', function (ev) {
                self.$overlay.show();
                self.addAmimation();
                self.$signInAndLogin.css('margin-top', -222);
                self.$signInAndLogin.show();
                self.$signInShow.hide();
                self.$loginShow.show();
                self.$findBackShow.hide();
            })
            this.$innerSignInBtn.on('click', function (ev) {
                self.$signInAndLogin.css('margin-top', -155);
                self.addAmimation();
                self.$signInShow.show();
                self.$loginShow.hide();
                self.$findBackShow.hide();
            })
            this.$innerFindBackBtn.on('click', function () {
                self.$signInAndLogin.css('margin-top', -155);
                self.addAmimation();
                self.$signInShow.hide();
                self.$loginShow.hide();
                self.$findBackShow.show();
            })
            this.$loginBtnInfindBack.on('click', function (ev) {
                self.$signInAndLogin.css('margin-top', -222);
                self.addAmimation();
                self.$signInShow.hide();
                self.$loginShow.show();
                self.$findBackShow.hide();
            })
            this.$loginBtnInSignIn.on('click', function (ev) {
                self.$signInAndLogin.css('margin-top', -222);
                self.addAmimation();
                self.$signInShow.hide();
                self.$loginShow.show();
                self.$findBackShow.hide();
            })
            this.$closeBtn.on('click', function(ev) {
                var $this = $(this)
                if($this.parents('.sign-in-and-login')) {
                    $this.parents('.sign-in-and-login').hide();
                    self.$overlay.hide();
                }
            })
        },
        addAmimation: function () {
            var self = this;
            this.$signInAndLogin.addClass('animation');
            var time =  setTimeout(function() {
                self.$signInAndLogin.removeClass('animation');
            },810);
        }
    }
    return model;
})