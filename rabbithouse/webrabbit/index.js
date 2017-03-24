/**
 * Created by Administrator on 2017/3/24.
 */

$(function(){
    submitPage();
})
 function submitPage(){
     //        tab 标签切换
     $('.sing_nav').on('click','p',function(){
         var $this=$(this);
         var $t=$this.index();
         var $p=$('.sing_nav p');
         var $content=$('.sing_con div');
         $p.removeClass('on');
         $this.addClass('on');
         $content.css('display','none');
         $content.eq($t).css('display','block');
     })
 }
    //        手机信息验证

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


