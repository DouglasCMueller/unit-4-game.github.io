$(document).ready(function() {

    //Variables defined
var randomNumber = 0;
var randomValueOfCrystal = 0;
var randomValueOfCrystalArray = [];

var wins = 0;
var losses = 0;

var gemsArray =[
    {name: "ruby", image: "assets/images/ruby.jpg" },
    {name: "diamond", image:"assets/images/diamond.jpg"},
    {name: "sapphire", image:"assets/images/sapphire.jpg"},
    {name: "emerald", image:"assets/images/emerald.jpg"},
];
var scoreTotal = 0;

function reset(){
    var randomNumber = 0;
var randomValueOfCrystal = 0;
var randomValueOfCrystalArray = [];
var gemsArray =[
    {name: "ruby", image: "assets/images/ruby.jpg" },
    {name: "diamond", image:"assets/images/diamond.jpg"},
    {name: "sapphire", image:"assets/images/sapphire.jpg"},
    {name: "emerald", image:"assets/images/emerald.jpg"},
];
var scoreTotal = 0;
console.log(scoreTotal);
}
function startGame(){
    $("#wins").text(wins);
    $("#losses").text(losses);

$("#scoreTotal").text(scoreTotal);
console.log(gemsArray[0].image);
//generate random number between 19-120
var randomNumber = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
console.log (randomNumber);
$("#randomNumberDisplayed1").text(randomNumber);
//make an array of the 4 random #s
for (var i = 0; i < 4; i++){
 
var randomValueOfCrystal = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
console.log(randomValueOfCrystal);

    randomValueOfCrystalArray.push(randomValueOfCrystal);
    console.log (randomValueOfCrystalArray);
}
for (var j = 0; j < randomValueOfCrystalArray.length; j++){
    var gemImage = $("<img>");
    gemImage.addClass("gemImageClass");
    gemImage.attr("src",gemsArray[j].image);
    gemImage.attr("dataGemValue",randomValueOfCrystalArray[j]);
    $("#gems").append(gemImage);
    console.log(gemImage);
    console.log(j);
}

$(".gemImageClass").on("click", function(){
var gemValue = ($(this).attr("dataGemValue"));
gemValue = parseInt(gemValue);
console.log(gemValue);
scoreTotal += gemValue;
$("#scoreTotal").text(scoreTotal);
if (scoreTotal === randomNumber) {
    $("#scoreTotal").text(scoreTotal);
    wins++;
    console.log(wins);
    $("#wins").text(wins);
     alert("You win!");
    
  }

  else if (scoreTotal >= randomNumber) {
    $("#scoreTotal").text(scoreTotal);
    losses++;
    $("#losses").text(losses);
    console.log(losses);
    // reset();
     alert("You lose!!");
 
  }


});
}
startGame();
});




