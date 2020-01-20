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
var userScore = 0;
var MatchNumber = 

//random number generator

var computerNumber = RandomNumberRange[Math.floor(Math.random() * RandomNumberRange.length)]; 

//pushing random number to match to show on screen

function MatchNumber() {
    $("#randomNumber").html(computerNumber);
}

MatchNumber();

//assign numbers to each button

//click listener functions

//when clicking button-one, push the assigned number to memory, then when seconc click happens, add the numbers

//push the sum into totalscore

//when total score equals MatchNumber, then win inreases by one and the number shows in the wins div.

//if total score is > than MatchNumber, then loss number increases by one and shows up in the loss div.