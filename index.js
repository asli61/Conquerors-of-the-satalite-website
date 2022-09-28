(window).scroll(function() {
    // Get scroll position

    alert("debug allert");
    var s = $(window).scrollTop(),
    // scroll value and opacity
    opacityVal = (s / 150.0);
    // opacity value 0% to 100%
    
    if(opacityVal < 0.5){ 
    $('.blurred-img').css('opacity', opacityVal);}

    if(opacityVal >= 0.5){
        $('.blurred-img').css('opacity', 0.5);}
});

alert("degug alertt2");

alert("debugallert");