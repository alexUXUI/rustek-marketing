`use strict`

var rustek = require('./rustek')
var animation = require('./animations')

var app = {}

app.init = function(){
  return console.log('sup world from app')
}

app.init()
rustek.init()
animation.init()

module.exports = app




















































// /*
// * Lazy Line Painter 1.4.1
// * SVG Stroke animation.
// *
// * https://github.com/camoconnell/lazy-line-painter
// * http://www.camoconnell.com
// *
// * Copyright 2013 Cam O'Connell
// * Licensed under the MIT license.
// */
//
// (function(e,r,p){var l={init:function(c){return this.each(function(){var a=e(this),b=a.data("lazyLinePainter");a.addClass("lazy-line");if(!b){var b=e.extend({width:null,height:null,strokeWidth:2,strokeColor:"#000",strokeCap:"round",strokeJoin:"round",strokeOpacity:1,strokeDash:null,onComplete:null,delay:null,overrideKey:null},c),h=null===b.overrideKey?a.attr("id").replace("#",""):b.overrideKey,f=b.svgData[h].dimensions.width,k=b.svgData[h].dimensions.height;b.svgData=b.svgData[h].strokepath;null===
// b.width&&(b.width=f);null===b.height&&(b.height=k);h=a.attr("id");f=new Raphael(h,f,k);a.data("lazyLinePainter",{svgData:b.svgData,width:b.width,height:b.height,strokeWidth:b.strokeWidth,strokeColor:b.strokeColor,strokeCap:b.strokeCap,strokeJoin:b.strokeJoin,strokeOpacity:b.strokeOpacity,strokeDash:b.strokeDash,onComplete:b.onComplete,delay:b.delay,overrideKey:b.overrideKey,paper:f,count:1,complete:!1,playhead:0,setTimeOutHandler:[]})}})},paint:function(){return this.each(function(){var c=e(this),
// a=c.data("lazyLinePainter"),b=function(){c.css({width:a.width,height:a.height});e.each(a.svgData,function(b,f){var e=a.paper.path(f.path);e.attr({stroke:"none","stroke-width":a.strokeWidth,"fill-opacity":0});var g=setTimeout(function(){n({count:a.count,canvas:a.paper,pathstr:e,duration:f.duration,attr:m(a,f),callback:function(b){a.setTimeOutHandler.splice(a.count,1);a.count++;a.svgData.length+1==a.count&&(a.complete=!0,null!==a.onComplete&&a.onComplete.call(c))}})},a.playhead);a.playhead+=f.duration;
// a.setTimeOutHandler.push(g)})};null===a.delay?b():setTimeout(b,a.delay)})},erase:function(){return this.each(function(){var c=e(this);c.find("svg").empty();d=c.data("lazyLinePainter");for(i=0;i<d.setTimeOutHandler.length;i++)clearTimeout(d.setTimeOutHandler[i]);d.playhead=0;d.count=0;d.complete=!1})},destroy:function(){return this.each(function(){var c=e(this);c.data("lazyLinePainter");c.removeData("lazyLinePainter");c.remove()})},stamp:function(){return this.each(function(){var c=e(this),a=c.data("lazyLinePainter"),
// b=function(){c.css({width:a.width,height:a.height});for(i=0;i<a.svgData.length;i++)a.paper.path(a.svgData[i].path).attr(m(a,a.svgData[i]))};null===a.delay?b():setTimeout(b,a.delay)})}},m=function(c,a){return{stroke:a.strokeColor?a.strokeColor:c.strokeColor,"fill-opacity":0,"stroke-dasharray":a.strokeDash?a.strokeDash:c.strokeDash,"stroke-opacity":a.strokeOpacity?a.strokeOpacity:c.strokeOpacity,"stroke-width":a.strokeWidth?a.strokeWidth:c.strokeWidth,"stroke-linecap":a.strokeCap?a.strokeCap:c.strokeCap,
// "stroke-linejoin":a.strokeJoin?a.strokeJoin:c.strokeJoin}},n=function(c){var a=c.canvas,b=c.pathstr,e=c.duration,f=c.attr,k=c.callback,g;g="string"==typeof b?a.path(b).attr({stroke:"none",fill:"none"}):b;var l=a.path(g.getSubpath(0,1)).attr(f),m=g.getTotalLength(g);g.getPointAtLength(0);var n=(new Date).getTime(),q=setInterval(function(){var a=(new Date).getTime()-n,b=g.getSubpath(0,a/e*m);f.path=b;l.animate(f,25);a>=e&&(clearInterval(q),k!==p&&k(),g.remove())},25)};e.fn.lazylinepainter=function(c){if(l[c])return l[c].apply(this,
// Array.prototype.slice.call(arguments,1));if("object"===typeof c||!c)return l.init.apply(this,arguments)}})(jQuery,window);
//
// // lazy line for logo
// var logo = {
//   "rustek-logo": {
//     "strokepath": [
//       {
//         "path": "M   58.6,82.7 58.6,188.7 83,188.7 83,40.4 58.6,82.7 L 58.6,82.7 58.6,188.7 83,188.7 83,40.4 58.6,82.7 ",
//         "duration": 200
//       },
//       {
//         "path": "M   1.5,1.5 17.8,29.9 1.5,1.5 185.6,1.5 115.3,123.5 214,294.5 187.7,294.5 89.8,125.2 144.9,29.9 17.8,29.9 L  1.5,1.5 17.8,29.9 1.5,1.5 185.6,1.5 115.3,123.5 214,294.5 187.7,294.5 89.8,125.2 144.9,29.9 17.8,29.9 ",
//         "duration": 200
//       },
//       {
//         "path": "M   193.9,80.8 193.9,171.2 219.3,171.2 219.3,103.4 240.5,103.4 240.5,171.2 291.8,171.2 250.3,103.4 339.3,103.4 339.3,75.4 356.3,46   356.3,103.4 442.6,103.4 432.8,120.4 398.6,120.4 398.6,137.4 423.1,137.4 413.2,154.4 398.6,154.4 398.6,171.2 454.5,171.2   454.5,82.7 475.7,46 475.7,188.2 381.6,188.2 381.6,120.4 356.3,120.4 356.3,188.2 339.3,188.2 339.3,120.4 284.3,120.4   325.6,188.2 172.7,188.2 172.7,46 193.9,80.8 L  193.9,80.8 193.9,171.2 219.3,171.2 219.3,103.4 240.5,103.4 240.5,171.2 291.8,171.2 250.3,103.4 339.3,103.4 339.3,75.4 356.3,46   356.3,103.4 442.6,103.4 432.8,120.4 398.6,120.4 398.6,137.4 423.1,137.4 413.2,154.4 398.6,154.4 398.6,171.2 454.5,171.2   454.5,82.7 475.7,46 475.7,188.2 381.6,188.2 381.6,120.4 356.3,120.4 356.3,188.2 339.3,188.2 339.3,120.4 284.3,120.4   325.6,188.2 172.7,188.2 172.7,46 193.9,80.8 ",
//         "duration": 700
//       },
//       {
//         "path": "M   508,148.1 592.4,294.5 566.1,294.5 482.5,149.8 509.2,103.4 533.7,103.4 508,148.1 L  508,148.1 592.4,294.5 566.1,294.5 482.5,149.8 509.2,103.4 533.7,103.4 508,148.1 ",
//         "duration": 200
//       }
//     ],
//     "dimensions": {
//       "width": 594,
//       "height": 296
//     }
//   }
// }
//
// var dropping = {
//     "dropping-soon": {
//         "strokepath": [
//             {
//                 "path": "M246.7,29.4h-29.3c-0.2,0-0.3,0.2-0.3,0.3v23.1h-5.2V29.7c0-0.2-0.2-0.3-0.3-0.3h-29.4  c-0.2,0-0.3,0.2-0.3,0.3v23.1h-5.1V29.7c0-0.1-0.1-0.3-0.2-0.3c-0.1-0.1-0.3,0-0.4,0.1l-5.9,5.9c-0.1,0.1-0.1,0.2-0.1,0.2v17.2h-5.2  V29.7c0-0.2-0.2-0.3-0.3-0.3h-29.3c-0.2,0-0.3,0.2-0.3,0.3v23.1h-5.2V29.7c0-0.2-0.2-0.3-0.3-0.3H100c-0.2,0-0.3,0.2-0.3,0.3v23.1  h-5.2V29.7c0-0.2-0.2-0.3-0.3-0.3H64.9c-0.2,0-0.3,0.2-0.3,0.3v23.1H41.8V36h11.3c0.1,0,0.2,0,0.2-0.1l5.9-5.9  c0.1-0.1,0.1-0.2,0.1-0.4c-0.1-0.1-0.2-0.2-0.3-0.2H35.5c-0.2,0-0.3,0.2-0.3,0.3v23.1h-5.2V0.3c0,0,0,0,0,0c0,0,0,0,0,0  c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0  c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0L23.6,6c-0.1,0.1-0.1,0.2-0.1,0.2v23.1H0.3  c-0.2,0-0.3,0.2-0.3,0.3v29.4c0,0.2,0.2,0.3,0.3,0.3h99.3v28.9c0,0.1,0.1,0.3,0.2,0.3c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2-0.1l5.9-5.9  c0.1-0.1,0.1-0.2,0.1-0.2v-23H135v28.9c0,0.1,0.1,0.3,0.2,0.3c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2-0.1l5.8-5.9c0.1-0.1,0.1-0.2,0.1-0.2  v-23H188c0.2,0,0.3-0.2,0.3-0.3V36h16.9v23.1c0,0.2,0.2,0.3,0.3,0.3h34.9v22.7h-17.2c-0.1,0-0.2,0-0.2,0.1l-5.9,5.9  c-0.1,0.1-0.1,0.2-0.1,0.4c0.1,0.1,0.2,0.2,0.3,0.2h29.3c0.2,0,0.3-0.2,0.3-0.3V29.7C247,29.5,246.9,29.4,246.7,29.4 M246.3,88  h-28.1l5.2-5.2h17.4c0.2,0,0.3-0.2,0.3-0.3V59.1c0-0.2-0.2-0.3-0.3-0.3H206V35.6c0-0.2-0.2-0.3-0.3-0.3H188c-0.2,0-0.3,0.2-0.3,0.3  v23.1h-46.6c-0.2,0-0.3,0.2-0.3,0.3v23.2l-5.1,5.2V59.1c0-0.2-0.2-0.3-0.3-0.3h-29.4c-0.2,0-0.3,0.2-0.3,0.3v23.2l-5.2,5.2V59.1  c0-0.2-0.2-0.3-0.3-0.3H0.7V30.1H23l-5.2,5.2H6.1c-0.2,0-0.3,0.2-0.3,0.3v17.6c0,0.2,0.2,0.3,0.3,0.3h17.7c0.2,0,0.3-0.2,0.3-0.3  V6.4l5.1-5.2v52c0,0.2,0.2,0.3,0.3,0.3h5.9c0.2,0,0.3-0.2,0.3-0.3V30.1h22.3l-5.2,5.2H41.4c-0.2,0-0.3,0.2-0.3,0.3v17.6  c0,0.2,0.2,0.3,0.3,0.3h23.5c0.2,0,0.3-0.2,0.3-0.3V30.1h28.6v23.1c0,0.2,0.2,0.3,0.3,0.3h5.9c0.2,0,0.3-0.2,0.3-0.3V30.1h28.7v23.1  c0,0.2,0.2,0.3,0.3,0.3h5.9c0.2,0,0.3-0.2,0.3-0.3V30.1h28.6v23.1c0,0.2,0.2,0.3,0.3,0.3h5.9c0.2,0,0.3-0.2,0.3-0.3V35.8l5.2-5.2  v22.6c0,0.2,0.2,0.3,0.3,0.3h5.8c0.2,0,0.3-0.2,0.3-0.3V30.1h28.7v23.1c0,0.2,0.2,0.3,0.3,0.3h5.9c0.2,0,0.3-0.2,0.3-0.3V30.1h28.6  V88z M23.5,30.6v22.3h-17V36h11.5c0.1,0,0.2,0,0.2-0.1L23.5,30.6z",
//                 "duration": 500
//             },
//             {
//                 "path": "M399.3,29.4h-29.4c-0.2,0-0.3,0.2-0.3,0.3v23.1h-5.2V29.7c0-0.2-0.2-0.3-0.3-0.3h-29.4  c-0.2,0-0.3,0.2-0.3,0.3v23.1h-5.1V29.7c0-0.2-0.2-0.3-0.3-0.3h-29.4c-0.2,0-0.3,0.2-0.3,0.3v23.1H294V41.4c0-0.2-0.2-0.3-0.3-0.3  h-23.1V36h17.4c0.1,0,0.2,0,0.2-0.1l5.8-5.9c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0  c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h-29.3  c-0.2,0-0.3,0.2-0.3,0.3v17.6c0,0.2,0.2,0.3,0.3,0.3h23.1v5.2h-23.1c-0.2,0-0.3,0.2-0.3,0.3v5.9c0,0.2,0.2,0.3,0.3,0.3h111.5  c0.2,0,0.3-0.2,0.3-0.3V36h16.9v17.2c0,0.1,0,0.2,0.1,0.2l5.9,5.9c0.1,0.1,0.2,0.1,0.2,0.1c0,0,0.1,0,0.1,0c0.1-0.1,0.2-0.2,0.2-0.3  V29.7C399.7,29.5,399.5,29.4,399.3,29.4 M399,58.3l-5.2-5.2V35.6c0-0.2-0.2-0.3-0.3-0.3h-17.6c-0.2,0-0.3,0.2-0.3,0.3v23.1H264.7  v-5.2h23.1c0.2,0,0.3-0.2,0.3-0.3v-5.9c0-0.2-0.2-0.3-0.3-0.3h-23.1V30.1h28.1l-5.1,5.2h-17.6c-0.2,0-0.3,0.2-0.3,0.3v5.8  c0,0.2,0.2,0.3,0.3,0.3h23.1v11.5c0,0.2,0.2,0.3,0.3,0.3h5.9c0.2,0,0.3-0.2,0.3-0.3V30.1h28.7v23.1c0,0.2,0.2,0.3,0.3,0.3h5.8  c0.2,0,0.3-0.2,0.3-0.3V30.1h28.7v23.1c0,0.2,0.2,0.3,0.3,0.3h5.9c0.2,0,0.3-0.2,0.3-0.3V30.1H399V58.3z",
//                 "duration": 500
//             },
//
//             {
//                 "path": "M88.4,35.3H70.8c-0.2,0-0.3,0.2-0.3,0.3v17.6c0,0.2,0.2,0.3,0.3,0.3h17.6c0.2,0,0.3-0.2,0.3-0.3V35.6  C88.7,35.4,88.5,35.3,88.4,35.3 M88,52.9H71.1V36H88V52.9z",
//                 "duration": 200
//             },
//             {
//                 "path": "M123.5,35.3h-17.6c-0.2,0-0.3,0.2-0.3,0.3v17.6c0,0.2,0.2,0.3,0.3,0.3h17.6c0.2,0,0.3-0.2,0.3-0.3V35.6  C123.9,35.4,123.7,35.3,123.5,35.3 M123.2,52.9h-16.9V36h16.9V52.9z",
//                 "duration": 200
//             },
//             {
//                 "path": "M223.3,53.6h17.6c0.2,0,0.3-0.2,0.3-0.3V35.6c0-0.2-0.2-0.3-0.3-0.3h-17.6c-0.2,0-0.3,0.2-0.3,0.3v17.6  C223,53.4,223.1,53.6,223.3,53.6 M223.7,36h16.9v16.9h-16.9V36z",
//                 "duration": 200
//             },
//             {
//                 "path": "M158.7,35.3h-17.6c-0.2,0-0.3,0.2-0.3,0.3v17.6c0,0.2,0.2,0.3,0.3,0.3h17.6c0.2,0,0.3-0.2,0.3-0.3V35.6  C159,35.4,158.9,35.3,158.7,35.3 M158.3,52.9h-16.9V36h16.9V52.9z",
//                 "duration": 200
//             },
//             {
//                 "path": "M323,35.3h-17.6c-0.2,0-0.3,0.2-0.3,0.3v17.6c0,0.2,0.2,0.3,0.3,0.3H323c0.2,0,0.3-0.2,0.3-0.3V35.6  C323.3,35.4,323.2,35.3,323,35.3 M322.6,52.9h-16.9V36h16.9V52.9z",
//                 "duration": 200
//             },
//
//             {
//                 "path": "M358.1,35.3h-17.6c-0.2,0-0.3,0.2-0.3,0.3v17.6c0,0.2,0.2,0.3,0.3,0.3h17.6c0.2,0,0.3-0.2,0.3-0.3V35.6  C358.5,35.4,358.3,35.3,358.1,35.3 M357.8,52.9h-16.9V36h16.9V52.9z",
//                 "duration": 200
//             },
//             {
//                 "path": "M416.9,52.9H411c-0.2,0-0.3,0.2-0.3,0.3v5.9c0,0.2,0.2,0.3,0.3,0.3h5.9c0.2,0,0.3-0.2,0.3-0.3v-5.9  C417.3,53,417.1,52.9,416.9,52.9 M416.6,58.8h-5.2v-5.2h5.2V58.8z",
//                 "duration": 200
//             },
//             {
//                 "path": "M434.5,52.9h-5.9c-0.2,0-0.3,0.2-0.3,0.3v5.9c0,0.2,0.2,0.3,0.3,0.3h5.9c0.2,0,0.3-0.2,0.3-0.3v-5.9  C434.8,53,434.7,52.9,434.5,52.9 M434.1,58.8h-5.2v-5.2h5.2V58.8z",
//                 "duration": 200
//             },
//             {
//                 "path": "M452.1,52.9h-5.9c-0.2,0-0.3,0.2-0.3,0.3v5.9c0,0.2,0.2,0.3,0.3,0.3h5.9c0.2,0,0.3-0.2,0.3-0.3v-5.9  C452.4,53,452.2,52.9,452.1,52.9 M451.7,58.8h-5.2v-5.2h5.2V58.8z",
//                 "duration": 200
//             }
//         ],
//         "dimensions": {
//             "width": 453,
//             "height": 89
//         }
//     }
// }
//
// /*
//  *     Setup and Paint your lazyline!
//  */
//
//  var domApi = {
//    dropSoon: $('#dropping-soon'),
//    logo: $('#rustek-logo'),
//    imgContainer: $('.container')
//  }
//
// var rustekLogo = {
//   "svgData": logo,
//   "strokeWidth": 3,
//   "strokeColor": "#ffffff"
// }
//
// var droppingSoonLogo = {
//   "svgData": dropping,
//   "strokeWidth": 1,
//   "strokeColor": "#ffffff"
// }
//
// var droppingSoon = (() => domApi.dropSoon.lazylinepainter(droppingSoonLogo).lazylinepainter('paint'))
// var rustek       = (() => domApi.logo.lazylinepainter(    rustekLogo      ).lazylinepainter('paint'))
//
// function hideBtn() { $('button').css('display', 'none'); }
// function showBtn() { $('button').css('display', 'block'); }
//
// function hideLogo(){ $("#rustek-logo").css('display', 'none') }
// function showLogo(){ $("#rustek-logo").css('display', 'block') }
//
// function hideCta(){ $("#rustek-logo").css('display', 'none') }
// function showCta(){ $("#dropping-soon").css('display', 'block') }
//
//
// var hideSocial = (() => setTimeout(() => $('.social-media').css('display', 'none'), 2))
// var showSocial = (() => setTimeout(() => $('.social-media').css('display', 'flex'), 2000))
// var blurBg     = (() => setTimeout(() => domApi.imgContainer.css('filter', 'blur(15px)'), 2000))
// var unvail     = (()                  => domApi.imgContainer.css('filter', 'blur(0)'))
//
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
//
// function randomizeBg() {
//   var newNumber = getRandomInt(1, 6);
//   domApi.imgContainer.css('background-image', `url("./assets/jpg/${ newNumber }.jpg")`)
// }
//
// var currentNumber = domApi.imgContainer.css('background-image');
//
// // arr.slice(Math.max(arr.length - 5, 1)
//
// console.log('yo current number: ', currentNumber)
//
// function getRandomImg() {
//   randomizeBg();
//   if(domApi.imgContainer.css('background-image')) {
//     console.log('same photo');
//     randomizeBg();
//   } else {
//     console.log('not same');
//   }
// }
//
// function *paintSvg() {
//   yield rustek()
//   yield droppingSoon()
//   yield unvail()
//   yield blurBg()
//   yield showSocial()
//   yield showBtn()
// }
//
// function runAnimation() {
//   let svgs = paintSvg()
//   svgs.next()
//   setTimeout(() => { svgs.next() }, 1600)
//   setTimeout(() => { svgs.next() }, 2500)
//   setTimeout(() => { svgs.next() }, 3500)
//   setTimeout(() => { svgs.next() }, 3500)
//   setTimeout(() => { svgs.next() }, 5500)
// }
//
// function resizeSocialMedia() {
//   $('.social-media').css({
//     'height': '10%',
//     'width': '10%',
//     'left': '2%',
//     'bottom': '45px'
//   })
// }
//
// function resizeDroppingSoon() {
//   $('#dropping-soon').css({
//     'margin-left': '-30%',
//   })
// }
//
// function *rerun() {
//   yield getRandomImg()
//   yield unvail()
//   yield hideBtn()
//   yield hideCta()
//   yield resizeSocialMedia()
//   yield showLogo()
//   yield showBtn()
// }
//
// function rerunAnimation() {
//   let reruns = rerun()
//   reruns.next()
//   setTimeout(() => { reruns.next() }, 0)
//   setTimeout(() => { reruns.next() }, 0)
//   setTimeout(() => { reruns.next() }, 0)
//   setTimeout(() => { reruns.next() }, 0)
//   setTimeout(() => { reruns.next() }, 0)
//   setTimeout(() => { reruns.next() }, 0)
// }
//
// function replay(){ rerunAnimation() }
//
// $(document).ready(() => runAnimation() )
//
// var bg = domApi.imgContainer.css('background-image');
//
// console.log(bg);
