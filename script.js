$(document).ready(function(){
var magic8ball= {};
magic8ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Cannot predict now", "Concentrate and ask again", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"] ;
$("#answer").hide();
//define question
magic8ball.askQuestion = function(question) {

//get random # from 0-1
	var random = Math.random();
//multiply by length of list
	var randomNumberArray = random * 		this.listOfAnswers.length;
// round down the random #
	var randomIndex = Math.floor 			(randomNumberArray);
//use rounded # to choose from array
	var randomAnswer = 						this.listOfAnswers[randomIndex];
// Write out Q and A in console
	$("#answer").text(randomAnswer);
	console.log(question);
    console.log(randomAnswer);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(1000);
};

//prompt will generate once btn clicked
	var onClick = function () {
		var question = prompt("Ask me a Yes/No question.");
	magic8ball.askQuestion(question);
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	//wait half a second before showing prompt
	setTimeout(
		function() {
			magic8ball.askQuestion(question);
		}, 1000);
//shaking 8ball effect
	$("#8ball").effect("shake");
	};

$("#questionButton").click(onClick);
});
