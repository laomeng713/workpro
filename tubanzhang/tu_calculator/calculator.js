/**
 * Created by Administrator on 2017/3/17.
 */
$(function(){

    //错误提示
    function errTip(str){
        var $errTip=$('.err_phone');
        $errTip.text(str);
    }

    function meterCheck(meter){
        if(meter==''){
            $('.err_meter').text('面积不能为空');
            return false;
        }else{
            $('.err_meter').text('');
            return true;
        }
    }
    //手机号码
    function phoneCheck(phone){
        var regPhone=/^1[3578]\d{9}$/;
            if(phone==''){
                errTip('手机号不能为空');
                return false;
            }else if(!regPhone.test(phone)){//手机号码不正确
                errTip('请填写正确的手机号码');
                return false;
            }else{
                errTip('');
                return true;
            }
    }

    //点击事件
    $('.action').on('click',function(event){
        var meter=$.trim($('.meter').val());
        var phone=$.trim($('.phone').val());
        var regmeter=meterCheck(meter);
        var regphone=phoneCheck(phone);
        if(regmeter&&regphone){
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
    })

})