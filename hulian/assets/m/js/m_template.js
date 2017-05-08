/**
 * Created by Administrator on 2017/4/27.
 */
function phoneCheck($obj){
    var $div = $obj.closest("div");
    var uname = "", phone = "";
    var regPhone = /^1[3578]\d{9}$/;
    uname = $.trim($div.find("input[name='yname']").val());
    phone = $.trim($div.find("input[name='ytel']").val());
    if (uname == "") {
        $div.find(".err_tips").text("姓名不能为空");
        return false;
    }
    if (phone == '') {
        $div.find(".err_tips").text("手机号不能为空");
        return false;
    }
    if (!regPhone.test(phone)) {
        $div.find(".err_tips").text("请填写正确的手机号码");
        return false;
    }else {
        $div.find(".err_tips").text("");
    }
    $.ajax({
        type:'post',
        success:function(){
            console.log('success');
        },
        error:function(){
            console.log('error');
        }
    })
}
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    autoplay: 3000,
    pagination: '.swiper-pagination'
})
$('.top_menu').click(function(){
    if($('.slide_menu').css("display")=="none"){
        $('.slide_menu').show();
    }else{
        $('.slide_menu').hide();
    }
})
$('.top_menu').click(function(){
    $('.navs_wrap').show();
})
$('.close').click(function(){
    $('.navs_wrap').hide();
})



