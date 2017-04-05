/*
 *  @description:pc端常用主函数（返回顶部、手机信息验证、）
 *  @author:mengxuchen
 *  @update:mengxuchen (2017-03-27)
 */
//************pc端常用主函数*******************

//头部选择类型切换
function main(){
    $('.logo_select').mouseover(function(){
        $('.logo_list').show();
        $('.icon_arrows').css("transform","rotate(180deg)");
    }).mouseout(function(){
        $('.logo_list').hide();
        $('.icon_arrows').css("transform","rotate(360deg)");
    })
    $('.logo_list').on('click','li',function(e){
        e.preventDefault();
        var a=$(this);
        console.log(a);
        var t= a.index();
        console.log(t);
        var b=a[a.length-1].innerText;
        console.log(b);
        $('#logo_text')[$('#logo_text').length-1].innerHTML=b;
        if(t==0){
            $('.logo_input').attr('placeholder','挑选您心仪的装修公司')
        }
        if(t==1){
            $('.logo_input').attr('placeholder','解决您的装修疑问')
        }
        $('.logo_list').hide();
    })
}
//tab 标签切换
function submitPage(){
    $('.sing_nav').on('click','p',function(){
        var $this=$(this);
        var $t=$this.index();
        console.log($t);
        var $p=$('.sing_nav p');
        var $content=$('.sing_con div');
        $p.removeClass('on');
        $this.addClass('on');
        $content.css('display','none');
        $content.eq($t).css('display','block');
    });
}
// 手机信息验证

//单独一个手机号码验证
    function phoneCheck($obj){
        $input=$obj.closest("input");
        var mobile= $.trim($('.lucy_phone').val());
        console.log(mobile);
        var regPhone = /^1[3578]\d{9}$/;
        if(mobile==''){
            $('.lucy_err').text('手机号不能为空');
            return false;
        }
        if(!regPhone.test(mobile)) {
            $('.lucy_err').text('请填写正确的手机号码');
            return false;
        }else{
            $('.lucy_err').text('');
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

//两个表单同时验证
    function errorCheck($obj, num) {
        var $p=$obj.closest("p");
        var meter = "",phone='';
        var regPhone = /^1[3578]\d{9}$/;
        if (num == 2) {
            meter= $.trim($p.find('.meter').val());
            phone = $.trim($p.find('.phone').val());
                if (meter=='') {
                    $p.find('.sing_err').text('面积不能为空');
                    return false;
                } else {
                    meter=parseInt(meter);
                }
                if(phone==''){
                    $p.find('.sing_err').text('手机号不能为空');
                    return false;
                }
                if(!regPhone.test(phone)) {
                    $p.find('.sing_err').text('请填写正确的手机号码');
                    return false;
                }else{
                    $p.find('.sing_err').text('');
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
        if (num == 1) {
            meter= $.trim($p.find('.meter').val());
            phone = $.trim($p.find('.phone').val());
                if (meter=='') {
                    $p.find('.sing_err').text('面积不能为空');
                    return false;
                } else {
                    meter=parseInt(meter);
                }

                if(phone==''){
                    $p.find('.sing_err').text('手机号不能为空');
                    return false;
                }
                if (!regPhone.test(phone)) {
                    $p.find('.sing_err').text('请填写正确的手机号码');
                    return false;
                }else{
                    $p.find('.sing_err').text('');
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
    }


///页面达到一定高度。。。只显示收集信息框
function sign_area(){
    window.addEventListener("scroll",function(){
        var height=document.documentElement.scrollTop;
        if(height>1700){
            $('.left_show').hide();
            $('.news_signup').addClass('signup_position');
        }else{
            $('.left_show').show();
            $('.news_signup').removeClass('signup_position');
        }
    })
}


//返回顶部
function slide_help(){
    window.addEventListener("scroll",function(){
        var height=document.documentElement.scrollTop;
        if(height>400){
            $('.slide_help').show();
        }else{
            $('.slide_help').hide();
        }
    })
}
