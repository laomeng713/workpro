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
            //已经选择房屋类型
            if ($actiLi.attr('data-value') == 1) {//新房装修
                $('.house_home').hide();
                $('.house_huxing').show();
            } else {//老房装修
                $('.house_home').hide();
                $('.house_remould').show();
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
            errorDom.text('*房屋面积必须大于等于5');
            return false;
        }else{
            return true;
        }

    };
    //新户型装修的下一步
    $('.house_huxing').on('click', '.page_next', function () {
        var $this = $(this);
        var $ul = $this.closest('.house_huxing').find('.house_page_select');
        var $actiLi = $ul.find('.house_page_li.active');
        var $input = $this.closest('.house_huxing').find('.house_page_input');
        var $inputDom = $this.closest('.house_huxing').find('.house_page_input_meter');
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
            var inputType=$inputDom.attr('name');
            var inputValue = $inputDom.val();
            var errorDom = $input.next('.house_page_error');
            var checkSqare1=checkSqare(inputValue, errorDom);
            if(!checkSqare1){//信息填写不完整
                return;
            }else{//信息填写正确且完整
                $('#house_page_form').find('input[name='+inputType+']').val(inputValue);
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
        var $inputDom = $this.closest('.house_remould').find('.house_page_input_meter');
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
                $('.house_remould').hide();
                $('.house_area').show();
            }


        } else {
            $ul.next('.house_page_error').show();
        }
    })

})