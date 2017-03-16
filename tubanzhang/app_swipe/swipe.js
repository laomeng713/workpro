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
    $('.header_search').on('click',function(){
        //跳转到搜索页面
        location.href="search.html";
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

    $('.name').blur(nameCheck);
    $('.phone1').blur(phone1Check);
    $('.phone2').blur(phone2Check);
    $('.meter').blur(meterCheck);
    function nameCheck(){
        name=$.trim($('.name').val());
        console.log(name);
        var $nameEm=$('.name').siblings('i');
        if(!name){//姓名为空
            $nameEm.text('姓名不能为空');
            return false;
        }else{
            $nameEm.text('');
            return true;
        }
    }

    function phone1Check(){
        phone1=$.trim($('.phone1').val());
        console.log(phone1);
        var $phoneEm=$('.phone1').siblings('em');
        var regPhone=/^1[3578]\d{9}$/;
        if(!phone1){//为空
            $phoneEm.text('手机号不能为空');
            return false;
        }else if(!regPhone.test(phone1)){//格式不正确
            $phoneEm.text('请输入正确的手机号码');
            return false;
        }else{
            $phoneEm.text('');
            return true;
        }
    }
    function phone2Check(){
        phone2=$.trim($('.phone2').val());
        console.log(phone2);
        var $phoneEm=$('.phone2').siblings('em');
        var regPhone=/^1[3578]\d{9}$/;
        if(!phone2){//为空
            $phoneEm.text('手机号不能为空');
            return false;
        }else if(!regPhone.test(phone2)){//格式不正确
            $phoneEm.text('请输入正确的手机号码');
            return false;
        }else{
            $phoneEm.text('');
            return true;
        }
    }


    function meterCheck(){
        meter=$.trim($('.meter').val());
        console.log(meter);
        var $meterEm=$('.meter').siblings('i');
        if(!meter){//面积为空
            $meterEm.text('面积不能为空');
            return false;
        }else{
            $meterEm.text('');
            return true;
        }

    }
    $('.reset').click(function(){
        var remeter=meterCheck();
        var reuname=nameCheck();
        var rephone1=phone1Check();
        var rephone2=phone2Check();
        if(reuname&&rephone1||remeter&&rephone2){
            $.ajax({
                type:'post',
                success:function(){
                    console.log('恭喜您已经预约');
                }
            })
        }
    })
}