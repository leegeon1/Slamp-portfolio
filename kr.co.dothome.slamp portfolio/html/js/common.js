$(function(){
    $('.hdr').load('./inc/header.html', function(){
        $(window).scroll(function(){
            var now = $(this).scrollTop();
            if(now>=1){
                $('.hdrWrap').addClass('fix');
            }else{
                $('.hdrWrap').removeClass('fix');
            };
        });
    });
    $('.ftr').load('./inc/footer.html',function(){

    });
});