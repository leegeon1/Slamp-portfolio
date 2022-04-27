$(function(){
    var i = 0;
    var btn = $('.content.cnt04 .btns').find('.btn');
    var ag = $('.content.cnt04 .artView .artGroup');
    var agimg = $('.content.cnt03 .artGroup article');
    var artV = $('.content.cnt03 .artView');
    var events = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    var onOff = false;





    
    // 파라미터

    // 컨텐츠3
    agimg.click(agimgs);

    // 컨텐츠4
    btn.first().click(leftbtn);
    btn.last().click(rightbtn);


    
    // 컨텐츠3번
    function agimgs(){
        var ind = $(this).index();
        console.log(ind);
        artV.css('margin-left',ind * -100+'%');
    };
    
    
    
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

    // 컨텐츠4번

    // 오른쪽버튼
    function rightbtn(){
        if(!onOff){
            ag.animate({
                marginLeft : '-33.3%'
            },500,'easeInOutBack',function(){
                ag.find('article:first').appendTo(ag);
                ag.css({marginLeft : '0%'});
            });
            onOff = true;
        };
    };
    // 왼쪽버튼
    function leftbtn(){
        if(!onOff){
            ag.animate({
                marginLeft : '0%'
            },500,'easeInOutBack',function(){
                ag.find('article:last').prependTo(ag);
                ag.css({marginLeft : '-33.3%'});
            });
            onOff = true;
        };
    };
    ag.find('article').on(events,function(){
        onOff = false;
    });
});