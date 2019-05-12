$(function() {
	//导航鼠标滑入事件
	$(".header2>ol>li").mouseenter(function() {
		$(this).css("color", "rgb(168,168,170)");
	})
	$(".header2>ol>li").mouseleave(function() {
		$(this).css("color", "#FFFFFF");
	})
	$("#mac").mouseenter(function(){
		$(".li_div").show();
	})
	$("#mac").mouseleave(function(){
		$(".li_div").hide();
	})
	//轮播图
	var index = 0;
	var width = $(".lbt>ul>li").width();
	var move = null;
	move = function() {
		index = index > 3 ? 0 : index;
		$(".lbt>ul").animate({left: -width * index}, 500);
//		$(".index>ul>li").eq(index).addClass("bgcolor").siblings().removeClass("bgcolor");
	}
	var time = setInterval(function() {
		index++;
		move();
	}, 2000)
	$(".lbt").hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(function() {
			index++;
			move();
		}, 2000)
	})
	setInterval(function(){
		$(".longmao").hide();
	},3000)
})