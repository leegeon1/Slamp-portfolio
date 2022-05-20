$(function(){
    var more = $('.cntWrap .content section article:nth-child(1) .texts h4');
    var tt = $('.cntWrap .content section article:nth-child(1) .texts p');
    var bnrmr = $('.bnrWrap .banner .text h4');
    var txt = $('.bnrWrap .banner .text p');

    
    // 컨텐츠 텍스트 더보기
    more.click(function(){
        var tx = $(this).text();
        tt.toggleClass('on');
        if(tx == 'Read more..'){
            $(this).text('close');
        }
        else if(tx == 'close'){
            $(this).text('Read more..');
        }else{
            $(this).text('close');
        }
    });


    // 배너 텍스트 더보기
    bnrmr.click(function(){
        var txx = $(this).text();
        txt.toggleClass('on');
        if(txx == 'Read more..'){
            $(this).text('close');
        }
        else if(txx == 'close'){
            $(this).text('Read more..');
        }else{
            $(this).text('close');
        }
    });
});