/**
 * Created by Administrator on 2017/4/26.
 */
var mySwiper = new Swiper('.swiper-container',{
    pagination : '.swiper-pagination',
    autoplay : 5000,
    paginationClickable :true
})
function phoneCheck($obj){
    var $form = $obj.closest("form");
    var uname = "", phone = "";
    var regPhone = /^1[3578]\d{9}$/;
    uname = $.trim($form.find("input[name='uname']").val());
    phone = $.trim($form.find("input[name='phone']").val());
    if (uname == "") {
        $form.find(".err_tips").text("姓名不能为空");
        return false;
    }
    if (phone == '') {
        $form.find(".err_tips").text("手机号不能为空");
        return false;
    }
    if (!regPhone.test(phone)) {
        $form.find(".err_tips").text("请填写正确的手机号码");
        return false;
    }else {
        $form.find(".err_tips").text("");
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
$(window).bind('scroll',autoScroll);
$(window).bind('scroll',slide_help);
$(window).bind('scroll',fixedNav);
//$(window).bind('scroll',giftInfo);
function  autoScroll(){
    var height=document.documentElement.scrollTop|| window.pageYOffset || document.body.scrollTop;
    if(height>200){
        $('.collect_info').show();
    }else{
        $('.collect_info').hide();
    }
}
//返回顶部
function slide_help(){
        var height=document.documentElement.scrollTop|| window.pageYOffset || document.body.scrollTop;
        if(height>400){
            $('.slide_help').show();
        }else{
            $('.slide_help').hide();
        }
}
function fixedNav(){
    var height=document.documentElement.scrollTop|| window.pageYOffset || document.body.scrollTop;
    console.log(height);
    if(height>100){
        $('.topnav').addClass('fix');
        $('.hot_phone').show();
    }else{
        $('.topnav').removeClass('fix');
        $('.hot_phone').hide();
    }
}
//function giftInfo(){
//    var height=document.documentElement.scrollTop|| window.pageYOffset || document.body.scrollTop;
//    var height1=parseFloat(height/9);
//    console.log(height);
//    //if(height<200){
//    //    $('.about_gift').css('top','300px');
//    //
//    //}else{
//    //
//    //}
//    $('.about_gift').css('top',height1);
//}
//$('.close').click(function(){
//    $('.collect_info').fadeOut();
//    $('.slide_show').fadeIn();
//    $(window).unbind('scroll',autoScroll);
//
//})
//$('body').mousewheel(function(event,delta){
//    console.log(delta);
//    var top=parseInt($('.about_gift').css('top'));
//    if (delta == 1) { //鼠标向上滚delta=1，
//        top--;
//        $('.about_gift').css('top',top);
//
//    }
//    if (delta == -1) {//鼠标向下滚delta=-1
//       top++;
//        $('.about_gift').css('top',top);
//    }
//})

