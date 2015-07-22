$(document).ready(function(){
	$("[name='submitButton']").on('click', function(event){
		event.preventDefault();

		var $button = $("[name='submitButton']");
		var $myDiv = $("<div/>");
		/*
		var $button1 = $("[class='data-button-toggle']");
		var $button2 = $("[class='data-button-toggle']");

		*/		

	//When that button is clicked, it should create a new div that contains some text, and two buttons. 
		$button.on('click', function(event){
			event.preventDefault();
			$(this).append(myDiv);
		myDiv.text("this is my new div");

			//$(myDiv).append($button1).append($button2);   

        }); 
			
	}); 
});

function numClicks(){
	numClicks++;
}


//It should have a data attribute called 'data-button-toggle' and set that value equal to 1. 


//The Text in the new div should read "Here are the number of clicks: ", 
//then have a number that represents how many times the "Click me" button has been clicked.

//The first button in the div should have the text "Change color". When clicking on it, it should change the parent divs background color to red. This will require you looking up the .css() method in the jQuery documentation if you do not already know how to use it. Once you do that, target the data attribute you created in the div and set it equal to 2. Now, when you click this button again, check to see if the value is 2, if it is, set the data attribute equal to 1 and set the background color of the div back to green. Basically, the button should toggle the background color between green and red. This link will help you understand the .data() method of jquery better, thus helping you with the challenge: (https://api.jquery.com/data/)

//The second button in the div should have the text "Remove". When clicking it, it should remove the parent div from the DOM using the .remove() mehtod.


	