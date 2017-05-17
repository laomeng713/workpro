/**
 * Created by Administrator on 2017/5/17.
 */
$(function(){
    //表单验证
    $.each(province, function (k, p) {
        var option = "<option value='" + p.ProID + "'>" + p.ProName + "</option>";
        $("#selProvince0,#selProvince1,#selProvince2").append(option);
    });
    $("#selProvince0,#selProvince1,#selProvince2").change(function () {
        var selValue = $(this).val();
        $("#selCity0,#selCity1,#selCity2").html('');
        $("#selCity0 option:gt(0),#selCity1 option:gt(0)").remove();
        $.each(city, function (k, p) {
            if (p.ProID == selValue) {
                var option = "<option value='" + p.CityID+ "'>" + p.CityName + "</option>";
                $("#selCity0,#selCity1,#selCity2").append(option);
            }
        });
    });
    //ip默认地址
    if(typeof local_ip !='undefined'){
        (function getAdress(){
            $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip='+local_ip, function(data){
                var PrID=null;
                if(remote_ip_info.ret == '1' && remote_ip_info.province!=''){
                    $.each(province, function (k, p) {
                        if (p.ProName.substr(0,2) == remote_ip_info.province.substr(0,2)){
                            PrID= p.ProID;
                            $("#selProvince0,#selProvince1").find("option").eq(k).prop("selected",true);
                            $.each(city, function (k, p) {
                                if (p.ProID == PrID) {
                                    var option = "<option value='" + p.CityID+ "'>" + p.CityName + "</option>";
                                    $("#selCity0,#selCity1").append(option);
                                }
                            });
                        }
                    });
                    if(remote_ip_info.city!=''){
                        $.each(city, function (k, p) {
                            if (p.CityName.substr(0,2) == remote_ip_info.city.substr(0,2)){
                                $("#selCity0,#selCity1").find("option").eq(k).prop("selected",true);
                            }
                        });
                    }
                }
            });
        }());
    }

    /*模拟select下拉框效果在ip默认地址的值  限制性在于必须要用selectMask这个类*/
    $("select").each(function() {
        var $selectText = $(this).children("option:selected").text();
        $(this).parent().find(".selectMask").text($selectText);
    });

    /*输入框默认value值*/
    $("input[type=text]").each(function(){  //表单文本输入框聚焦判断
        var textValue=this.defaultValue;
        $(this).data("value",this.defaultValue);
        $(this).bind({
            focus:function(){
                if($(this).val()==textValue){
                    $(this).val("").css("color","#000");
                }
            },
            blur:function(){
                if($(this).val()==""){
                    $(this).val(textValue).css("color","");
                }
            }
        })
    })
    //弹出报名框
    $('.tckbg').css({'width':$(document.body).outerWidth(true),'height':$(document.body).outerHeight(true)});
    $('.show_img').click(function(){
        Hide(".show_bg,.close");
        Show(".tckbg,.sqk_alert");
    });
    $('.alert').click(function(){
        Show(".tckbg,.sqk_alert");
    });
    $('.close,.sqk_alert_close').click(function(){
        Hide(".tckbg,.sqk_alert,.show_bg,.close");
    });
    //设计服务弹出框
    dialogCookie();
    $(".des_close, .later").click(function(){
        $("div.des_dialog").animate({right:-250+'px'},800,function(){
            $(this).hide();
        });
    });
    var dtimer=null;
    function desDialog(time){
        dtimer=setTimeout(function(){
            $(".des_dialog").fadeIn();
        },1000*15*time)
    }
    function cleanDialog(){
        clearTimeout(dtimer);
    }
    //主页30秒后弹出，其它页面5分钟后弹出（整站一次会话只弹一次）
    function dialogCookie(){
        dianame=getCookie('dialogName');
        if (dianame!=null && dianame!="")//当弹出一次之后就不再弹出
        {
            cleanDialog();
        }
        else
        {
            setCookie('dialogName','logpass');//第一次弹出
            desDialog(1);//主页
        }
    }

});

