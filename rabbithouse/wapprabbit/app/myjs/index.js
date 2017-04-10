/**
 * Created by Administrator on 2017/3/27.
 */


var scrollMoveCom = function (e) {
    e.preventDefault && e.preventDefault();
    e.returnValue = false;
    e.stopPropagation && e.stopPropagation();
    return false
};
//解除禁止屏幕滚动
function autoScrollCom() {
    var a = ["touchmove", "scroll", "mousewheel"];
    a.forEach(function (b) {
        document.removeEventListener(b, scrollMoveCom)
    })
}

//禁止屏幕滚动
function noScrollCom() {
    var a = ["touchmove", "scroll", "mousewheel"];
    a.forEach(function (b) {
        document.addEventListener(b, scrollMoveCom)
    })
}
//报名按钮显示判断
function f1() {
    var height = document.body.scrollTop;
    if (height > 100) {
        $('.text').show();
    } else {
        $('.text').hide();
    }
}
$(window).bind('scroll', f1);
//点击更多显示导航条
$('#click_more').click(function () {
    noScrollCom();
    $('.more_box').css("height", $(window).height());
    $('.more_box').show();
    mySwiper_v.reInit();
    mySwiper_h.reInit();
    var a = $(".class_detail ").css('height');
    var b = $(".class_detail ").css('width');
    $('.class_detail .swiper-wrapper').css("width", parseInt(b));

})
//点击空白隐藏导航条
$('.more_box').click(function () {
    $('.more_box').hide();
    autoScrollCom();
})
//导航轮播
var mySwiper_v = new Swiper('.class_detail', {
    mode: 'vertical',
    scrollContainer: true,
    freeMode: false,
    freeModeSticky: false
})
var mySwiper_h = new Swiper('.class_title', {
    mode: 'vertical',
    scrollContainer: true,
    freeMode: false,
    freeModeSticky: false
})
//tab标签
$(".class_title li").click(function (e) {
    e.stopPropagation();
    var index=$(this).index();
    $(this).addClass('more_cur').siblings('li').removeClass('more_cur');
    $('.class_detail ul').removeClass('cur').eq(index).addClass('cur');
    mySwiper_h.reInit();
    mySwiper_v.reInit();
    mySwiper_v.swipeTo(0);

})
//手机信息收集
$('.text_left').on('click', function () {
    $('.text_forml').show();
    $('.text_left').hide();
    $('.text_right').hide();
    $('.text_form').css("height", document.body.clientHeight);
})
$('.text_right').on('click', function () {
    $('.text_formr').show();
    $('.text_left').hide();
    $('.text_right').hide();
})
$('.close').on('click', function () {
    $('.text_form').hide();
    $('.text_left').show();
    $('.text_right').show();
})
function errorCheck($obj, num) {
    var $div = $obj.closest("div");
    var meter = "", phone = '';
    var uname = "";
    var regPhone = /^1[3578]\d{9}$/;
    if (num == 1) {
        uname = $.trim($div.find(".name").val());
        phone = $.trim($div.find(".phone").val());
        if (uname == "") {
            $div.find(".err").text('姓名不能为空');
            return false;
        } else {
            meter = parseInt(meter);
        }
        if (phone == "") {
            $div.find(".count").text('手机号不能为空');
            return false;
        }
        if (!regPhone.test(phone)) {
            $div.find(".count").text('请填写正确的手机号码');
            return false;
        } else {
            $div.find(".count").text('');
        }
        $.ajax({
            type: "post",
            success: function () {
                console.log('succcess');
            },
            error: function () {
                console.log('error');
            }
        })
    }
    if (num == 2) {
        meter = $.trim($div.find(".meter").val());
        phone = $.trim($div.find(".phone").val());
        if (meter == "") {
            $div.find(".err").text('面积不能为空');
            return false;
        } else {
            meter = parseInt(meter);
        }
        if (phone == "") {
            $div.find(".count").text('手机号不能为空');
            return false;
        }
        if (!regPhone.test(phone)) {
            $div.find(".count").text('请填写正确的手机号码');
            return false;
        } else {
            $div.find(".count").text('');
        }
        $.ajax({
            type: "post",
            success: function () {
                console.log('succcess');
            },
            error: function () {
                console.log('error');
            }
        })
    }

}



