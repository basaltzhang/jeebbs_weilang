// JavaScript Document
// footer
var mainFooter="<div class='footer_wrap'>\
	<div class='footer_main'>\
		<div class='footer_logo'></div>\
		<div class='footer_about'>\
			<p class='footer_title'>关于我们</p>\
			<ul>\
				<li><a href='#'>关于我们</a></li>\
				<li><a href='#'>投稿须知</a></li>\
				<li><a href='#'>联系我们</a></li>\
				<li><a href='#'>专栏作者</a></li>\
				<li><a href='#'>商务合作</a></li>\
			</ul>\
		</div>\
		<div class='footer_map'>\
			<p class='footer_title'>网站地图</p>\
			<div class=''><a href='#'>科普知识</a><a href='#'>科普产品</a><a href='#'>体验测试</a><a href='#'>科普实践</a><a href='#'>教育活动</a><a href='#'>社区</a><a href='#'>标准化课件</a><a href='#'>分享视频</a><a href='#'>测试体验</a><a href='#'>虚拟博物馆</a><a href='#'>在线体验</a><a href='#'>场地解决方案</a><a href='#'>代运营方案</a></div>\
		</div>\
		<p class='information'>北京维朗科技有限公司  ©版权所有	www.wlkepu.com  备案：京备ICP00001204</p>\
	</div>\
</div>\
";
document.write(mainFooter);

//toTop & weChat
var goChat="<div class='goChat'>\
	<div class='weChat'></div>\
	<div class='toTop'></div>\
</div>\
";
document.write(goChat);

//置顶
$(document).ready(function(){
	var pageHei=$(window).height();
	if(pageHei>=500){
		$(".toTop").fadeIn(300);
	} else {
		$(".toTop").fadeOut(300);
	}
	$(".toTop").click(function(){
		$('html,body').animate({scrollTop: '0px'}, 1000);
		//alert ("yes");
	});
});