function fontResize(){
	var size = $(window).width()/40;
	if(size < 25){
		$("#title").css("font-size", "25px");
	}
	else {
		$("#title").css("font-size", size);
	}
	console.log("resized");
}

$(window).resize( function() {fontResize()})