$(function(){
    var i = 0;
    var btn = $('.banner.bnr01 .icon');
    var b2 = $('.banner.bnr02');


    btn.css({
        filter: 'grayscale(0)'
    });
    btn.click(function(){
        var ind = $(this).index();
        b2.find('.bnrTeam').css({
            marginLeft : ind * -100+'%',
        });
        
    }); 
});