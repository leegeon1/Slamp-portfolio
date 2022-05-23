$(function(){
    var ag = $('.content .artGroup');
    var ag1 = $('.content.cnt01 .artGroup');
    var ag2 = $('.content.cnt02 .artGroup');
    var ag3 = $('.content.cnt03 .artGroup');
    var btn1 = $('.content.cnt01 header .btn');
    var btn2 = $('.content.cnt02 header .btn');
    var btn3 = $('.content.cnt03 header .btn');
    var onOff = false;
    var wd = $(window).width();





    if(wd >= 1025){
        btn1.click(cnt1);
        btn2.click(cnt2);
        btn3.click(cnt3);
    } else if(wd >= 420 && wd <= 1025){
        btn1.click(cnt11);
        btn2.click(cnt22);
        btn3.click(cnt33);
    } else {
        btn1.click(cnt111);
        btn2.click(cnt222);
        btn3.click(cnt333);
        // mo 스크립트 입력
    }
    
    ag1.swipeleft(function(){
        ag1.animate({
            marginLeft : '-100%'
        },500,function(){
            ag1.find('article:first').appendTo(ag1);
            ag1.css({marginLeft : '0%'});
        });
    });


    // pc 슬라이드

    // 컨텐츠1
    function cnt1(){
        if(!onOff){
            onOff = true;
            ag1.animate({
                marginLeft : '-30%'
            },500,function(){
                ag1.find('article:first').appendTo(ag1);
                ag1.css({marginLeft : '0%'});
                onOff = false;
            });
        };
    };
    
    // 컨텐츠2
    function cnt2(){
        if(!onOff1){
            onOff1 = true;
            ag2.animate({
                marginLeft : '-30%'
            },500,function(){
                ag2.find('article:first').appendTo(ag2);
                ag2.css({marginLeft : '0%'});
                onOff1 = false;
            });
            
        };
    };
    
    // 컨텐츠3
    function cnt3(){
        if(!onOff2){
            onOff2 = true;        
            ag3.animate({
                marginLeft : '-30%'
            },500,function(){
                ag3.find('article:first').appendTo(ag3);
                ag3.css({marginLeft : '0%'});
                onOff2 = false;
            });
        };
    };

    // tablet 슬라이드
    function cnt11(){
        if(!onOff){
            onOff = true;
            ag1.animate({
                marginLeft : '-40%'
            },500,function(){
                ag1.find('article:first').appendTo(ag1);
                ag1.css({marginLeft : '0%'});
                onOff = false;
            });
        };
    };
    
    // 컨텐츠2
    function cnt22(){
        if(!onOff1){
            onOff1 = true;
            ag2.animate({
                marginLeft : '-40%'
            },500,function(){
                ag2.find('article:first').appendTo(ag2);
                ag2.css({marginLeft : '0%'});
                onOff1 = false;
            });
            
        };
    };
    
    // 컨텐츠3
    function cnt33(){
        if(!onOff2){
            onOff2 = true;        
            ag3.animate({
                marginLeft : '-40%'
            },500,function(){
                ag3.find('article:first').appendTo(ag3);
                ag3.css({marginLeft : '0%'});
                onOff2 = false;
            });
        };
    };
    // 모바일 슬라이드
    function cnt111(){
        if(!onOff){
            onOff = true;
            ag1.animate({
                marginLeft : '-100%'
            },500,function(){
                ag1.find('article:first').appendTo(ag1);
                ag1.css({marginLeft : '0%'});
                onOff = false;
            });
        };
    };
    
    // 컨텐츠2
    function cnt222(){
        if(!onOff){
            onOff = true;
            ag2.animate({
                marginLeft : '-100%'
            },500,function(){
                ag2.find('article:first').appendTo(ag2);
                ag2.css({marginLeft : '0%'});
                onOff = false;
            });
            
        };
    };
    
    // 컨텐츠3
    function cnt333(){
        if(!onOff){
            onOff = true;        
            ag3.animate({
                marginLeft : '-100%'
            },500,function(){
                ag3.find('article:first').appendTo(ag3);
                ag3.css({marginLeft : '0%'});
                onOff = false;
            });
        };
    };
});
