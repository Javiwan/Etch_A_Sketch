
$(document).ready(function(){
//Start the aplication with six squares
	grid(64);

//Start the aplication with the desired number of squares
	$("#start").click(function(){
		var num = prompt("Enter a width");
		$("#container").empty();
		grid(num);
	});

//Clear the drawing
	$("#clear").click(function(){
		$(".pixel").css("background","red");
	});	
});

//Creates a new grid with the number chosen
function grid(number){

	var $width = 960/number-2;

	for(var i=0; i < number; i++){
		$("#container").append("<div class='line'></div>");
		for(var j=0; j < number; j++){
			$("#container").append("<div class='pixel'></div>");
		}
	}

	$(".pixel").css({"width":$width, "height":$width});

//Make the effect of drawing when hover a square.(Why don't works in the main?)
	$("#container > div").hover(function(){
		$(this).css("background", "blue");
	});
}

