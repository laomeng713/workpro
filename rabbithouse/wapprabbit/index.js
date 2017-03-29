/**
 * Created by Administrator on 2017/3/27.
 */
$('#click_more').on('click',function(){
    console.log($(window).height());
    $('.more_box').css("display","block");
    $('.more_box').css("height",$(window).height());
})