//表单验证(有需求模块)
function validation0(item){
    var selpro=$('#selProvince'+item);
    var selcity=$('#selCity'+item);
    var tipshow=$('#tip_show'+item);
    var name=$('#app_name'+item).val();
    var tel=$('#app_tel'+item).val();
    var pro=selpro.find("option:selected").text();
    var city=selcity.find("option:selected").text();
    var other=$('#app_other'+item).val();
    var pattern=/^[\u4e00-\u9fa5 a-zA-Z0-9]{2,}$/;     //验证姓名不可输入特殊字符 且至少包含2位
    if(!pattern.test(name)){
        tipshow.text('亲,姓名格式有误。');
        return false;
    }
    if(name==''||name=='您的姓名'){
        tipshow.text('亲,姓名必须填写。');
        return false;
    }
    pattern=/(^((\+?86)|(\(\+86\)))?\d{3,4}-{1}\d{7,8}(-{0,1}\d{3,4})?$)|(^((\+?86)|(\(\+86\)))?1\d{10}$)/;
    if(!pattern.test(tel)){
        tipshow.text('亲,手机号码错了哦。');
        return false;
    }
    if(selpro.find("option:selected").val()==0||selpro.find("option:selected").val()==''){
        tipshow.text('亲，省份未填写哦！');
        return false;
    }
    if(selcity.find("option:selected").val()==0||selcity.find("option:selected").val()==''){
        tipshow.text('亲，城市未填写哦！');
        return false;
    }
    var needs=[],chkhave=0,chkother=0;
    $('#checkboxarea'+item+' [name="Appuser[needtype][]"]').each(function(){
        if($(this).attr('checked')=='checked'){
            needs.push($(this).val());
            chkhave=1;
            if($(this).val()=='-1'){chkother=1;}
        }
    });
    if(!chkhave){
        tipshow.text('亲，填写需求，我们才能更好为您服务哦！');
        return false;
    }
    if(chkother){
        var pattern=/^[\u4e00-\u9fa5 a-zA-Z0-9]{2,}$/;   //其他需求验证特殊字符
        if(!pattern.test(other)||other=='其它'||other=='玄关柜/鞋柜/酒柜/书柜等其他家具'){ //当其它复选框变成玄关柜/鞋柜/酒柜/书柜等其他家具，添加新的判断
            if(other=='玄关柜/鞋柜/酒柜/书柜等其他家具'){
                tipshow.text('亲,请在"玄关柜/鞋柜/酒柜/书柜等其他家具"输入框中填写您的需求！'); //新添加的判断
            }else {
                tipshow.text('亲,请在"其它"输入框中填写您的需求！'); //原来默认的判断
            }
            return false;
        }
    }
    tipshow.text('');
    $data={Appuser:{username:name,mobile:tel,address_sheng:pro,address_shi:city,needtype:needs,needother:other}};
    return true;
}
//表单验证(没需求模块)
function validation1(item){
    var selpro=$('#selProvince'+item);
    var selcity=$('#selCity'+item);
    var tipshow=$('#tip_show'+item);
    var name=$('#app_name'+item).val();
    var tel=$('#app_tel'+item).val();
    var pro=selpro.find("option:selected").text();
    var city=selcity.find("option:selected").text();
    var pattern=/^[\u4e00-\u9fa5 a-zA-Z0-9]{2,}$/;		//验证姓名不含特殊字符   至少2位
    if(!pattern.test(name)){
        tipshow.text('亲,姓名格式有误。');
        return false;
    }
    if(name==''||name=='您的姓名'){
        tipshow.text('亲,姓名必须填写。');
        return false;
    }
    pattern=/(^((\+?86)|(\(\+86\)))?\d{3,4}-{1}\d{7,8}(-{0,1}\d{3,4})?$)|(^((\+?86)|(\(\+86\)))?1\d{10}$)/;
    if(!pattern.test(tel)){
        tipshow.text('亲,手机号码错了哦。');
        return false;
    }
    if(selpro.find("option:selected").val()==0||selpro.find("option:selected").val()==''){
        tipshow.text('亲，省份未填写哦！');
        return false;
    }
    if(selcity.find("option:selected").val()==0||selcity.find("option:selected").val()==''){
        tipshow.text('亲，城市未填写哦！');
        return false;
    }
    tipshow.text('');
    $data={Appuser:{username:name,mobile:tel,address_sheng:pro,address_shi:city}};
    Hide(".tckbg,.sqk_alert");
    return true;
}
//表单验证(只有姓名，手机)
function validation2(item){
    var tipshow=$('#tip_show'+item);
    var name=$('#app_name'+item).val();
    var tel=$('#app_tel'+item).val();
    var pattern=/^[\u4e00-\u9fa5 a-zA-Z0-9]{2,}$/;
    if(!pattern.test(name)){
        tipshow.text('亲,姓名格式有误。');
        return false;
    }
    if(name=='您的姓名'||name==''){
        tipshow.text('亲,姓名必须填写。');
        return false;
    }
    pattern=/(^((\+?86)|(\(\+86\)))?\d{3,4}-{1}\d{7,8}(-{0,1}\d{3,4})?$)|(^((\+?86)|(\(\+86\)))?1\d{10}$)/;
    if(!pattern.test(tel)){
        tipshow.text('亲,手机号码错了哦。');
        return false;
    }
    tipshow.text('');
    $data={Appuser:{username:name,mobile:tel}};
    return true;
}
//cookie时间设置
function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return ""
}
function setCookie(c_name,value,expiredays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
}

//显示传来的元素
function Show(elem){
    $(elem).show();
}
//隐藏传来的元素
function Hide(elem){
    $(elem).hide();
}