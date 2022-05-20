$(function(){
    var btn1 = $('.banner.bnr01 .icon');
    var b2 = $('.banner.bnr02');
    var ag = $('.content.cnt01 section .artGroup');
    var art1 = $('.content.cnt01 section .artGroup .article');
    var btn2 = $('.content.cnt01 section .btn');
    var art2 = $('.content.cnt02 section article');
    var wd = $(window).width();
    
    
    
    
    
    // 배너
    btn1.click(bnr1);
    // 컨텐츠2
    art2.mouseover(cnt2);
    art2.mouseleave(cnt22);
    
    
    
    

    // 배너1
    function bnr1(){
        var ind = $(this).index();
        b2.find('.bnrTeam').css({
            marginLeft : ind * -100+'%',
        });
    }; 


    // 컨텐츠1
    // btn2.click(function(){
    //     if(flag == true){
    //         ag.animate({
    //             marginLeft : '-40%'
    //         },800,function(){     
    //             ag.find('.article:first').appendTo(ag);        
    //             ag.css({marginLeft : '-20%'});
    //         });
    //     }
    // });

    // 컨텐츠2
    function cnt2(){
        var ind = $(this).index()
        art2.find('.texts').eq(ind).css({
            opacity : '0',
            marginTop : '-10%'
        });
    };
    function cnt22(){
        var ind = $(this).index()
        art2.find('.texts').eq(ind).css({
            opacity : '1',
            marginTop : '0%'
        });
    };
    if(wd >= 1025){
        btn2.click(function(){
            console.log(this);
            ag.animate({
                marginLeft : '-40%'
            },800,function(){     
                ag.find('.article:first').appendTo(ag);        
                ag.css({marginLeft : '-20%'});
            });
        });
    }else if(wd>=420 && wd <= 1025){
        btn2.click(function(){
            ag.animate({
                marginLeft : '-67%'
            },800,function(){     
                ag.find('.article:first').appendTo(ag);        
                ag.css({marginLeft : '-34%'});
            });
        });
    }else{
        btn2.click(function(){
            ag.animate({
                marginLeft : '-200%'
            },800,function(){     
                ag.find('.article:first').appendTo(ag);        
                ag.css({marginLeft : '-100%'});
            });
        });
        // mo 스크립트 입력
    }      
});