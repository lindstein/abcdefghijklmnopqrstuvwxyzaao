//= require jquery/dist/jquery.min.js
//= require sly/dist/sly.min.js

$(document).ready(function() {
  var teamOptions = {
//    scrollSource: $(document),
//    horizontal: 1,
//    itemNav: 'basic',
//    speed: 300,
//    mouseDragging: 1,
//    touchDragging: 1
    
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
//    startAt: 3,
//    scrollBar: $wrap.find('.scrollbar'),
    scrollSource: $('.team-profiles-slider'),
    scrollTrap:   true,
//    scrollSource: $('.team-profiles-wrapper'),
    scrollBy: 1,
//    pagesBar: $wrap.find('.pages'),
    activatePageOn: 'click',
    speed: 300,
    elasticBounds: 1,
//    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
  };
  $('.team-profiles-wrapper').sly(teamOptions);
  
  var clientOptions = {
//    scrollSource: $(document),
//    horizontal: 1,
//    itemNav: 'basic',
//    speed: 300,
//    mouseDragging: 1,
//    touchDragging: 1
    
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
//    startAt: 3,
//    scrollBar: $wrap.find('.scrollbar'),
    scrollSource: $('.client-profiles-slider'),
    scrollTrap:   true,
//    scrollSource: $('.team-profiles-wrapper'),
    scrollBy: 1,
//    pagesBar: $wrap.find('.pages'),
    activatePageOn: 'click',
    speed: 300,
    elasticBounds: 1,
//    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
  };
  $('.client-profiles-wrapper').sly(clientOptions);
});