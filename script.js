$(document).ready(function(){
 
	show("main");
	
	$("#main .menu li").click(function(){
		show("category")
	});
	
	$("#category .top").click(function(){
		show("main");
	});
	
	$("#category .category-menu li").click(function(){
		show("post")
	})
	
	$("#post .top").click(function(){
		show("main");
	});
	
});
 
 
var show = function(viewId) {
	$(".view").fadeOut();
	$("#"+viewId).fadeIn();
}





/*
$(document).ready(function(){
	$("#main .menu li").click(function(){
		show("category")
	});
	$("#category").hide();

	$("#category .top").click(function(){
		show("main");
	});

	$("#category .category-menu li").click(function(){
	show("#post")
	})
	$("#post").hide();

	$("#post .top").click(function(){
		show("main");
	});

});

var show = function(viewId) {
	$(".view").fadeOut();
	$("#"+viewId).fadeIn();
}

