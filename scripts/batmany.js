var batmany = {};


// 登陆JS
batmany.changeLoginUserAvatar = function (userName) {

	// 判断是否存在该用户，如果存在则更改avatar
	if (1) {

		// 根据用户名获取avatar地址
		var url = 'images/avatar/' +　userName + '_avatar.jpg';
		$('.avatar').attr('src', url);
	}
	
};


batmany.showHeader = function (id) {
	var image = document.getElementById(id);
    image.onload = function() {
        var engine = new RainyDay({
            image: this
        });

    	engine.rain([ [1, 2, 100] ]);
    	engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
    };

    image.crossOrigin = 'anonymous';
    image.src = 'http://i.imgur.com/N7ETzFO.jpg';
}