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
	
	$("#post #toggle").click(function(){
		toggle("detail")
	})

	$("#detail .top").click(function(){
		show("main");
	});
});
 
 
var show = function(viewId) {
	$(".view").fadeOut();
	$("#"+viewId).fadeIn();
}

var toggle = function(viewId) {
	$(".view").toggle();
	$("#"+viewId).fadeIn();
}
