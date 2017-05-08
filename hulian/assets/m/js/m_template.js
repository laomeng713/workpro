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

//在线预约服务
$('.order_style li').click(function(){
    var index=$(this).index();
    $('.order_style').hide();
    $('.order_form').show();
    $('.order_form .order_price').eq(index).show();
})
$('.order_price label').click(function(){
    $(this).children().css('opacity','1');
    $(this).siblings('input').prop('checked','true');
    $(this).parent().siblings('li').children('label').children('i').css('opacity','0');
})
$('.order_pre').click(function(){
    $('.order_form').hide();
    $('.order_form .order_price').hide();
    $('.order_style').show();
})
function errCheck($obj){
    var $div = $obj.closest("div");
    var uname = "", phone = "",address='',message='';
    var regPhone = /^1[3578]\d{9}$/;
    uname = $.trim($div.find("input[name='uname']").val());
    phone = $.trim($div.find("input[name='phone']").val());
    address = $.trim($div.find("input[name='address']").val());
    message = $div.find("[name='message']").val();
    console.log(message);
    if(!$('.order_price input').is(':checked')){
        $div.find(".err_tips").text("请选择价格");
        return false;
    }
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
    }
    if (address == "") {
        $div.find(".err_tips").text("地址不能为空");
        return false;
    }
    if (message == "") {
        $div.find(".err_tips").text("留言不能为空");
        return false;
    }else{
        $div.find(".err_tips").text("");
    }
    $.ajax({
        type:'post',
        success:function(){
            console.log('success');
            $('.order_form').hide();
            $('.success_info').show();

        },
        error:function(){
            console.log('error');
        }
    })
}