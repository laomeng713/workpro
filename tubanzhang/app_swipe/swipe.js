/**
 * Created by Administrator on 2017/3/16.
 */
$(function(){
    submitPage();

});
function submitPage(){
    var phone1,phone1,name,meter;
    $('.header_return').on('click',function(){
        //跳到上一页面
        history.go(-1);
    })

    $('.text_left').on('click',function(){
        $('.text_forml').show();
        $('.text_left').hide();
        $('.text_right').hide();
    })
    $('.text_right').on('click',function(){
        $('.text_formr').show();
        $('.text_left').hide();
        $('.text_right').hide();
    })
    $('.close').on('click',function(){
        $('.text_form').hide();
        $('.text_left').show();
        $('.text_right').show();
    })

    ////点击图片显示隐藏文字

    $('.text_change').on('click',function(){
        if($(".text_contain").css("display")=="none"){
            $(".text_contain").show();
            $(".text_change").css({"background":"url('img/change.png') 0 -30px no-repeat","background-size": "100% auto"});

        }else{
            $(".text_contain").hide();
            $(".text_change").css({"background":"url('img/change.png') 0 0 no-repeat","background-size": "100% auto"});

        }
    })

    //点击更多 显示...的文字

    $('.text_more').on('click',function(){
        $('.text_ell').css({"white-space":"normal"});
        $('.text_more').css({"display":"none"});
    })
    ///***手机信息验证*****/
    function errTip(str){
        var $errtip=$('.count');
        $errtip.text(str);
    }
    //姓名验证
    function nameCheck(name){
        if(name==''){//姓名为空
            $('.name').siblings('i').text('姓名不能为空');
            return false;
        }else{
            $('.name').siblings('i').text('');
            return true;
        }
    }
    //面积验证
    function meterCheck(meter){
        if(meter==''){
            errTip('面积不能为空');
            return false;
        }else{
            errTip('');
            return true;
        }
    }
    //手机号验证

    function phoneCheck(phone){
        var regPhone=/^1[3578]\d{9}$/;
        if(phone==''){//为空
            errTip('手机号不能为空');
            return false;
        }else if(!regPhone.test(phone)){//格式不正确
            errTip('请输入正确的手机号码');
            return false;
        }else{
            errTip('');
            return true;
        }
    }

    $('.reset_order').on('click',function(event){
        var name=$.trim($('.name').val());
        var phone=$.trim($('.phone').val());
        var regname=nameCheck(name);
        var regphone=phoneCheck(phone);
        if(regname&&regphone){
            $.ajax({
                type:'post',
                success:function(){
                    $('.count').css({"display":"none"});
                    $('.err').css({"display":"none"});
                    console.log('success');
                },
                error:function(){
                    console.log('error');
                }
            })
        }

    })

    $('.reset_price').on('click',function(){
        var meter=$.trim($('.meter').val());
        var phone=$.trim($('.phone').val());
        var regmeter=meterCheck(meter);
        var regphone=phoneCheck(phone);
        if(regmeter&&regphone){
            $.ajax({
                type:'post',
                success:function(){
                    $('.count').css({"display":"none"});
                    $('.err').css({"display":"none"});
                    console.log('success');
                },
                error:function(){
                    console.log('error');
                }
            })
        }
    })


}