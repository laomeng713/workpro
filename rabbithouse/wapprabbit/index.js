/**
 * Created by Administrator on 2017/3/27.
 */
function f1(){
    var height=document.body.scrollTop;
    if(height>100){
        $('.text').show();
    }else{
        $('.text').hide();
    }
}
$(window).scroll(f1);
$('#click_more').on('click',function(){
    console.log($(window).height());
    $('.more_box').css("display","block");
    $('.more_box').css("height",$(window).height());
    $('.class_title').css("height",$(window).height());
    $(window).unbind('scroll',f1);

   $(window).scroll(function(){
       $(window).scrollTop(0);
   })

    $('.more_box').onclick =function(e){
        var target = e.target;
        var tc = target.className;
        if(tc.indexOf('div') ===-1){
            var tree = document.getElementsByTagName('div');
            for(var i=0;i<tree.length;i++){
                tree[i].style.display='none';
            }
        }
    }

})