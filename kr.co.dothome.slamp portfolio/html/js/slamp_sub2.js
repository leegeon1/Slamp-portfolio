$(function(){
    var btn = $('section .btn'); 
    var atc = $('section article'); 
    btn.click(function(){
        atc.css({
            display : 'block'
        })
    });
});