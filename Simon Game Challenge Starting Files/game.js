var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"]; 

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var sound = new Audio("sounds\\" + randomChosenColour + ".mp3");
    sound.play();
}