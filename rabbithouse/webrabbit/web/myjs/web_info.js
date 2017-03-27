/*
 *  @description:pc端咨询页js
 *  @author:mengxuchen
 *  @update:mengxuchen (2017-03-27)
 */
$(function(){
    $('.header_box').load('../tpl/include/header.html',function(){
        main();  //头部选择类型切换
        submitPage();//tab 标签切换
        slide_help(); //返回顶部
        sign_area(); //页面达到一定高度。。。只显示收集信息框
    });
    $('.footer').load("../tpl/include/footer.html");
})