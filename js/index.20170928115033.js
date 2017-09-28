(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-7').attr('src', 'images/leaf-79.png');

}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "0.80s", "0.10s", 1, 100);
wl.addAnimation($('.js-2')[0], "0.80s", "0.10s", 1, 100);
wl.addAnimation($('.js-3')[0], "0.80s", "0.10s", 1, 100);
wl.addAnimation($('.js-4')[0], "0.80s", "0.10s", 1, 100);
wl.addAnimation($('.js-5')[0], "0.80s", "0.10s", 1, 100);
wl.addAnimation($('.js-6')[0], "0.80s", "0.10s", 1, 100);
wl.start();

});