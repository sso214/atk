var el = document.querySelectorAll('section');
var app = new onePageScroll({
    el: el,
    easing: 'ease-out',
    throttling: 300,
});

// 23.11.08
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '450',
        width: '800',
        videoId: 'zD15in3bfeA',
        playerVars: {
            'mute': 1,
            'loop': 1,
            'playlist': 'zD15in3bfeA',
            'autoplay': 1,
            'showsearch': 0,
            'cc_load_policy': 0,
            'controls': 0,
            'autohide': 1,
            'disablekb': 0,
            'rel': 0,
        }, events: {
            'onReady': function() {
                player.mute();
                player.playVideo();
            },
        }
    });
}
// 23.11.08

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
    var autoPlayParams = '?autoplay=1';
    function stopVideo() {
        var visualVideoTarget = $(".visualVideo");
        var visualVideoSrc = visualVideoTarget.attr('src').replace(autoPlayParams, '');
        visualVideoTarget.attr("src","");
        visualVideoTarget.attr("src",visualVideoSrc);
    }
    function autoPlayVideo() {
        var visualVideoTarget = $(".visualVideo");
        var visualVideoSrc = visualVideoTarget.attr('src');
        visualVideoTarget.attr("src",`${visualVideoSrc}${autoPlayParams}`);
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

            if (dataKey === 'video') autoPlayVideo();
        });

        popClose.on('click', function() {
            pop.removeClass('on');
            popBlack.removeClass('on');
            stopVideo();
        });
    }
});
