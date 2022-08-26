// JavaScript Document

AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});

hljs.initHighlightingOnLoad();

$('.hero__scroll').on('click', function (e) {
      $('html, body').animate({
        scrollTop: $(window).height()
}, 1200)});
