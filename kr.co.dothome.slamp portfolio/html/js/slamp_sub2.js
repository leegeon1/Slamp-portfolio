$(function(){
    var btn = $('section .btn'); 
    var atc = $('section article'); 
    var sec = $('section .artGroup');
    var clk = $('ul > li');
    var j = 2;
    btn.click(function(){
        // j++;
        // if(j <= 4){
        //     console.log(j)
        //     sec.css('height', j * 50+'vh');
        // }
        // if($('article').is(':visible')){
        //     $('article').slideUp();
        // }
        // else{
        //     $('article').slideDown();
        // }
    });
    clk.eq(0).click(cnt);
    clk.eq(1).click(cnt1);
    clk.eq(2).click(cnt2);
    clk.eq(3).click(cnt3);
    clk.eq(4).click(cnt4);
    clk.eq(5).click(cnt5);
    clk.eq(6).click(cnt6);
    function cnt(){
        atc.css({
            display : 'block'
        });
    };
    function cnt1(){
        atc.css({
            display : 'none'
        });
        atc.eq(0).css({
            display : 'block'
        });
        atc.eq(3).css({
            display : 'block'
        });
        atc.eq(9).css({
            display : 'block'
        });
        atc.eq(10).css({
            display : 'block'
        });
    };
    function cnt2(){
        atc.css({
            display : 'none'
        });
        atc.eq(1).css({
            display : 'block'
        });
        atc.eq(2).css({
            display : 'block'
        });
        atc.eq(4).css({
            display : 'block'
        });
        atc.eq(5).css({
            display : 'block'
        });
        atc.eq(7).css({
            display : 'block'
        });
    };
    function cnt3(){
        atc.css({
            display : 'none'
        });
        atc.eq(11).css({
            display : 'block'
        });
    };
    function cnt4(){
        atc.css({
            display : 'none'
        });
        atc.eq(6).css({
            display : 'block'
        });
        atc.eq(8).css({
            display : 'block'
        });
    };
    function cnt5(){
        atc.css({
            display : 'none'
        });
        atc.eq(12).css({
            display : 'block'
        });
        atc.eq(13).css({
            display : 'block'
        });
    };
    function cnt6(){
        atc.css({
            display : 'none'
        });
        atc.eq(14).css({
            display : 'block'
        });
        atc.eq(15).css({
            display : 'block'
        });
    };
    
    // var inf = $('ul > li');
    // var x = 0;
    // for(var i = 0; i < inf.length; i++){
    //     inf.eq(i).click(function(){
    //         x++;
    //         if(x >= inf.length){
    //             x = 6;
    //         }
    //         atc.eq(x).css({
    //             display : 'block'
    //         });
    //     });
    // }
});