/**
 * Created by Administrator on 2017/5/18.
 */
$(document).ready(function(){
    //单选
    $('.house_page_radio').on('click','.house_page_li',function(){
        var $this=$(this);
        if(!$this.hasClass('active')){
            $this.closest('.house_page_select').next('.house_page_error').hide();
            $this.addClass('active');
            $this.siblings().removeClass('active');
        }
    })
    //多选
    $('.house_page_checkbox').on('click','.house_page_li',function(){
        var $this=$(this);
        $this.toggleClass('active');
        if($this.closest('.house_page_checkbox').find('.house_page_li.active').length>0){
            $this.closest('.house_page_select').next('.house_page_error').hide();
        };
    })












































})