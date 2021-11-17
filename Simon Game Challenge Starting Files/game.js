var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence() {
    level++;

    $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
    playSound(randomChosenColour)
}

function playSound(name) {
  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  var sound = new Audio("sounds\\" + name + ".mp3");
  sound.play();

  $(".btn").click(function () {
    var sound = new Audio("sounds\\" + $(this).attr("id") + ".mp3");
    sound.play();
  });
}

function animatePress(currentColour) {
  $("#" + currentColour).click(function () {
    $(this).addClass("pressed");

    setTimeout(function () {
      $("#" + currentColour).removeClass("pressed");
    }, 100);
  });
}
