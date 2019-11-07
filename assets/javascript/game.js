$(document).ready(function() {
//Variables defined
var randomValueOfGemArray = [];
var wins = 0;
var losses = 0;
var scoreTotal = 0;
var gemsArray =[
    {name: "ruby", image: "assets/images/ruby.jpg"},
    {name: "diamond", image:"assets/images/diamond.jpg"},
    {name: "sapphire", image:"assets/images/sapphire.jpg"},
    {name: "emerald", image:"assets/images/emerald.jpg"},
];
//define reset
var resetButton = $('.resetButton');
//start reset function on reset button click
resetButton.on('click', reset);

function reset(){
    $("#gems").empty();
    randomValueOfGemArray = [];
    scoreTotal = 0;
    gemsArray =[
    {name: "ruby", image: "assets/images/ruby.jpg" },
    {name: "diamond", image:"assets/images/diamond.jpg"},
    {name: "sapphire", image:"assets/images/sapphire.jpg"},
    {name: "emerald", image:"assets/images/emerald.jpg"}
];
startGame();
}
//define startGame
function startGame(){
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#scoreTotal").text(scoreTotal);
    //generate random number between 19-120
    var randomNumber = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
    $("#randomNumberDisplayed1").text(randomNumber);
    //make an array of the 4 random #s
    for (var i = 0; i < 4; i++){
    var randomValueOfGem = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    randomValueOfGemArray.push(randomValueOfGem);
}
//creating gems
for (var j = 0; j < randomValueOfGemArray.length; j++){
    //create gem image
    var gemImage = $("<img>");
    //add class to each image
    gemImage.addClass("gemImageClass");
    //add attibute to image from gemsArray
    gemImage.attr("src",gemsArray[j].image);
    //add attribute and assign random value to each gem
    gemImage.attr("dataGemValue",randomValueOfGemArray[j]);
    //display gems
    $("#gems").append(gemImage);
}
//enable click on each gem
$(".gemImageClass").on("click", function(){
    //store value of each gem
    var gemValue = ($(this).attr("dataGemValue"));
    //assign numeric value to gem
    gemValue = parseInt(gemValue);
    scoreTotal += gemValue;
    $("#scoreTotal").text(scoreTotal);
    //define win or lose
if (scoreTotal === randomNumber) {
    $("#scoreTotal").text(scoreTotal);
    wins++;
    $("#wins").text(wins);
    setTimeout(function() {
        alert("You win!!");
    }, 250);
}
else if (scoreTotal >= randomNumber) {
    $("#scoreTotal").text(scoreTotal);
    losses++;
    $("#losses").text(losses);

    setTimeout(function() {
        alert("You lose!!");
    }, 250);
}
});
}
startGame();
});




