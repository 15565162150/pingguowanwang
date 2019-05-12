$(function(){
	//第一页面随机切换背景
	var width=$("section").width();//获取宽度
	var height=$("section").height();//获取高度
//	console.log(height);
	var time=null;
	//随机在有限空间移动背景图片
	function move(){
		var num1=Math.floor(Math.random()*6);//X
		var num2=Math.floor(Math.random()*8);//Y
		$("section").css({"background-position-x":num1*width+'px',"background-position-y":num2*height+'px'});
	}
	//定时器
	time=setInterval(function(){
		move();
	},1000)
	//鼠标滑入事件
	$("section").mouseenter(function(){
		clearInterval(time);//清除定时器
		//添加定时器
		soon=setInterval(function(){
			move();
		},200);
	})
	//鼠标滑出事件
	$("section").mouseleave(function(){
		clearInterval(soon);//清除定时器
		//添加定时器
		time=setInterval(function(){
			move();
		},1000);
	})
})