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
window.addEventListener("scroll",function(){
    var height=document.documentElement.scrollTop|| window.pageYOffset || document.body.scrollTop;
    if(height>200){
        $('.collect_info').show();
    }else{
        $('.collect_info').hide();
    }
})

