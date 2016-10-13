$(document).ready(function() {


  var floatObj = new window.utamonogatari.FloatObj({
    target: '.layout-fixedObj',
    duration: 10000,
    num: 40,
    images: ['http://www.monogatari-series.com/assets/img/song/bg/obj/01.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/02.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/03.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/04.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/05.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/06.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/07.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/08.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/09.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/10.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/11.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/12.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/13.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/14.png',
              'http://www.monogatari-series.com/assets/img/song/bg/obj/15.png']
  });
  floatObj.start();

});
