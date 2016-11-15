;(function(){
    var isiPad=function(){
        return (navigator.platform.indexOf('iPad')!=-1);
    };

    var isiPhone=function(){
        return (
          (navigator.platform.indexOf('iPhone')!=-1)||
          (navigator.platform.indexOf('iPod')!=-1)
        );
    };

    var fullHeight=function(){
        if(!isiPad()&&!isiPhone()){
            $('.js-fullheight .flexslider,#home .flexslider .slides>li').css('height',$(window).height())
            $(window).resize(function(){
                $('.js-fullheight .flexslider,#home .flexslider .slides>li').css('height',$(window).height());
            });
        }
    };

    var offcanvasMenu=function(){
        $('body').prepend('<div id="offcanvas">');
        $('body').prepend('<a href="#" class="js-nav-toggle nav-toggle"><i></i></a>')
        $('.main-nav .menu-1 a,.main-nav .menu-2 a').each(function(){
            var $this=$(this);
            $('#offcanvas').append($this.clone());
        });
    };

    var mainMenuSticky=function(){
        var sticky=$('#js-sticky');
        sticky.css('height',sticky.height());
        $(window).resize(function(){
            sticky.css('height',sticky.height());
        });
        var $section=$('.main-nav');
        $section.waypoint(function(direction){
            if(direction==='down'){
                $section.css({
                    'position':'fixed',
                    'top':0,
                    'width':'100%',
                    'z-index':100
                }).addClass('shadow');
            }
        },{
            offset:'0px'
        });
        $('#js-sticky').waypoint(function(direction){
            if(direction==='up'){
                $section.attr('style','').removeClass('shadow');
            }
        },{
            offset:function(){return -$(this.element).height()+69;}
        });
    };

    var parallax=function(){
        $(window).stellar();
    };

    var burgetMenu=function(){
        $('body').on('click','.js-nav-toggle',function(event){
            var $this=$(this);
            $('body').toggleClass('overflow offcanvas-visible');
            $this.toggleClass('active');
            event.preventDefault();
        });
    };

    var scrolledWindow=function(){
        $(window).scroll(function(){
            var scrollPos=$(this).scrollTop();
            $('#home .text').css({
                'opacity':1-(scrollPos/300),
                'margin-top':(-212)+(scrollPos/1)
            });
            $('#home .flexslider .overlay').css({
                'opacity': (.5)+(scrollPos/2000)
            });
            if(scrollPos>300){
                $('#home .text').css('display','none');
            }else{
                $('#home .text').css('display','block');
            }
            if($('body').hasClass('offcanvas-visible')){
                $('body').removeClass('offcanvas-visible');
                $('js-nav-toggle').removeClass('active');
            }
        });
        $(window).resize(function(){
            if($('body').hasClass('offcanvas-visible')){
                $('body').removeClass('offcanvas-visible');
                $('.js-nav-toggle').removeClass('active');
            }
        });
    };

    var goToTop = function() {
        $('.js-gotop').on('click', function(event){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 1000);
            return false;
        });
    };

    // Page Nav
    var clickMenu=function(){
        var topVal=($(window).width()<769)?0:58;
        $(window).resize(function(){
            topVal=($(window).width()<769)?0:58;
        });
        $('.main-nav a:not([class="external"]),#offcanvas a:not([class="external"])').click(function(event){
            var section=$(this).data('nav-section');
            if($('div[data-section="'+section+'"]').length){
                $('html,body').animate({
                    scrollTop:$('div[data-section="'+section+'"]').offset().top-topVal
                },500);
            }
            event.preventDefault();
        });
    };

    var navActive=function(section){
        $('.main-nav a[data-nav-section],#offcanvas a[data-nav-section]').removeClass('active');
        $('.main-nav,#offcanvas').find('a[data-nav-section="'+section+'"]').addClass('active');
    };

    var navigationSection=function(){
        var $section=$('div[data-section]');
        $section.waypoint(function(direction){
            if(direction==='down'){
                navActive($(this.element).data('section'));
            }
        },{
            offset:'150px'
        });
        $section.waypoint(function(direction){
            if(direction==='up'){
                navActive($(this.element).data('section'));
            }
        },{
            offset:function(){return -$(this.element).height()+155;}
        });
    };

    //animate
    var homeAnimate=function(){
        var home=$('#home');
        if(home.length>0){
            home.waypoint(function(direction){
                if(direction=='down'&&!$(this.element).hasClass('animated')){
                    setTimeout(function(){
                        home.find('.to-animate').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeInUp animated');
                            },k*200,'easeInOutExpo');
                        });
                    },200);
                    $(this.element).addClass('animated');
                }
            },{
                offset:'80%'
            });
        }
    };

    var aboutAnimate=function(){
        var about=$('#about');
        if(about.length>0){
            about.waypoint(function(direction){
                if(direction==='down'&&!$(this.element).hasClass('animated')){
                    setTimeout(function(){
                        about.find('.to-animate').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeInUp animated');
                            },k*200,'easeInOutExpo');
                        });
                    },200);
                    setTimeout(function(){
                        about.find('.to-animate-2').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeIn animated');
                            },k*200,'easeInOutExpo');
                        });
                    },200);
                    $(this.element).addClass('animated');
                }
            },{
                offset:'80%'
            });
        }
    };

    var sayingsAnimate=function(){
        var sayings=$('#sayings');
        if(sayings.length>0){
            sayings.waypoint(function(direction){
                if(direction==='down'&&!$(this.element).hasClass('animated')){
                    setTimeout(function(){
                        sayings.find('.to-animate').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeInUp animated');
                            },k*200,'easeInOutExpo');
                        });
                    },200);
                    $(this.element).addClass('animated');
                }
            },{
                offset:'80%'
            });
        }
    };

    var featureAnimate=function(){
        var feature=$('#features');
        if(feature.length>0){
            feature.waypoint(function(direction){
                if(direction==='down'&&!$(this.element).hasClass('animated')){
                    setTimeout(function(){
                        feature.find('.to-animate').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeInUp animated');
                            },k*200,'easeInOutExpo');
                        });
                    },200);
                    setTimeout(function(){
                        feature.find('.to-animate-2').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('bounceIn animated');
                            },k*200,'easeInOutExpo');
                        });
                    },500);
                    $(this.element).addClass('animated');
                }
            },{
                offset:'80%'
            });
        }
    };

    var typeAnimate=function(){
        var type=$('#type');
        if(type.length>0){
            type.waypoint(function(direction){
                if(direction==='down'&&!$(this.element).hasClass('animated')){
                    setTimeout(function(){
                        type.find('.to-animate').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeInUp animated');
                            },k*200,'easeInOutExpo');
                        });
                    },200);
                    $(this.element).addClass('animated');
                }
            },{
                offset:'80%'
            });
        }
    };

    var foodMenusAnimate=function(){
        var menus=$('#menus');
        if(menus.length>0){
            menus.waypoint(function(direction){
                if(direction==='down'&&!$(this.element).hasClass('animated')){
                    setTimeout(function(){
                        menus.find('.to-animate').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeInUp animated');
                            },k*200,'easeInOutExpo');
                        });
                    },200);
                    setTimeout(function(){
                        menus.find('.to-animate-2').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeIn animated');
                            },k*200,'easeInOutExpo');
                        });
                    },500);
                    $(this.element).addClass('animated');
                }
            },{
                offset:'80%'
            });
        }
    };

    var eventsAnimate=function(){
        var events=$('#events');
        if (events.length>0){
            events.waypoint(function(direction){
                if(direction==='down'&&!$(this.element).hasClass('animated')){
                    setTimeout(function(){
                        events.find('.to-animate').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeIn animated');
                            },k*200,'easeInOutExpo');
                        });
                    },200);
                    setTimeout(function(){
                        events.find('.to-animate-2').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeInUp animated');
                            },k*200,'easeInOutExpo');
                        });
                    },500);
                    $(this.element).addClass('animated');
                }
            },{offset:'80%'});
        }
    };

    var reservationAnimate=function(){
        var contact=$('#reservation');
        if(contact.length>0){
            contact.waypoint(function(direction){
                if(direction==='down'&&!$(this.element).hasClass('animated')){
                    setTimeout(function(){
                        contact.find('.to-animate').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeIn animated');
                            },k*200,'easeInOutExpo');
                        });
                    },200);
                    setTimeout(function(){
                        contact.find('.to-animate-2').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeInUp animated');
                            },k*200,'easeInOutExpo');
                        });
                    },500);
                    $(this.element).addClass('animated');
                }
            },{offset:'80%'});
        }
    };

    var footerAnimate=function(){
        var footer=$('#footer');
        if(footer.length>0){
            footer.waypoint(function(direction){
                if( direction==='down'&&!$(this.element).hasClass('animated')){
                    setTimeout(function(){
                        footer.find('.to-animate').each(function(k){
                            var el=$(this);
                            setTimeout(function(){
                                el.addClass('fadeIn animated');
                            },k*200,'easeInOutExpo');
                        });
                    },200);
                    setTimeout(function(){
                        footer.find('.to-animate-2').each(function(k){
                            var el = $(this);
                            setTimeout(function(){
                                el.addClass('fadeInUp animated');
                            },k*200,'easeInOutExpo');
                        });
                    },500);
                    $(this.element).addClass('animated');
                }
            },{offset:'80%'});
        }
    };

    $(function(){
        fullHeight();//首页图高度自适应
        offcanvasMenu();//添加自适应menu
        mainMenuSticky();
        parallax();
        burgetMenu();
        scrolledWindow();
        clickMenu();
        navigationSection();
        goToTop();//回到顶部

         //Animations
        homeAnimate();
        aboutAnimate();
        sayingsAnimate();
        featureAnimate();
        typeAnimate();
        foodMenusAnimate();
        eventsAnimate();
        reservationAnimate();
        footerAnimate();

    });
})();

