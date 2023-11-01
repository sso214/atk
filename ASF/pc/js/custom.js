var el = document.querySelectorAll('section');
var app = new onePageScroll({
    el: el,
    easing: 'ease-out',
    throttling: 300,
});

var EVENT_SWIPER_PAGINATION = ['MAIN EVENT', 'DUNGEON STALKERS', 'KINGDOM THE BLOOD', 'PROJECT GGG'];
var swiper = new Swiper(".eventSwiper", {
    effect: "fade",
    pagination: {
        el: "#cont03 .pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + EVENT_SWIPER_PAGINATION[index] + "</span>";
        },
    },
});

$(document).ready(function(){
    //header
    var headerMenuLi = $("header .nav li");
    var navMenuLi = $("nav li");

    headerMenuLi.removeClass('on');
    navMenuLi.removeClass('on');

    if (app.active < 4) {
        headerMenuLi.eq(app.active - 1).addClass('on');
    } else {
        navMenuLi.eq(app.active - 4).addClass('on');
    }

    headerMenuLi.on('click', function(){
        var index = $(this).index();
        app.goto(index+1);
    });
    navMenuLi.on('click', function() {
        var index = $(this).index();
        app.goto(index+4);
    })

    el.forEach((v) => {
        v.addEventListener('inview', function(e) {
            var index = e.srcElement.id.replace('cont0', '');
            headerMenuLi.removeClass('on');
            navMenuLi.removeClass('on');

            if (index < 4) {
                headerMenuLi.eq(index - 1).addClass('on');
            } else {
                navMenuLi.eq(index - 4).addClass('on');
            }
        })
    });

    //23.11.02
    $(".lang button").on('click', function(){
        $(".lang-list").toggleClass('on');
    });
    $('html').click(function(e) {
        if($(e.target).parents('.lang-button').length < 1 && !$(e.target).hasClass('lang-button')){
            $(".lang-list").removeClass('on');
        }
    });
    $(".lang-list li").on('click', function(){
        var name = $(this).text();
        var value = $(this).data('key');

        $(".lang button span").text(name);
        console.log(value);
    });


    //23.11.02
    function stopVideo() {
        var visualVideoTarget = $(".visualVideo");
        var visualVideoSrc = visualVideoTarget.attr('src');
        visualVideoTarget.attr("src","");
        visualVideoTarget.attr("src",visualVideoSrc);
    }

    //23.11.02
    var popBlack = $("#pop-black");
    if (popBlack) {
        var pop = $(".pop");
        var popOpen = $(".pop-btn");
        var popClose = $(".pop-close");

        popOpen.on('click', function () {
            var dataKey = $(this).data('key');
            $(".pop." + dataKey).addClass('on');
            popBlack.addClass('on');
        });

        popClose.on('click', function() {
            pop.removeClass('on');
            popBlack.removeClass('on');
            stopVideo();
        });
    }
});
