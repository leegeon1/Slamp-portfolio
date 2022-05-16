$(function(){
    var btn = $('section .btn'); 
    var atc = $('section article'); 
    var atc1 = $('section article.num1'); 
    var atc2 = $('section article.num2'); 
    var atc3 = $('section article.num3'); 
    var atc4 = $('section article.num4'); 
    var atc5 = $('section article.num5'); 
    var atc6 = $('section article.num6'); 
    var clk = $('ul > li');
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
    clk.eq(0).click(function(){
        atc.css({
            display : 'block'
        });
    });

    clk.eq(1).click(function(){
        atc.css({
            display : 'none'
        })
        atc1.css({
            display : 'block'
        });
    });
    clk.eq(2).click(function(){
        atc.css({
            display : 'none'
        })
        atc2.css({
            display : 'block'
        });
    });
    clk.eq(3).click(function(){
        atc.css({
            display : 'none'
        })
        atc3.css({
            display : 'block'
        });
    });
    clk.eq(4).click(function(){
        atc.css({
            display : 'none'
        })
        atc4.css({
            display : 'block'
        });
    });
    clk.eq(5).click(function(){
        atc.css({
            display : 'none'
        })
        atc5.css({
            display : 'block'
        });
    });
    clk.eq(6).click(function(){
        atc.css({
            display : 'none'
        })
        atc6.css({
            display : 'block'
        });
    });


    
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