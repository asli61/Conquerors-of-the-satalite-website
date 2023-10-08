//CUSTOM OWL - CAROUSEEL

$(document).ready(function(){
    let owl = $(".owl-carousel").owlCarousel({
        autoplay: false,
        dots: true,
        dotsData: true,
        loop:true,
        nav:false,
        items:1
    });

    $('.owl-dot').click(function(){
        owl.trigger('to.owl.carousel',[$(this).index(),1000]);
    })

    });

    $(document).ready(function() {
        var res = '',
            width = parseInt($(window).width()),
            height = parseInt($(window).height());
      
        for (var i = 0;i < 100;i++) {
          res += '<div class="star" ' +
              'style="top: ' + Math.random() * height +
              'px;left: ' + Math.random() * width + 'px"></div>';
        }
        $('#stars').html(res);
      });
    

      var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
      });