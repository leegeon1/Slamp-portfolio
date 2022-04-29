$(function(){
    var i = 0;
    var btn1 = $('.banner.bnr01 .icon');
    var icimg = $('.banner.bnr01 .icon .image');
    var b2 = $('.banner.bnr02');
    var art1 = $('.content.cnt01 section .artGroup');
    var btn2 = $('.content.cnt01 section .btn');


    
    
    
    
    
    
    // 파라미터
    btn1.click(bnr1);

    btn2.click(cnt1);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // 배너1
    function bnr1(){
        var ind = $(this).index();
        b2.find('.bnrTeam').css({
            marginLeft : ind * -100+'%',
        });
    }; 
    
    // 컨텐츠1
    art1.css({
        marginLeft : '-33.3%'
    });
    function cnt1(){
        i++;
        if(i>=5){
            i=5;
        }
        art1.animate({
            marginLeft : '0%',
        },500,function(){
            art1.find('.article:first').appendTo(art1);
            art1.css({marginLeft : '-33.3%'});
        });
        $('.article').css('filter', 'grayscale(1)');
        $('.article').eq(i).css('filter', 'grayscale(0)');
    }
});