$(document).ready(function(){
    
   
    
    
        
    var scrT = $(window).scrollTop();
    var section2Top = $('.section2').offset().top;
    var section3Top = $('.section3').offset().top;
    var section4Top = $('.section4').offset().top;
    var section5Top = $('.section5').offset().top;
    var section6Top = $('.section6').offset().top;

    

    if(scrT >= section2Top){
        $('.section2').addClass('action');
        $('.section3').addClass('action');
    }



    quickMenu()
    
	$(window).scroll(function(){
        scrT = $(window).scrollTop();
        
        quickMenu()

    })



    function quickMenu(){
        if(scrT >= section2Top){
            $('.section2').addClass('action');
            $('.balloon').css("top","10px");
        } /* else {
            $('.section2').removeClass('action')
        } */

        if(scrT >= section3Top){
            $('.section3').addClass('action');
            $('.balloon').css("top","129px");
        };

        if(scrT >= section4Top){
            $('.balloon').css("top","248px");
        };

        if(scrT >= section5Top){
            $('.balloon').css("top","367px");
        };

        if(scrT >= section6Top){
            $('.balloon').css("top","486px");
        };

        
        if(scrT >= section2Top){
            $('.quick_menu').css({position:'fixed', top:'45vh', right:'70px'})
        } else {
            $('.quick_menu').css({position:'', top:'', right:''})
        }
    }











    // .quick_menu 의 li.quick_2 을 클릭하면 
    // .balloon 의 top값이 10px로 이동
    // .quick_menu 의 li.quick_2 을 클릭하면 section2Top 로 이동
    $(".quick_menu li.quick_2").click(function(){
        $('html').animate({scrollTop:section2Top})
        // $(".balloon").css("top","10px");
        return false
    });

    // .quick_menu 의 li.quick_3 을 클릭하면 
    // .balloon 의 top값이 129px로 이동
    // .quick_menu 의 li.quick_3 을 클릭하면 section3Top 로 이동
    $(".quick_menu li.quick_3").click(function(){
        $('html').animate({scrollTop:section3Top})
        // $(".balloon").css("top","129px");
        return false
    });
    // .quick_menu 의 li.quick_4 을 클릭하면 
    // .balloon 의 top값이 248px로 이동
    // .quick_menu 의 li.quick_4 을 클릭하면 section4Top 로 이동
    $(".quick_menu li.quick_4").click(function(){
        $('html').animate({scrollTop:section4Top})
        // $(".balloon").css("top","248px");
        return false
    });
    // .quick_menu 의 li.quick_5 을 클릭하면 
    // .balloon 의 top값이 367px로 이동
    // .quick_menu 의 li.quick_5 을 클릭하면 section5Top 로 이동
    $(".quick_menu li.quick_5").click(function(){
        $('html').animate({scrollTop:section5Top})
        // $(".balloon").css("top","367px");
        console.log(section5Top)
        return false
    });
    // .quick_menu 의 li.quick_6 을 클릭하면 
    // .balloon 의 top값이 486px로 이동
    // .quick_menu 의 li.quick_6 을 클릭하면 section6Top 로 이동
    $(".quick_menu li.quick_6").click(function(){
        $('html').animate({scrollTop:section6Top})
        // $(".balloon").css("top","486px");
        console.log(section6Top)
        return false
    });




    

    //.section3 .showpage를 클릭하면 .big_page가 커지면서 등장
    $(".section3 .active_page .pc .showpage").click(function(){
        $(".section3 .airplane, .active_page, .section3 h2").fadeOut();
        $(".section3 .big_page .pc_big").fadeIn();
    });
    
    $(".section3 .active_page .tablet .showpage").click(function(){
        $(".section3 .airplane, .active_page, .section3 h2").fadeOut();
        $(".section3 .big_page .tablet_big").fadeIn();
    });

    $(".section3 .active_page .mobile .showpage").click(function(){
        $(".section3 .airplane, .active_page, .section3 h2").fadeOut();
        $(".section3 .big_page .mobile_big").fadeIn();
    });


    //.section3 .big_page button 을 클릭하면 .big_page 사라지고 .active_page 등장 - 스크롤을 움직여야 나옴
    $(".section3 button").click(function(){
        $(".section3 .airplane, .section3 .big_page > div").fadeOut();
        $(".active_page, .section3 h2").fadeIn();
        $(".section3 .active_page .pc").css("animationDelay","0s");
        $(".section3 .active_page .tablet").css("animationDelay","0s");
        $(".section3 .active_page .mobile").css("animationDelay","0s");
    });

    

    


})//ready end