/*使用数据库内容插入到菜单中*/
$(function(){
    for(var i=1;i<=4;i++){
        $.ajax({
            type:'GET',
            url:'data/menu.php',
            data:{tid:i},
            success:function(data){
                console.log(data[0].type);
                var html=`
                <div class="col-md-6">
                  <div class="food-menu to-animate-2">
                  <h2 class="drinks">${data[0].type}</h2>
                  <ul class="list-unstyled">
                `;
                $.each(data,function(j,menu){
                    //console.log(menu);
                    html+=`
                    <li>
                        <div class="food-desc">
                          <figure>
                          <img src="img/${menu.pic}" class="img-responsive"/>
                          </figure>
                          <div>
                          <h3>${menu.mname}</h3>
                          <p>${menu.detail}</p>
                        </div>
                        </div>
                        <div class="food-pricing">
                          &yen;${menu.price}
                        </div>
                    </li>
                    `;
                });
                html+=`
                        </ul>
                    </div>
                </div>
                `;
                $('#menus .container>div:nth-child(2)').append(html);
            }
        });
    }
});

var loginName=null;

$('#sendMessage').click(function(){
    var data=$('#reservationForm').serialize();//表单序列化，获得所有的用户输入
    $.ajax({
        type:'POST',
        url:'data/reservation.php',
        data:data,
        success:function(result){
            if(result.msg=='succ'){
                loginName=$('[name="uname"]').val();
                alert(loginName+' 您的信息预订成功！');
                //location.href='orderInfo.html';
            }else{
                alert("预定失败！");
            }
        }
    });
});


