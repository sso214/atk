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

    //lang
    $(".lang-list li").on('click', function(){
        console.log('hi');
        console.log($(this).data('key'));
    })
});

// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// var player;
// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//         height: '450',
//         width: '800',
//         videoId: 'QOV2UpUWFHM',
//         playerVars: {
//             'mute': 1,
//             'loop': 1,
//             'playlist': 'QOV2UpUWFHM',
//             'autoplay': 1,
//             'showsearch': 0,
//             'cc_load_policy': 0,
//             'controls': 0,
//             'autohide': 1,
//             'disablekb': 0,
//             'rel': 0,
//         }, events: {
//             'onReady': function() {
//                 player.mute();
//                 player.playVideo();
//             },
//         }
//     });
// }
