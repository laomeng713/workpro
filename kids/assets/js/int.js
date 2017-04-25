var PIN = {};
PIN.LoadScript = function(url, callback, charset){
	var t = url.toLowerCase().substring(url.lastIndexOf('.') + 1);
	if(t==='js') {
    	var n = document.createElement("script");
    	n.type = "text/javascript";
	}else if(t==='css'){
		n = document.createElement('link');
		n.type = 'text/css';
		n.rel = 'stylesheet';
	}
    if(charset){n.setAttribute("charset",charset);}
    if (n.readyState){
        n.onreadystatechange = function(){
            if(n.readyState == "loaded" || n.readyState == "complete"){
                n.onreadystatechange = null;
				if(callback)callback();
                document.getElementsByTagName("head")[0].removeChild(this);
            }
        };
    }
    else {
        n.onload = function(){
			if(callback)callback();
            document.getElementsByTagName("head")[0].removeChild(this);
        };
    }
	if(t==='js') {
		n.src = url;
	}else if(t==='css'){
		n.href = url;
	}
    document.getElementsByTagName("head")[0].appendChild(n);
}

function defhover(durl){
	$(".type_List a,.type_List2 a,.navigation a,.top_menu a,#nav a,.menu a").each(function(){
			 $(this).addClass($(this).attr('href')==durl?'hover':'');
	});
}

//PIN.LoadScript('/theme/kids/js/tips.js');
//PIN.LoadScript('/theme/kids/js/swfObject.js');
PIN.LoadScript('/theme/kids/js/lib.pincolor.min.js',function(){

	$('img[data-cache=true]').cache_images(function(a){$(a).lazyload({placeholder : "theme/kids/images/touming.gif",effect : "fadeIn" });});
	
	$(".lazyimg img").lazyload({ 
		placeholder : "theme/kids/images/touming.gif",
		effect : "fadeIn" 
	});

	jQuery("a[href='']").attr('target','_self').attr('href','javascript:void(0);');
	jQuery('a[href*=#]').click(function(){jQuery.scrollTo(jQuery(this).attr("href"),1000);return;});
	jQuery('.sct').click(function(){jQuery.scrollTo(jQuery(this).attr("href"),1000);return;});
	$('#top').append('<div class="clh"></div>');

	$(".gotop").click(function(){$.scrollTo(0,500);}); 
	//$(".nl").limit();
	defhover(window.location.href);
	
	jQuery(".tab-con1 li.sl").soChange({
			thumbObj:jQuery(".tab-tab1 a"),
			thumbNowClass:'hover',
			slideTime:200, 
			thumbOverEvent:true,
			autoChange:true,
			changeTime:8000,
			clickFalse:false,
			delayTime:100
		});
		
	$(".soChange").each(function(){
		var _self=$(this);
		var Ctime=_self.attr('Ctime')?_self.attr('Ctime'):3000;
		var delay=_self.attr('delay')?_self.attr('delay'):300;
		var Type=_self.attr('type')?_self.attr('type'):'fade';
		var slideTime=_self.attr('slideTime')?_self.attr('slideTime'):600;
		//alert(slideTime);changeType:'fade',//切换方式，可选：fade,slide，默认为fade
		_self.find("a.a_bigImg").soChange({
			thumbObj:_self.find('.soul li'),
			thumbNowClass:'on',//自定义导航对象当前class为on
			botPrev:_self.find('.top_pre'),
			botNext:_self.find('.top_next'),
			clickFalse:false,
			thumbOverEvent:true,
			overStop:true,
			slideTime:slideTime,
			delayTime:delay,
			changeType:Type,
			//autoChange:false,
			//changeType:'slide',
			changeTime:Ctime//自定义切换时间为4000ms
	
		});
	});
	jQuery(".hoverFv img,.hoverFi").hover(function(){
		jQuery(this).animate({opacity:.75},"fast");
	},function(){
		jQuery(this).animate({opacity:1},"fast");
	});

    $(".hoverFd").hover(function() {$(this).stop().animate({ opacity:0.60}, 200,function(){$(this).animate({ opacity:1}, 300);});});	
	
	var delayRun;
	$(".pin_box").hover(function(){
		$(this).addClass("cur");
		$(this).children(".pin_con").addClass("cur");
	},function(){
		$(this).removeClass("cur");
		if($(this).attr("data-open")!="true")$(this).children(".pin_con").removeClass("cur");
	}).each(function(){
		if($(this).attr("data-open")=="true"){
			$(this).addClass("cur");
			$(this).children(".pin_con").addClass("cur");
		}
	});

var member_m=true;

	if (typeof(member_m) == "undefined"){
		$('body').live('contextmenu', function(e) {return false;}); 
		$('body').live('dragstart', function(e) {return false;}); 
		document.body.onselectstart = function(){return false;};
		document.body.onbeforecopy = function(){return false;};
	}



	$("#navul > li").hover(function(){
		$(this).addClass("hover");
		$(this).find('.v1').addClass("hover");
	},function(){
		$(this).removeClass("hover");
		$(this).find('.v1').removeClass("hover");
		var _self=$(this);
	})

	var delayRun;
	$("#navul > li").hover(function(){
		$(this).addClass("hover");
		//$(this).find("ul").slideDown().end().siblings().removeClass("navmoon").find("ul").slideUp();
		//clearTimeout(delayRun);
	},function(){
		$(this).removeClass("hover");
		var _self=$(this);
		//$(this).removeClass("navmoon").find("ul").slideUp();
		//delayRun = setTimeout(function(){_self.removeClass("navmoon").find("ul").slideUp();_self.parent().find(".open").addClass("navmoon").find("ul").slideDown()},1000);
	})

	jQuery(".Vblock1,.Vblock2").hover(function(){
		jQuery(this).find("h3").stop().animate({top:"0px"}, 600,"");
	},function(){
		jQuery(this).find("h3").stop().animate({top:"-510px"}, 400);
	});

    $(".Vblock5 .vbox").click(function() {
		//var _self=$(this).parent();
		var _self=$(this);
		var url=_self.attr("data-url");
		var id=_self.attr("data-id");
		$(".Vblock5").each(function(index, element) {
            $(this).find(".video").html("<i id='"+$(this).find(".vbox").attr("data-id")+"'></i>");
			$(this).find(".vimg").show();
        });
		_self.find(".vimg").hide();
		
		if(url.indexOf(".flv")>-1){
		
			var flashvars = {vcastr_file:url,IsAutoPlay:"1"};
			var params = {wmode:"opaque",allowscriptaccess:"always",allowfullscreen:"true"};
			swfobject.embedSWF("Public/images/swf/vcastr22.swf",id, "720", "480", "9.0.0", "expressInstall.swf", flashvars,params);
		
		}else{
			
			var flashvars = {dataFile:"",showLogo:"false"};
			var params = {wmode:"opaque",wmode:"transparent",allowscriptaccess:"always",allowfullscreen:"true"};
			swfobject.embedSWF(url,id, "720", "480", "9.0.0", "expressInstall.swf", flashvars,params);
			
		}
		
		return false;
    });

	jQuery(".Vblock55").hover(function(){
		jQuery(this).find("h3").animate({height:"70px"},  "fast");
	},function(){
		jQuery(this).find("h3").animate({height:"53px"},  "fast");
	});

	$('#newsbody .img').imgAutoSize(1160,8820);
	$("#mr_frUl1 .mr_frUl").jCarouselLite({
	    btnNext: "#mr_frUl1 .next",
	    btnPrev: "#mr_frUl1 .prev",
		mouseWheel: true,
		animation:'slow',
		visible: 4,
		auto: 2000, //自动滚动，2000（毫秒）=1秒，删除即不自动滚动
		scroll: 1,
		easing: "easeOutBack",
		vertical:false, //纵向滚动
		onMouse: true,
		speed: 800
	});
	$("#mr_frUl2 .mr_frUl").jCarouselLite({
	    btnNext: "#mr_frUl2 .next",
	    btnPrev: "#mr_frUl2 .prev",
		mouseWheel: true,
		animation:'slow',
		visible: 4,
		auto: 2000, //自动滚动，2000（毫秒）=1秒，删除即不自动滚动
		scroll: 1,
		easing: "easeOutBack",
		vertical:true, //纵向滚动
		onMouse: true,
		speed: 800
	});
	$("#mr_frUl3 .mr_frUl").jCarouselLite({
	    btnNext: "#mr_frUl3 .next",
	    btnPrev: "#mr_frUl3 .prev",
		mouseWheel: true,
		animation:'slow',
		visible: 6,
		auto: 2000, //自动滚动，2000（毫秒）=1秒，删除即不自动滚动
		scroll: 1,
		easing: "easeOutBack",
		vertical:false, //纵向滚动
		onMouse: true,
		speed: 800
	});
	//$('body').live('contextmenu', function(e) {return false;}); $('body').live('dragstart', function(e) {return false;});document.body.onselectstart = function(){return false;};document.body.onbeforecopy = function(){return false;};

});



