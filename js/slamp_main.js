$(function(){
    var btn = $('.content.cnt04 .btns').find('.btn');
    var ag = $('.content.cnt04 .artView .artGroup');
    var agimg = $('.content.cnt03 .artGroup article');
    var artV = $('.content.cnt03 .artView');
    var onOff = false;
    var wd = $(window).width();





    


    // 풀페이지헤더
    $(window).scroll(function(){
        var now = $(this).scrollTop();
        console.log(now);
        if(now>=1){
            $('.hdrWrap').addClass('fix');
        }else{
            $('.hdrWrap').removeClass('fix');
        };
    });

    // 컨텐츠3
    agimg.click(agimgs);

    if(wd > 1024){
        // 슬라이드 pc버젼

        // 컨텐츠4
        // 왼쪽버튼
        btn.first().click(leftbtn);
        // 오른쪽버튼
        btn.last().click(rightbtn);
    }else if( wd > 420 && wd <= 1024){
        // 왼쪽버튼
        btn.first().click(leftbtn);
        // 오른쪽버튼
        btn.last().click(rightbtn);
    }else{
        // 모바일 버튼
        btn.first().click(mobleftbtn);
        btn.last().click(mobrightbtn);
        // 모바일 스와이프
        ag.swipeleft(mobrightbtn);
        ag.swiperight(mobleftbtn);
    };

    
    // 컨텐츠3번
    function agimgs(){
        var ind = $(this).index();
        artV.css('margin-left',ind * -100+'%');
    };
    
    // 컨텐츠4번
    // 오른쪽버튼
    function rightbtn(){
        if(!onOff){
            onOff = true;
            ag.animate({
                marginLeft : '-33.3%'
            },500,'easeInOutBack',function(){
                ag.find('article:first').appendTo(ag);
                ag.css({marginLeft : '0%'});
                onOff = false;
            });
        };
    };
    
    // 왼쪽버튼
    function leftbtn(){
        if(!onOff){
            onOff = true;
            ag.animate({
                marginLeft : '0%'
            },500,'easeInOutBack',function(){
                ag.find('article:last').prependTo(ag);
                ag.css({marginLeft : '-100%'});
                onOff = false;
            });
        };
    };

    // 모바일 컨텐츠4
    // 오른쪽버튼
    function mobrightbtn(){
        if(!onOff){
            onOff = true;
            ag.animate({
                marginLeft : '-100%'
            },500,function(){
                ag.find('article:first').appendTo(ag);
                ag.css({marginLeft : '0%'});
                onOff = false;
            });
        };
    };
    function mobleftbtn(){
        if(!onOff){
            onOff = true;
            ag.animate({
                marginLeft : '0%'
            },500,function(){
                ag.find('article:last').prependTo(ag);
                ag.css({marginLeft : '-100%'});
                onOff = false;
            });
        };
    };
    
    // Mobile 스크립트
    // if(wd >= 1025){
    // }else if(wd >= 420 && wd <= 1025){
    //     mn.click(function(){
    //             mn.toggleClass('on');
    //         });
    //         mn.last().click(function(){
    //             $('.menuMob').css({
    //                 display : 'block'
    //             });
    //         });
    //         mobbtn.last().click(function(){
    //             $('.menuMob').css({
    //                 display : 'none'
    //             });
    //         });
    // } else {
    //   mo 스크립트 입력
    // }
});