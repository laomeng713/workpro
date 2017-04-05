/*
 *  @description:pc端问答页js
 *  @author:mengxuchen
 *  @update:mengxuchen (2017-03-27)
 */
$(function(){
        main();  //头部选择类型切换
        submitPage();//tab 标签切换
        slide_help(); //返回顶部
        sign_area(); //页面达到一定高度。。。只显示收集信息框

    $('.ask_tab_hd li').click(function(){
        var index=$(this).index();
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".tab_content p").removeClass("in").eq(index).addClass("in");
    })
})