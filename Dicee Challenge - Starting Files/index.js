var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice .img1").setAttribute("src", "images//dice" + randomNumber1 + ".png"); // Changes the img1


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice .img2").setAttribute("src", "images//dice" + randomNumber2 + ".png"); // Changes the img2 

// If player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins";
}
// IF player 2 wins
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins🚩";
}
// Draw
else{
    document.querySelector("h1").textContent = "Draw!";
}