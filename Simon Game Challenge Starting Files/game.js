var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"]; 

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
}

