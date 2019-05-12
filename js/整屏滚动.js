$(function() {
	var flag = true;
	var index = 0;
	var move = null;
	$('html,body,.box').animate({"scrollTop": '0px'}, 1000);
	document.addEventListener('mousewheel', function(event) {
		event.preventDefault();
		if(flag) {
			flag = false;
			if(event.deltaY > 0) {
				index++;
				index = index > 3 ? 3 : index;
				move();
			} else {
				flag = false;
				index--;
				index = index < 0 ? 0 : index;
				move();
			}
		}
	})
	$('.small ul li').click(function() {
		index = $(this).index();
		move();
	})
	move = function() {
		var h = $('body .box').height();
		$('html,body,.box').stop().animate({"scrollTop": (h * index + 'px')}, 1000, function() {
			flag = true;
		});
		$('.small ul li').eq(index).addClass('w').siblings().removeClass('w');
	}
})