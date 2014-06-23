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
		show("category");
	});
	
	$("#post #toggle").click(function(){
		$("#detail").toggle();
	})

	$("#user-bar").click(function(){
		$("#user-more").toggle();
	})
});
 
 
var show = function(viewId) {
	$(".view").fadeOut();
	$("#"+viewId).fadeIn();
}

