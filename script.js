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

	//toggle
	$("#toggle-a").click(function(){
		$("#detail-a").toggle();
	})
	$("#toggle-d").click(function(){
		$("#detail-d").toggle();
	})
	$("#toggle-g").click(function(){
		$("#detail-g").toggle();
	})
	$("#toggle-j").click(function(){
		$("#detail-j").toggle();
	})
	$("#toggle-m").click(function(){
		$("#detail-m").toggle();
	})
	$("#toggle-p").click(function(){
		$("#detail-p").toggle();
	})

	//audio-play&pause
	$("#play-a").click(function(){
		$("#a")[0].play();
	})
	$("#pause-a").click(function(){
		$("#a")[0].pause();
	})
	$("#stop-a").click(function(){
		$("#a")[0].load();
	})


	$("#play-d").click(function(){		
		$("#d")[0].play();
	})
	$("#pause-d").click(function(){
		$("#d")[0].pause();
	})
	$("#stop-d").click(function(){
		$("#d")[0].load();
	})

	
	$("#play-g").click(function(){
		$("#g")[0].play();
	})
	$("#pause-g").click(function(){
		$("#g")[0].pause();
	})
	$("#stop-g").click(function(){
		$("#g")[0].load();
	})


	$("#play-j").click(function(){
		$("#j")[0].play();
	})
	$("#pause-j").click(function(){
		$("#j")[0].pause();
	})
	$("#stop-j").click(function(){
		$("#j")[0].load();
	})


	$("#play-m").click(function(){
		$("#m")[0].play();
	})
	$("#pause-m").click(function(){
		$("#m")[0].pause();
	})
	$("#stop-m").click(function(){
		$("#m")[0].load();
	})


	$("#play-p").click(function(){
		$("#audio-p")[0].play();
	})
	$("#pause-p").click(function(){
		$("#audio-p")[0].pause();
	})
	$("#stop-p").click(function(){
		$("#audio-p")[0].load();
	})

	
	


});
 
 
var show = function(viewId) {
	$(".view").fadeOut();
	$("#"+viewId).fadeIn();
}

