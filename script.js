$(document).ready(function(){
	$("#main .menu li").click(function(){
		show("category")
	});
	$("#category").hide();

	$("#category .top").click(function(){
		show("main");
	});

	$("#category .category-menu li").click(function(){
	show("post")
	})
	$("post").hide();

	$("#post .top").click(function(){
		show("main");
	});

});

/*
$(document).ready(function() {
	$(".showView0").click(function() {
		show("view0");
	});
	$(".showView1").click(function() {
		show("view1");
	});
	$(".showView2").click(function() {
		show("view2");
	});
	$(".showView3").click(function() {
		show("view3");
	});

	show("view0");	
});*/

var show = function(viewId) {
	$(".view").fadeOut();
	$("#"+viewId).fadeIn();
}

