$(document).ready(function(){
    $('.portBox li a').hover(function(){
        $(this).css('color','white').css('border','1px solid white').css('background','black');
        
        $(this).parent().children('img').css('opacity','0.7');
    },
    $('.portBox li img').hover(function(){
        $(this).css('opacity','1');
        $(this).parent().children('a').css('color','transparent').css('border','none').css('background','transparent');
        
    })
)
});