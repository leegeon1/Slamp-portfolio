$(function(){
    var ag1 = $('.content.cnt01 .artGroup');
    var ag2 = $('.content.cnt02 .artGroup');
    var ag3 = $('.content.cnt03 .artGroup');
    var btn1 = $('.content.cnt01 header .btn');
    var btn2 = $('.content.cnt02 header .btn');
    var btn3 = $('.content.cnt03 header .btn');





    btn1.click(cnt1);
    btn2.click(cnt2);
    btn3.click(cnt3);

    // 슬라이드 버튼 제한하기!!! 

    // 컨텐츠1
    function cnt1(){
        ag1.animate({
            marginLeft : '-30%'
        },500,function(){
            ag1.find('article:first').appendTo(ag1);
            ag1.css({marginLeft : '0%'});
        });
    };


    // 컨텐츠2
    function cnt2(){
        ag2.animate({
            marginLeft : '-30%'
        },500,function(){
            ag2.find('article:first').appendTo(ag2);
            ag2.css({marginLeft : '0%'});
        });
    };


    // 컨텐츠3
    function cnt3(){
        ag3.animate({
            marginLeft : '-30%'
        },500,function(){
            ag3.find('article:first').appendTo(ag3);
            ag3.css({marginLeft : '0%'});
        });
    };
});
