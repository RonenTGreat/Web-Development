var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"]; 

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    $(".btn").click(function(){
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
    });

}

function playSound(name){
    var randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    var sound = new Audio("sounds\\" + randomChosenColour + ".mp3");
    sound.play();

    $(".btn").click(function(){
        var sound = new Audio("sounds\\" + $(this).attr("id") +".mp3");
        sound.play();
    });

}

function animatePress(currentColour){
    $(".btn").click(function(){
        $(this).addClass("pressed");

        setTimeout(function () {
          $(".btn").removeClass("pressed");
        }, 100);  
    });

     
}