function IEhtml5(){
	var args = IEhtml5.arguments;
	for(var i=0; i<args.length; i++)
	{
		//alert(args[i]);
		document.createElement(args[i]);
	}
}
IEhtml5("article","details","footer","header","nav","summary","time");

$(".viimg,.Vkuai5 ul li").hover(
		function(){
			var that=this;
				//$(that).find("div").animate({width:280,height:342,left:0,top:0},300,function(){
					$(that).find(".xj").animate({left:0,top:0,opacity:1},300);
				//});
			},
		function(){
			var that=this;
			$(that).find(".xj").stop().animate({left:0,top:0,opacity:0},300);
			//$(that).find("div").stop().animate({width:0,height:0,left:78,top:101},300);
			}
		)

$(".viimgz").hover(
		function(){
			var that=this;
				//$(that).find("div").animate({width:280,height:342,left:0,top:0},300,function(){
					$(that).find(".xjz").animate({left:0,top:0,opacity:1},300);
				//});
			},
		function(){
			var that=this;
			$(that).find(".xjz").stop().animate({left:0,top:-280,opacity:0},300);
			//$(that).find("div").stop().animate({width:0,height:0,left:78,top:101},300);
			}
		)
		
		//document.oncontextmenu = function(){
  //return false;
//}
//document.onkeydown = function(){
//  if (event.ctrlKey && window.event.keyCode==67){
//    return false;
//  }
//}
//document.body.oncopy = function (){
//  return false;
//}
//不建议连选中文本都不行
//document.onselectstart = function(){
// return false;
//}