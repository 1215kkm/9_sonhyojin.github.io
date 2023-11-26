$(document).ready(function(){
	$('.gnb > li').mouseenter(function(){
        $('.lnb').stop().fadeIn();
        $('.lnb_bg').stop().fadeIn();
    })
    $('.lnb_bg').mouseleave(function(){
        $('.lnb').stop().fadeOut();
        $('.lnb_bg').stop().fadeOut();
    })

    $(window).resize(function(){
        if($(this).width() <= 1200){
            $('.lnb').hide();
            $('.lnb_bg').hide();
        }
    })



    var gnb2 = $('.gnb').clone();
    $('.gnb2').html(gnb2).find('.gnb').attr('class','hidden_menu').find('.lnb').attr('class','lnb2');

    $('.hambuger').click(function(){
        $('.sidemenu').addClass('action');
        $('.sidebox').css({zIndex:777});
        $('body').css({height:'100%', overflow:'hidden'})
    })
    $('.sidemenu .btn_close').click(function(){
        $('.sidemenu').removeClass('action');
        $('.sidebox').css({zIndex:-1});
        $('body').css({height:'', overflow:''})
    })








    var sec1DivTop,
        sec2DivTop,
        sec3DivTop,
        scrT,
        winH,
        buildingBottom,
        daYeon;


    function section1Action(){
        if(scrT >= sec1DivTop - winH/1.2){
            $('#section1 > div').stop().animate({top:-100});
        } else {
            $('#section1 > div').stop().animate({top:0});
        }
    }

    function section2Action(mt1, mt2){
        if(scrT > sec2DivTop - winH/2){
            $('#section2 > div ul').eq(0).stop().animate({marginTop:mt1+'px'});
            $('#section2 > div ul').eq(1).stop().animate({marginTop:mt2+'px'});
            $('#section2 > div ul').eq(2).stop().animate({marginTop:mt1+'px'});
            $('#section2 > div ul').eq(3).stop().animate({marginTop:mt2+'px'});
        } else {
            $('#section2 > div ul').eq(0).stop().animate({marginTop:''});
            $('#section2 > div ul').eq(1).stop().animate({marginTop:''});
            $('#section2 > div ul').eq(2).stop().animate({marginTop:''});
            $('#section2 > div ul').eq(3).stop().animate({marginTop:''});
        }
    }

    function section3Action(){
        if(scrT > sec3DivTop - winH/1.5) {
            $('#section3').addClass('action');
        } else {
            $('#section3').removeClass('action');
        }
    }
    
    function pcAction(bgBottom){
        sec1DivTop = $('#section1').offset().top;
        sec2DivTop = $('#section2').offset().top;
        sec3DivTop = $('#section3').offset().top;
        scrT = $(window).scrollTop();
        winH = $(window).height();

        if(scrT < sec1DivTop){            
            $('#visual_main').css({backgroundPositionY:scrT/1.5});
            $('.building').css({backgroundPosition:'center bottom ' + (bgBottom+scrT/7) + 'px'});
            $('.text_box').css({top:300+scrT/2, opacity:1-(scrT/1000)});            
        }
    }






    


    $(window).scroll(function(){     
        var winW = $(window).width();
        console.log(daYeon) 
        if($('#visual_main').length >= 1){
            if(winW > 1200){
                pcAction(-300);
                section1Action();
                section2Action(35,130);
                section3Action();
            }
            else {
                pcAction(-200);
                section1Action();
                section2Action(20,20);
                section3Action();
            }
        } 
        
    })


    $('.snb li a').each(function(){
        if(window.location.href.indexOf(this.href) != -1){
            $(this).parent().addClass('on')
        }
    })



})


