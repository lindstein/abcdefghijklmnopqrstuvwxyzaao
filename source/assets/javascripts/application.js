//= require jquery/dist/jquery.min.js
//= require sly/dist/sly.min.js
//= require matchHeight/dist/jquery.matchHeight-min.js

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
    pagesBar: $('.team-profiles-wrapper').find('.team_pages'),
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
    pagesBar: $('.client-profiles-wrapper').find('.client_pages'),
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
    if (sliderWidth <= 840) {
      profile.css('width', Math.round(sliderWidth)+'px');
      client.css('width', Math.round(sliderWidth)+'px');
    } else {
      profile.css('width', Math.round(sliderWidth / 2)+'px');
      client.css('width', Math.round(sliderWidth / 4)+'px');
    }
    teamSly.reload();
    clientSly.reload();
  }

  // Set equal heights on offers
  $('.more_offers .offer_info').matchHeight();

  $(window).on('resize', calculateSliders);
  calculateSliders();
});
