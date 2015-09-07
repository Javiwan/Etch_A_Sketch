var $grid = 20;

$(document).ready(function(){
	grid($grid);
	$(".pixel").hover(function(){
		$(this).css("background","blue");
	});
});



function grid(number){
	for(var i=0; i < number; i++){
		$("#container").append("<div class='line'></div>")
		for(var j=0; j < number; j++){
			$("#container").append("<div class='pixel'></div>");
		}
	}
}