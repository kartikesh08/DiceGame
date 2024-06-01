var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImg  =  "dice" + randomNumber1 + ".png";

var ramdomImgSource = "images/" + randomImg;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",ramdomImgSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImg2 =  "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Won  🚩"
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Won  🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}