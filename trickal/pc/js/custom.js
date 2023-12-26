var el = document.querySelectorAll('section');
var app = new onePageScroll({
    el: el,
    easing: 'ease-out',
    throttling: 300,
});

var swiper1 = new Swiper(".cont03-swiper", {
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: "#cont03 .swiper-button-next",
        prevEl: "#cont03 .swiper-button-prev",
    },
});


var swiper2 = new Swiper(".cont05-swiper", {
    simulateTouch: false,
    navigation: {
        nextEl: "#cont05 .swiper-button-next",
        prevEl: "#cont05 .swiper-button-prev",
    },
});


var SWIPER_PAGINATION_01 = ['나이아', '버터', '비비', '셀리네', '에피카', '티그', '뽑기'];
var swiper3 = new Swiper(".cont05-01-swiper", {
    simulateTouch: false,
    effect: "fade",
    pagination: {
        el: ".cont05-01-swiper .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + SWIPER_PAGINATION_01[index] + "</span>";
        },
    },
});


var SWIPER_PAGINATION_02 = ['나이아', '버터', '비비'];
var swiper4 = new Swiper(".cont05-02-swiper", {
    simulateTouch: false,
    effect: "fade",
    pagination: {
        el: ".cont05-02-swiper .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + SWIPER_PAGINATION_02[index] + "</span>";
        },
    },
});

$(document).ready(function(){
    $('#floating-banner .close').on('click', function (){
        $('#floating-banner').css('display', 'none');
    });

    var navMenuLi = $("nav li");

    navMenuLi.removeClass('on');
    navMenuLi.eq(app.active - 1).addClass('on');

    navMenuLi.on('click', function() {
        var index = $(this).index();
        app.goto(index+1);
    })

    el.forEach((v) => {
        v.addEventListener('inview', function(e) {
            var index = e.srcElement.id.replace('cont0', '');
            navMenuLi.removeClass('on');
            navMenuLi.eq(index - 1).addClass('on');
        })
    });
});
