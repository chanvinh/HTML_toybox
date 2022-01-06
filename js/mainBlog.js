$(window).scroll(function() {
    if($(this).scrollTop() > 150) {
        $(".nav").addClass("navAnimation")
    }
    else {
        $(".nav").removeClass("navAnimation")
    }
})