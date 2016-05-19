//= require jquery/dist/jquery.min.js
//= require sly/dist/sly.min.js

$(document).ready(function() {
  var teamOptions = {
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    scrollSource: $('.team-profiles-slider'),
    scrollTrap:   true,
    scrollBy: 1,
    activatePageOn: 'click',
    speed: 300,
    elasticBounds: 1,
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
  };
  
  var clientOptions = {
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    scrollSource: $('.client-profiles-slider'),
    scrollTrap:   true,
    scrollBy: 1,
    activatePageOn: 'click',
    speed: 300,
    elasticBounds: 1,
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
  };
  
  var teamSly = new Sly($('.team-profiles-wrapper'), teamOptions).init();
  var clientSly = new Sly($('.client-profiles-wrapper'), clientOptions).init();
  
  var profile = $('.profile');
  var client = $('.client');
  var sliderWrapper = $('.team-profiles-wrapper');
  var sliderWidth = sliderWrapper.width();
  
  function calculateSliders() {
    sliderWidth = sliderWrapper.width();
    profile.css('width', Math.round(sliderWidth / 2)+'px');
    client.css('width', Math.round(sliderWidth / 4)+'px');
    teamSly.reload();
    clientSly.reload();
  }
  
  $(window).on('resize', calculateSliders);
  calculateSliders();
});