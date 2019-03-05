$(function(){

	var name = $("#name");
	var appointment = $("#appointment");
	
	// Use lettering.js to wrap each character & word in a span tag
	name.lettering();
	appointment.lettering();

	// Our declations	
	var span = $("span");
	var length = span.length;
	var array = [];
	
	// Push reference to our array
	for(var i=1; i<=length; i++)
		array.push(i);
	
	// Randomise array
	shuffleArray(array);
	
	// Wrap each word in its own div so words don't split on line break
	name.wrapInner('<span class="word"></span>');
	appointment.wrapInner('<span class="word"></span>');
	var regEx = new RegExp(/<span class=\"char(\d+)\"> <\/span>/g);
	name.html(name.html().replace(regEx,'</span><span class="word">'));
	appointment.html(appointment.html().replace(regEx,'</span><span class="word">'));
	
	// Fire first animation
	setTimeout(function(){
		animateLetters(array,length,true);
	},500);
});

// Animate the letters
function animateLetters(array,length,animIn)
{	
	// Scale in or out?
	var scale = (animIn) ? 1 : 1.5;
	
	// Arrange array ordering
	var arrayToUse = (animIn) ? array : array.reverse();
	
	// Opacity value to use
	var opacity = (animIn) ? 1 : 0;
	
	// Loop through each letter, adding inline styles
	for(var i=0; i<=length; i++)
	{
		$(".char" + arrayToUse[i]).attr("style","opacity: " + opacity + "; transition-delay: " + (50 * i) + "ms; transform:perspective(1050px) rotateY(0deg) scale(" + scale + "); -webkit-transition-delay: " + (50 * i) + "ms; -webkit-transform:perspective(1050px) rotateY(0deg) scale(" + scale + ");");
	}
	
	// Flip animIn value for next animation
	animIn = (animIn) ? false : true;
	
	// Randomise array for next animate in
	array = (animIn) ? shuffleArray(array) : array;
	
	// How long before refiring?
	//var timeout = (animIn) ? 3500 : 5000;
	
	// Animate out or show replay button
	/*setTimeout(function(){
		if(!animIn)
		{
			// Animate out
			animateLetters(array,length,animIn);
		} else {
			// Create replay button
			//$("body").prepend('<button>Replay?</button>');
			$("button").on("click",function(){
				$(this).remove();
				// Replay animation
				setTimeout(function(){
					animateLetters(array,length,true);
				},500);
				
			});
		}
	},timeout);*/
}

// Randomize array element order in-place. Using Fisher-Yates shuffle algorithm.
// Ref: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array)
{
    for (var i=array.length -1; i>0; i--)
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}