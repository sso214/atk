$(document).ready(function(){
    $(".lang button").on('click', function(){
        $(".lang-list").toggleClass('on');
    });
    $('html').click(function(e) {
        if($(e.target).parents('.lang-button').length < 1 && !$(e.target).hasClass('lang-button')){
            $(".lang-list").removeClass('on');
        }
    });

    function getLangSrc(target) {
        target.attr('src', `img/${$('#meta-lang').attr('content')}/${target.data('img')}`);
    }
    $(".lang-list li").on('click', function(){
        var name = $(this).text();
        var lang = $(this).data('key');
        var isLangKo = lang === 'ko';

        $(".lang button span").text(name);
        $('#meta-lang').attr('content', lang);

        getLangSrc($('.title'));
        getLangSrc($('.input-form'));
        getLangSrc($('.guide01'));
        getLangSrc($('.guide-button'));
        getLangSrc($('.hidden-guide'));

        $('#uid').attr('placeholder', isLangKo ? 'UID를 입력해주세요' : 'Please enter your UID');
        $('#coupon').attr('placeholder', isLangKo ? '쿠폰번호를 입력해주세요' : 'Please enter your coupon number');

        getLangSrc($('.pop.empty-uid img'));
        getLangSrc($('.pop.empty-coupon img'));
        getLangSrc($('.pop.not-match-uid img'));
        getLangSrc($('.pop.not-match-coupon img'));
        getLangSrc($('.pop.over-count img'));
        getLangSrc($('.pop.already-coupon img'));
        getLangSrc($('.pop.not-duplicate-use img'));
        getLangSrc($('.pop.expiration img'));
        getLangSrc($('.pop.success img'));
    });

    var popBlack = $("#pop-black");
    if (popBlack) {
        var pop = $(".pop");
        var popOpen = $(".pop-btn");

        popOpen.on('click', function () {
            var dataKey = $(this).data('key');
            $(".pop." + dataKey).addClass('on');
            popBlack.addClass('on');
        });

        $('#pop-black').on('click', '.pop-close', function() {
            pop.removeClass('on');
            popBlack.removeClass('on');
        })

        popBlack.on('click', function (e) {
            if (e.target.id == "pop-black") {
                pop.removeClass('on');
                popBlack.removeClass('on');
            }
        });
    }


    function popOpenEvt(popName){
        $(`.pop.` + popName).addClass('on');
        $("#pop-black").addClass('on');
    }

    $('.input-box button').on('click', function () {
        var regExpUid = /[0-9]/;
        var regExpCoupon = /[0-9]/;

        if (!$('input#uid').val()) return popOpenEvt('empty-uid');
        if (!$('input#coupon').val()) return popOpenEvt('empty-coupon');
        if (!regExpUid.test($("input#uid").val())) return popOpenEvt('not-match-uid');
        if (!regExpCoupon.test($("input#coupon").val())) return popOpenEvt('not-match-coupon');
        // if (쿠폰 사용 횟수 초과 시) return popOpenEvt('over-count');
        // if (이미 등록된 쿠폰일 시) return popOpenEvt('already-coupon');
        // if (중복 사용 쿠폰일 시) return popOpenEvt('not-duplicate-use');
        // if (기간 만료 쿠폰일 시) return popOpenEvt('expiration');
        popOpenEvt('success');
    });

    $(".guide-button").on('click', function (){
       $('.hidden-guide').stop().slideToggle(200);
    });
});
