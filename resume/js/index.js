/**
 * Created by tarena on 2016/11/12.
 */
$(document).ready(function(){
  toggle_nav_container();
  gotoByScroll();
  $('body>div:not(#cover)').css('display','none');
});


var dis=function(){
  $('body>div:not(#cover)').css('display','block');
  $('#cover').empty();
};

var toggle_nav_container=function(){
  var $toggleButton=$('#toggle_m_nav');
  var $navContainer=$('#m_nav_container');
  var $menuButton=$('#m_nav_menu');
  var $menuButtonBars=$('.m_nav_ham');
  var $wrapper=$('#wrapper');

  $toggleButton.on('click',function(){
    var $viewportWidth=$(window).width();
    if($navContainer.is(':hidden')){
      $wrapper.removeClass('closed_wrapper');
      $wrapper.addClass('open_wrapper');
      $navContainer.slideDown(200).addClass('container_open').css('z-index','2');
      $menuButtonBars.removeClass('button_open');
      $('#m_ham_1').addClass('m_nav_ham_1_open');
      $('#m_ham_2').addClass('m_nav_ham_2_open');
      $('#m_ham_3').addClass('m_nav_ham_3_open');
    }else{
      $navContainer.css('z-index','0').removeClass('container_open').slideUp(200);
      $menuButtonBars.removeClass('button_open');
      $menuButtonBars.addClass('button_closed');
      $wrapper.removeClass('open_wrapper');
      $wrapper.addClass('closed_wrapper');
      $("#m_ham_1").removeClass("m_nav_ham_1_open");
      $("#m_ham_2").removeClass("m_nav_ham_2_open");
      $("#m_ham_3").removeClass("m_nav_ham_3_open");
    }
  });
};

var gotoByScroll=function(){
  $('.m_nav_item a').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop:$($(this).attr('href')).offset().top-50
    },'slow');
  })
};

(function() {
  var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

  // Main
  initHeader();
  addListeners();

  function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    target = {x: 0, y: height};

    largeHeader = document.getElementById('large-header');
    largeHeader.style.height = height+'px';

    canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');

    // create particles
    circles = [];
    for(var x = 0; x < width*0.5; x++) {
      var c = new Circle();
      circles.push(c);
    }
    animate();
  }

  // Event handling
  function addListeners() {
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
  }

  function scrollCheck() {
    if(document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = height+'px';
    canvas.width = width;
    canvas.height = height;
  }

  function animate() {
    if(animateHeader) {
      ctx.clearRect(0,0,width,height);
      for(var i in circles) {
        circles[i].draw();
      }
    }
    requestAnimationFrame(animate);
  }

  // Canvas manipulation
  function Circle() {
    var _this = this;

    // constructor
    (function() {
      _this.pos = {};
      init();
      //console.log(_this);
    })();

    function init() {
      _this.pos.x = Math.random()*width;
      _this.pos.y = height+Math.random()*100;
      _this.alpha = 0.1+Math.random()*0.3;
      _this.scale = 0.1+Math.random()*0.3;
      _this.velocity = Math.random();
    }

    this.draw = function() {
      if(_this.alpha <= 0) {
        init();
      }
      _this.pos.y -= _this.velocity;
      _this.alpha -= 0.0005;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
      ctx.fill();
    };
  }
})();
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
      || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());
