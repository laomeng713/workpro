/**
 * Created by Administrator on 2017/4/26.
 */
var mySwiper = new Swiper('.swiper-container1',{
    pagination : '.swiper-pagination',
    autoplay : 5000,
    paginationClickable :true,
    direction: 'horizontal',
    autoHeight: true
})
var mySwiper = new Swiper('.chinacon',{
//    slidesPerGroup : 4,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    loop : true,
    slidesPerView : 'auto',
    loopedSlides :4,
    loopAdditionalSlides : 1,
//    spaceBetween : 20

})
function phoneCheck($obj){ 
    var $div = $obj.closest("div");
    var uname = "", phone = "",address='',message='',time='';
    var regPhone = /^1[3578]\d{9}$/;
    uname = $.trim($div.find("input[name='uname']").val());
    sort = $.trim($div.find("input[name='sort']").val());
    phone = $.trim($div.find("input[name='phone']").val());
    address = $.trim($div.find("input[name='address']").val());
    message = $div.find("[name='message']").val();
    time=$( "#date_time" ).datepicker( "getDate" );
    console.log(time);
    console.log(message);
    if(time==null){
        $div.find(".err_tips").text("请选择日期");
        return false;
    }
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

    var $data = {
        'name': uname,
        'city_code': 'beijing',
        'sort': sort,
        'mobile': phone,
        'address': address,
        'content': message,
        '_csrf': $("#_csrf").val(),
    };
    $.ajax({
        type: 'POST',
        data: $data,
        url: window.signupUrl,// + '/jz-signup.html',
        dataType: "json",
        success:function(data){
            if(data.status != 200){
                $('.err_tips').text(data.message);
                $('.err_tips').show();
            } else {
            console.log('success');
                $('.err_tips').hide();
            $('.order_form').hide();
            $('.success_info').show();
            $('.step_detail span').removeClass('active');
            $('.step_detail span').eq(2).addClass('active');
            }
        },
        error:function(){
            console.log('error');
        }
    })
}
$(window).bind('scroll',autoScroll);
$(window).bind('scroll',slide_help);
$(window).bind('scroll',fixedNav);

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
    if(height>100){
        $('.topnav').addClass('fix');
        $('.hot_phone').show();
    }else{
        $('.topnav').removeClass('fix');
        $('.hot_phone').hide();
    }
}

$('.order_style li').click(function(){
    var index=$(this).index();
    $(this).addClass('data-checked');
    $('.order_style').hide();
    $('.order_form').show();
    $('.step_detail span').removeClass('active');
    $('.step_detail span').eq(1).addClass('active');
    $('.order_form .order_price').hide();
    $('.order_form .order_price').eq(index).show();


})
$('.order_price label').click(function(){
  $(this).children().css('opacity','1');
   $(this).siblings('input').prop('checked','true');
  $(this).parent().siblings('li').children('label').children('i').css('opacity','0');
})
$('.order_pre').click(function(){
    $('.order_form').hide();
    $('.order_style').show();
    $('.step_detail span').removeClass('active');
    $('.step_detail span').eq(0).addClass('active');
})

