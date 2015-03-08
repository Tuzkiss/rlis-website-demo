
var demo = {};

$(function () {
	
	demo.activeLi(2);

	demo.bindLiClick();

	demo.setLayout();

	$('.exit').on('click', function () {
		layer.confirm('是否要退出系统？');
		location.href = 'login.html';
	});

	// 提示框
	$('.demoAlert').on('click', function () {
		layer.alert('这是一个提示框', 9);
	});

	// 询问框
	$('.demoConfirm').on('click', function () {
		layer.confirm('这是一个提示框');
	});

	// 自定义询问狂
	$('.demoComfirmMore').on('click', function () {
		$.layer({
		    area: ['200px','auto'],
		    dialog: {
		        msg: 'are u dog？',
		        btns: 2,                    
		        type: 4,
		        btn: ['yep','en'],
		        yes: function(){
		            layer.msg('yep, u r dog', 1, 1);
		        }, no: function(){
		            layer.msg('en , ni shi zhu.', 1, 13);
		        }
		    }
		});
	});

	// 信息框
	$('.demoMsg').on('click', function () {
		layer.msg('dog as u');
	});

	// 右下角提示框
	$('.demoBottom').on('click', function () {
		$.layer({
	        type: 1,
	        title:'这是title', 
	        area: ['320px', '220px' ],
	        shift: 'right-bottom',
	        page: {
	            html : 'asdada'
	        }
	    });
	});

	// 页面HTML 层
	$('.demoHtml').on('click', function () {
		$.layer({
	        type: 1,
	        title:'这是title', 
	        area: ['520px', '420px' ],
	        page: {
	            dom : '#hey'
	        },
	    });
	});
	
	
});

// active nav
demo.activeLi = function (n, activeIndex) {

	if ( n < 1) {
		return false;
	} else if (n == activeIndex) {
		var mainLi 		=  $('nav>ul>li'),
		smallActive 	=  $('.small-active'),
	 	maxH     		=  $('nav').height() - mainLi.length * 40 + 19,
 		smallLi 		=  mainLi.find('.small-nav').eq( n - 1 ).find('li'),
	    slideDownHeight =  smallLi.length * 31 > maxH ? maxH : smallLi.length * 31 ;

	    $('ul.small-nav').css('max-height', maxH);

		// 移除之前active的 li 以及收缩子菜单
		smallActive.removeClass('small-active').fadeOut().slideUp();
		smallActive.parent().removeClass('active').next().css('margin-top', 0).css('border-top', 0);
		smallActive.parent().find('i').eq(1).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		var mainLi 		=  $('nav>ul>li'),
		smallActive 	=  $('.small-active'),
	 	maxH     		=  $('nav').height() - mainLi.length * 40 + 48,
 		smallLi 		=  mainLi.find('.small-nav').eq( n - 1 ).find('li'),
	    slideDownHeight =  smallLi.length * 31 > maxH ? maxH : smallLi.length * 31 ;

	    $('ul.small-nav').css('max-height', maxH);

		// 移除之前active的 li 以及收缩子菜单
		smallActive.removeClass('small-active').hide().slideUp();
		smallActive.parent().removeClass('active').next().css('margin-top', 0).css('border-top', 0);
		smallActive.parent().find('i').eq(1).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');

		// 添加点击li 展开事件
		mainLi.eq(n - 1).addClass('active').find('i').eq(1).removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		mainLi.find('ul').eq(n - 1).slideDown(400).addClass('small-active');
		mainLi.eq(n).css('margin-top', slideDownHeight).css('border-top', '2px solid #1e2a31');

		if (maxH == slideDownHeight ) {
			setTimeout(function () {
				$('.small-active').css('height', maxH).css('overflow-y', 'scroll');
			}, 450);
		}
	} 

};

// 
demo.findActiveIndex = function ( className ) {
	var li = $('nav>ul>li');

	for( var i = 0; i < li.length ; i ++){
		if ( li.eq(i).hasClass(className) ){
			return i + 1;
		}
	}
};

demo.bindLiClick = function () {
	$('nav>ul>li').bind('click' , function() {
		var activeIndex = demo.findActiveIndex('active');
					 n	= this.getAttribute('data-index');
		demo.activeLi(n, activeIndex );
	});

	$('nav>ul>li').find('ul>li').bind('click', function () {
		$('.s-active').removeClass('s-active');
		$(this).addClass('s-active');
		return false;
	});
};

demo.setLayout = function () {
	var mainH = $('.main').height();
	$('.main-bottom').height(mainH - $('.main-top').height() - 4);
};