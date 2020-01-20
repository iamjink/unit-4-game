$(document).ready() {

    //random number generator

    var RandomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    //assigning a hidden random value to each crystal between 1 and 12

    var buttonOne = Math.floor(Math.random() *12) + 1;
    var buttonTwo = Math.floor(Math.random() *12) + 1;
    var buttonThree = Math.floor(Math.random() *12) + 1;
    var buttonFour = Math.floor(Math.random() *12) + 1;


    var wins = 0;
    var losses = 0;
    var userTotal = 0;
    var MatchNumber =


        //pushing random number to match to show on screen

        function MatchNumber() {
            $("#randomNumber").text(computerNumber);

        }

    MatchNumber();
    console.log(MatchNumber)

    //assign numbers to each button



    //when total score equals MatchNumber, then win inreases by one and the number shows in the wins div.
    function userScore() {
        //onclick listner
        //add values from clicks
        return (result)
        $("#userNumber").text(score)
    }

    userScore.click() {}

    //if total score is > than MatchNumber, then loss number increases by one and shows up in the loss div.

    if (userTotal === computerNumber) {
        wins++;
        $("#wins").text(wins)
    } else if (userTotal > computerNumber) {
        losses++;
        $("#losses").text(losses)
    }

};