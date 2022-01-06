const isPcWidth =  window.innerWidth > 1024;
//HOME PAGE - SLIDE
if (isPcWidth) {

    var button_next = document.querySelector(".buttonSlide_next");
    var button_prev = document.querySelector(".buttonSlide_prev");
    var slide = document.querySelector(".slide");
    var slideChild = document.querySelectorAll(".slideChild");
    var sliderChildWidth = slideChild[0].offsetWidth;
    var sliderLength = slideChild.length;

    positionX = 0;
    index = 1;

    button_next.addEventListener("click",function () {
        clickSilde(1)
    });

    button_prev.addEventListener("click",function () {
        clickSilde(-1)
    });

    function clickSilde(direction) {
        if(direction == 1) {
            if(index >= sliderLength){
                index = 1;
                positionX = 0;
                slide.style.transform = `translateX(${positionX}px)`;
                $(".slideChild:nth-child(2) .textSilde").removeClass("textSildeBlock")
                $(".slideChild:nth-child(1) .textSilde").removeClass("textSildeNone")
            } 
            else if (index < sliderLength) {
                positionX = positionX - sliderChildWidth;
                slide.style.transform = `translateX(${positionX}px)`;
                $(".slideChild:nth-child(2) .textSilde").addClass("textSildeBlock")
                $(".slideChild:nth-child(1) .textSilde").addClass("textSildeNone")
                index ++;
            }
        }
        else if (direction == -1) {
            if(index <= 1) {
                index = 2;
                positionX = -sliderChildWidth;
                slide.style.transform = `translateX(${positionX}px)`;
                $(".slideChild:nth-child(2) .textSilde").addClass("textSildeBlock")
                $(".slideChild:nth-child(1) .textSilde").addClass("textSildeNone")
            }
            else if(index > 1) {
                positionX = positionX + sliderChildWidth;
                slide.style.transform = `translateX(${positionX}px)`;
                $(".slideChild:nth-child(2) .textSilde").removeClass("textSildeBlock")
                $(".slideChild:nth-child(1) .textSilde").removeClass("textSildeNone")
                index--;
            }
        }
    }

    $(window).scroll(function() {
        if($(this).scrollTop() > 150) {
            $(".nav").addClass("navAnimation")
        }
        else {
            $(".nav").removeClass("navAnimation")
        }
    })

    //HOME PAGE - Deak Of The Day
    var btnPrevTheDay = document.querySelector(".prev_ProductTheDay")
    var btnNextTheDay = document.querySelector(".next_ProductTheDay")
    var fullItemTheDay = document.querySelector(".productTheDay .row")
    var ItemTheDay = document.querySelectorAll(".productTheDay .row .col-md-6")
    var ItemTheDayWith = ItemTheDay[0].offsetWidth;
    var ItemTheDayLength = ItemTheDay.length;

    console.log(ItemTheDayLength)

    transalteTheDayX = 0;
    itemTheDay = 1;

    btnNextTheDay.addEventListener("click",function() {
        clickProduct(1);
    })

    btnPrevTheDay.addEventListener("click",function() {
        clickProduct(-1);
    })

    function clickProduct(direction) {
        if(direction == 1) {
            if(itemTheDay >= ItemTheDayLength - 1) {
                itemTheDay=1;
                transalteTheDayX = 0;
                fullItemTheDay.style.transform = `translateX(${transalteTheDayX}px)`;
            }
            else if(itemTheDay <= ItemTheDayLength) {
                transalteTheDayX = transalteTheDayX - ItemTheDayWith;
                fullItemTheDay.style.transform = `translateX(${transalteTheDayX}px)`;
                itemTheDay++;
            }
        }

        else if(direction == -1) {
            if(itemTheDay <= 1) {
                itemTheDay = 3;
                transalteTheDayX = - ItemTheDayWith - ItemTheDayWith;
                fullItemTheDay.style.transform = `translateX(${transalteTheDayX}px)`;
            }
            else if (itemTheDay > 1) {
                transalteTheDayX = transalteTheDayX + ItemTheDayWith;
                fullItemTheDay.style.transform = `translateX(${transalteTheDayX}px)`;
                itemTheDay--;
            }
        }
    }

    //HOME PAGE - Latest Blog
    var btnNextBlog = document.querySelector(".next_ProductLatestBlog")
    var btnPrevBlog = document.querySelector(".prev_ProductLatestBlog")
    var fullItemLatestBlog = document.querySelector(".productLatestBlog .row")
    var itemLatestBlog = document.querySelectorAll(".productLatestBlog .row .col-md-6")
    var itemLatestBlogWith = itemLatestBlog[0].offsetWidth;
    var itemLatestLength =  itemLatestBlog.length;


    transalteLatestBlogX = 0;
    indexLatestBlog = 1;

    btnNextBlog.addEventListener("click",function() {
        clickBlog(1);
    })

    btnPrevBlog.addEventListener("click",function() {
        clickBlog(-1);
    })

    function clickBlog(direction) {
        if(direction == 1) {
            if(indexLatestBlog >= itemLatestLength - 1) {
                indexLatestBlog = 1;
                transalteLatestBlogX = 0;
                fullItemLatestBlog.style.transform = `translateX(${transalteLatestBlogX}px)`;
            }
            else if(indexLatestBlog < itemLatestLength) {
                transalteLatestBlogX = transalteLatestBlogX - itemLatestBlogWith;
                fullItemLatestBlog.style.transform = `translateX(${transalteLatestBlogX}px)`;
                indexLatestBlog++;
            }
        }

        else if (direction == -1 ) {
            if(indexLatestBlog <= 1) {
                indexLatestBlog = 5;
                transalteLatestBlogX = -itemLatestBlogWith -itemLatestBlogWith -itemLatestBlogWith -itemLatestBlogWith;
                fullItemLatestBlog.style.transform = `translateX(${transalteLatestBlogX}px)`;
            }
            else if (indexLatestBlog > 1) {
                transalteLatestBlogX = transalteLatestBlogX + itemLatestBlogWith;
                fullItemLatestBlog.style.transform = `translateX(${transalteLatestBlogX}px)`;
                indexLatestBlog--;
            }
            
        }
    }

    
}