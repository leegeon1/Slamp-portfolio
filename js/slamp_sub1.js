$(function(){
    var btn1 = $('.banner.bnr01 .icon');
    var b2 = $('.banner.bnr02');
    var ag = $('.content.cnt01 section .artGroup');
    var art1 = $('.content.cnt01 section .artGroup .article');
    var btn2 = $('.content.cnt01 section .btn');
    var art2 = $('.content.cnt02 section article');

    
    
    
    
    
    // 파라미터

    // 배너
    btn1.click(bnr1);
    // 컨텐츠1
    btn2.click(cnt1);
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
    ag.css({
        marginLeft : '-33%'
    });
    $('.article').css('filter', 'grayscale(1)');
    $('.article').eq(1).css('filter', 'grayscale(0)');
    function cnt1(){
        ag.find('.article:eq(1)').animate({
            marginLeft : '-33%',
        },800,function(){
            ag.find('.article:first').appendTo(ag);
            ag.find('.article').css({marginLeft : '0%'});
        });
        $('.article').css('filter', 'grayscale(1)');
        $('.article').eq(2).css('filter', 'grayscale(0)');
    }

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
});