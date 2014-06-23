$(document).ready(function(){
 
	show("main");
	

	//main
	$("#main .menu li:nth-child(1)").click(function(){
		show("category-a")
	});
	$("#category-a .top").click(function(){
		show("main");
	});

	$("#main .menu li:nth-child(2)").click(function(){
		show("category-d")
	});	
	$("#category-d .top").click(function(){
		show("main");
	});

	$("#main .menu li:nth-child(3)").click(function(){
		show("category-g")
	});	
	$("#category-g .top").click(function(){
		show("main");
	});

	$("#main .menu li:nth-child(4)").click(function(){
		show("category-j")
	});	
	$("#category-j .top").click(function(){
		show("main");
	});

	$("#main .menu li:nth-child(5)").click(function(){
		show("category-m")
	});	
	$("#category-m .top").click(function(){
		show("main");
	});

	$("#main .menu li:nth-child(6)").click(function(){
		show("category-p")
	});	
	$("#category-p .top").click(function(){
		show("main");
	});
	
	//category
	$("#category-a .category-menu-a li").click(function(){
		show("post-a")
	})
	$("#category-d .category-menu-d li").click(function(){
		show("post-d")
	})
	$("#category-g .category-menu-g li").click(function(){
		show("post-g")
	})
	$("#category-j .category-menu-j li").click(function(){
		show("post-j")
	})
	$("#category-m .category-menu-m li").click(function(){
		show("post-m")
	})
	$("#category-p .category-menu-p li").click(function(){
		show("post-p")
	})
	
	//post
	$("#post-a .top").click(function(){
		show("category-a");
	});
	$("#post-d .top").click(function(){
		show("category-d");
	});
	$("#post-g .top").click(function(){
		show("category-g");
	});
	$("#post-j .top").click(function(){
		show("category-j");
	});
	$("#post-m .top").click(function(){
		show("category-m");
	});
	$("#post-p .top").click(function(){
		show("category-p");
	});

	
	$("#toggle").click(function(){
		$("#detail").toggle();
	})

	//audio-play
	$("#play-a").click(function(){
		$("#a")[0].load();
		$("#a")[0].play();
	})

	$("#play-d").click(function(){
		$("#d")[0].load();
		$("#d")[0].play();
	})
	
	$("#play-g").click(function(){
		$("#g")[0].load();
		$("#g")[0].play();
	})
	$("#play-j").click(function(){
		$("#j")[0].load();
		$("#j")[0].play();
	})
	$("#play-m").click(function(){
		$("#m")[0].load();
		$("#m")[0].play();
	})
	$("#play-p").click(function(){
		$("#p")[0].load();
		$("#p")[0].play();
	})


});
 
 
var show = function(viewId) {
	$(".view").fadeOut();
	$("#"+viewId).fadeIn();
}

