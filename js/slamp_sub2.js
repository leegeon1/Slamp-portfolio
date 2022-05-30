$(function(){
    var atc = $('section article'); 
    var atc1 = $('section article.num1'); 
    var atc2 = $('section article.num2'); 
    var atc3 = $('section article.num3'); 
    var atc4 = $('section article.num4'); 
    var atc5 = $('section article.num5'); 
    var atc6 = $('section article.num6'); 
    var clk = $('ul > li');

    
    clk.click(function(){
        nums = $(this).attr('data-num');
        console.log(nums);
        if(nums == 1){
            atc.css({display : 'block'});
        }else if(nums == 2){
            atc.css({display : 'none'});
            atc1.css({display : 'block'});
        }else if(nums == 3){
            atc.css({display : 'none'});
            atc2.css({display : 'block'});
        }else if(nums == 4){
            atc.css({display : 'none'});
            atc3.css({display : 'block'});
        }else if(nums == 5){
            atc.css({display : 'none'});
            atc4.css({display : 'block'});
        }else if(nums == 6){
            atc.css({display : 'none'});
            atc5.css({display : 'block'});
        }else if(nums == 7){
            atc.css({display : 'none'});
            atc6.css({display : 'block'});
        }
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