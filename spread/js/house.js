/**
 * Created by Administrator on 2017/5/18.
 */


$(document).ready(function () {
    //单选
    $('.house_page_radio').on('click', '.house_page_li', function () {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.closest('.house_page_select').next('.house_page_error').hide();
            $this.addClass('active');
            $this.siblings().removeClass('active');
        }
    })
    //多选
    $('.house_page_checkbox').on('click', '.house_page_li', function () {
        var $this = $(this);
        $this.toggleClass('active');
        if ($this.closest('.house_page_checkbox').find('.house_page_li.active').length > 0) {
            $this.closest('.house_page_select').next('.house_page_error').hide();
        }
        ;
    })
//点击第一步的下一步按钮
    $('.house_home').on('click', '.page_next', function () {
        var $this = $(this);
        var $ul = $this.closest('.house_home').find('.house_page_select');
        var $actiLi = $ul.find('.house_page_li.active');
        if ($actiLi.length > 0) {
            //将ul赋值给隐藏form
            var ulName=$ul.attr('data-name');
            var ulValue=$actiLi.attr('data-value');
            $('#house_page_form').find('input[name='+ulName+']').val(ulValue);
            $ul.next('.house_page_error').hide();
            var $inputDom=$('.house_home').find('.house_page_input_num');
            var inputType=$inputDom.attr('name');
            var inputValue=$inputDom.val();
            var errorDom=$('.house_home').find('.house_page_input').next('.house_page_error');
            if(!inputValue){
                errorDom.show();
                return;
            }else{
                    var arrArea=$('#myAddrs').val().split(' ');
                $('#house_page_form').find('input[name="sheng"]').val(arrArea[0]);
                $('#house_page_form').find('input[name="city"]').val(arrArea[1]);
                $('#house_page_form').find('input[name='+inputType+']').val(inputValue);
                $('.house_page_error').hide();
                //已经选择房屋类型
                if ($actiLi.attr('data-value') ==='新房装修') {//新房装修
                    $('.house_home').hide();
                    $('.house_huxing').show();
                } else {//老房装修
                    $('.house_home').hide();
                    $('.house_remould').show();
                }
            }


        } else {
            $ul.next('.house_page_error').show();
        }
    })
    //面积验证方法
    function checkSqare(inputValue, errorDom){
        if (inputValue == "" || inputValue == undefined || inputValue == null) {
            errorDom.show();
            return false;
        }
        if (inputValue<5) {
            errorDom.text('*房屋面积必须大于等于5').show();
            return false;
        }else{
            return true;
        }

    };
    //获取表单数据转成对象kv值
    FormToJSON = function(formName) {
        var data = $(formName).serializeArray();
        var dataObj = {};
        for (var i in data) {
            dataObj[data[i].name] = data[i].value;
        }
        if (dataObj.t8taddress) {
            var addr = dataObj.t8taddress.split(' ');
            dataObj.shen = addr[0];
            dataObj.city = addr[1];
            delete dataObj.t8taddress;
        };
        return dataObj;
    }
    //新户型装修的下一步
    $('.house_huxing').on('click', '.page_next', function () {
        var $this = $(this);
        var $ul = $this.closest('.house_huxing').find('.house_page_select');
        var $actiLi = $ul.find('.house_page_li.active');
        var $input = $this.closest('.house_huxing').find('.house_page_input');
        var $inputDom = $this.closest('.house_huxing').find('.house_page_input_num');
        if ($actiLi.length > 0) { //已经选择户型
            //将ul赋值给隐藏form
            var ulName=$ul.attr('data-name').split('-');
            var ulNameShi=ulName[0];
            var ulNameTing=ulName[1];
            var ulValue=$actiLi.attr('data-value').split('-');
            var ulValueShi=ulValue[0];
            var ulValueTing=ulValue[1];
            $('#house_page_form').find('input[name='+ulNameShi+']').val(ulValueShi);
            $('#house_page_form').find('input[name='+ulNameTing+']').val(ulValueTing);
            $ul.next('.house_page_error').hide();
            var inputType=$inputDom.attr('name');
            var inputValue = $inputDom.val();
            var errorDom = $input.next('.house_page_error');
            //验证面积
            var checkSqare1=checkSqare(inputValue, errorDom);
            if(!checkSqare1){//信息填写不完整
                return;
            }else{//信息填写正确且完整
                $('#house_page_form').find('input[name='+inputType+']').val(inputValue);
                $('.house_page_error').hide();
                $('.house_huxing').hide();
                $('.house_style').show();
            }

        } else {
            $ul.next('.house_page_error').show();
        }
    })
    //老房改造的下一步
    $('.house_remould').on('click', '.page_next', function () {
        var $this = $(this);
        var $ul = $this.closest('.house_remould').find('.house_page_select');
        var $actiLi = $ul.find('.house_page_li.active');

        var $input = $this.closest('.house_remould').find('.house_page_input');
        var $inputDom = $this.closest('.house_remould').find('.house_page_input_num');
        if ($actiLi.length > 0) { //已经选择户型
            //将ul赋值给隐藏form
            var ulName=$ul.attr('data-name');
            var ulValue=$actiLi.attr('data-value');
            $('#house_page_form').find('input[name='+ulName+']').val(ulValue);
            var inputType=$inputDom.attr('name');
            var inputValue = $inputDom.val();
            var errorDom = $input.next('.house_page_error');
            //验证面积
            var checkSqare1=checkSqare(inputValue, errorDom);
            if(!checkSqare1){//信息填写不完整
                return;
            }else{//信息填写正确且完整
                $('#house_page_form').find('input[name='+inputType+']').val(inputValue);
                if(ulValue==='1'){//旧房整改
                    $('.house_remould').hide();
                    $('.house_style').show();
                }else{//局部改造
                    $('.house_remould').hide();
                    $('.house_area').show();
                }
            }
        } else {
            $ul.next('.house_page_error').show();
        }
    })
    //计算按钮
    $('.house_count').on('click','.house_page_next_submit',function(){
        var $this = $(this);
        var $page=$this.closest('.house_page');
        var $ul = $this.closest('.house_count').find('.house_page_select');
        var $actiLi = $ul.find('.house_page_li.active');
        var $input = $this.closest('.house_count').find('.house_page_input');
        var $inputDom = $this.closest('.house_count').find('.house_page_input_num');
        if($actiLi.length > 0){
            //将ul赋值给隐藏form
            var ulName=$ul.attr('data-name');
            var ulValue=$actiLi.attr('data-value');
            $('#house_page_form').find('input[name='+ulName+']').val(ulValue);
            var inputType=$inputDom.attr('name');
            var inputValue = $inputDom.val();
            var errorDom = $input.next('.house_page_error');
            var  telRegexp=/^(1[3|4|5|7|8])[\d]{9}$/;
            if(!inputValue){
                errorDom.text('*你还没有输入手机号码').show();
                return;
            }else if(!telRegexp.test(inputValue)){
                errorDom.text('*请填写正确的手机号码').show();
                return;
            }else{
                //信息填写正确且完整  input值填 from表单
                $('#house_page_form').find('input[name='+inputType+']').val(inputValue);
                $('.house_page_error').hide();
                $page.hide();
                $('.house_main').find('.house_animation').show();
                //拿到表单值
                var $formDom=$('#house_page_form');
                var senData= FormToJSON($formDom);
                console.log(senData);

                //定时器
                setTimeout(function(){
                    $('.house_main').find('.house_animation').hide();
                    $('.house_main').find('.page_list').show();
                },2000);

            }
        }
    })

    //上一步
    $('.house_page_btn').on('click','.page_prev',function(){
        var $this=$(this);
        var $page=$this.closest('.house_page');
        var previousPageString='.house_home';
        $page.hide();
        $('.page_footer_go').hide();
        $('.page_footer_back').show();
        $('.house_main').find(previousPageString).show();
    })
})