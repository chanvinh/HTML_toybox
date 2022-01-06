$('.listImageMain .owl-carousel').owlCarousel({
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$(window).scroll(function() {
    if($(this).scrollTop() > 150) {
        $(".nav").addClass("navAnimation")
    }
    else {
        $(".nav").removeClass("navAnimation")
    }
})

$(".imageMain").zoom();

