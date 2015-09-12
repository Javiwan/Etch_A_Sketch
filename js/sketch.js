var $start = true;
var $random = false;
var num = 50;

$(document).ready(function(){
//Start the aplication with six squares
	grid(50);
});
//Start the aplication with the desired number of squares
	$("#start").click(function(){
		correctValor();
		$("#container").empty();
		$start=true;
		$random=false;
		grid(num);
	});

//Clear the drawing
	$("#clear").click(function(){
		$(".pixel").css("background","#B280E6");
	});	

//Random color
	$("#random").click(function(){
		correctValor();
		$("#container").empty();
		$start=false;
		$random=true;
		grid(num);
	});

	$("#author").click(function(){
		confirm("Javier Mesa Marrero         Jmesamarrero@gmail.com");
	});




//Creates a new grid with the number chosen
function grid(number){

	var $width = 960/number-2.1;

	for(var i=0; i < number; i++){
		$("#container").append("<div class='line'></div>");
		for(var j=0; j < number; j++){
			$("#container").append("<div class='pixel'></div>");
		}
	}

	$(".pixel").css({"width":$width, "height":$width});

//Make the effect of drawing when hover a square.(Why don't works in the main?)
	if($start === true){
		$("#container > div").hover(function(){
			$(this).css("background", "#241A2E");
		});
	}
	else if($random === true){
		$("#container > div").hover(function(){
			$(this).css("background", getcolor());
		});
	}
}

function correctValor(){
	do{
			num = prompt("Enter a width between 1 and 50");
		}
	while(num < 1 || num > 50);
}

function getcolor(){
	var hue = "rgb("+(Math.floor(Math.random()*256)) + "," 
			+ (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256))+")";
	return hue;
}
