$(function(){
    var mn = $('.hdrWrap header .menu i');
    var mobbtn = $('.hdrWrap header .menuMob .hdrMob .mobRight .icon i');
    var wd = $(window).width();
    var flag = true;


    mn.last().click(function(){            
        if (flag == true) {
            $('.menuMob').css({
                display : 'block'
            });
            mobbtn.last().click(function(){
                $('.menuMob').css({
                    display : 'none'
                });
            });
        }
    });

    $(window).resize(function(){
        if (wd <= 1025) {
            $('.menuMob').css({
                display : 'none'
            });
        } else {
            $('.menuMob').css({
                display : 'none'
            });
        }
    });
});