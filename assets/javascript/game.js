//number choices


var RandomNumberRange = [];

var value = $(this).val();
var lowEnd = Number(value.split('_')[0]);
var highEnd = Number(value.split('_')[1]);

for (var i= lowEnd; i <= highEnd; i++) {
    list.push(i);1
}

var wins = 0;
var losses = 0;
var userTotal = 0;
var MatchNumber = 

//random number generator

var computerNumber = RandomNumberRange[Math.floor(Math.random() * RandomNumberRange.length)]; 

//pushing random number to match to show on screen

function MatchNumber() {
    $("#randomNumber").text(computerNumber);
    
}

MatchNumber();
console.log(MatchNumber)

//assign numbers to each button



//when total score equals MatchNumber, then win inreases by one and the number shows in the wins div.
function userScore(){
    //onclick listner
    //add values from clicks
    return(result)
    $("#userNumber").text(score)
} 

userScore.click(){}

//if total score is > than MatchNumber, then loss number increases by one and shows up in the loss div.

if (userTotal === computerNumber){
wins++;
$("#wins").text(wins)
} else if (userTotal > computerNumber) {
    losses++;
    $("#losses").text(losses)
}