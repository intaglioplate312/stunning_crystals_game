 // Handler for .ready() called ... and so it starts
$( document ).ready(function(){
 
//Start of game
//Computer gerates random number
var randomNum = Math.floor(Math.random()*120);
// display number to match
$('#computerChoice').text(randomNum);
/*
//Each crystal should have a random hidden value between 1 - 12.
var computerChoice = Math.floor(Math.random()*120) + 1;
var crystalOne = Math.floor(Math.random()*12) + 1;
var crystalTwo = Math.floor(Math.random()*12) + 1;
var crystalThree = Math.floor(Math.random()*12) + 1;
var crystalFour = Math.floor(Math.random()*12) + 1;

//For start no display
var playerChoices = 0;
var Wins = 0;
var Losses = 0;



//The random number shown at the start of the game should be between 19 - 120.
//The player will be shown a random number at the start of the game.
push.computerNum
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
 ++ gem
//Your game will hide this amount until the player clicks a crystal.

//When they do click one, update the player's score counter.
updateScore
//The player wins if their total score matches the random number from the beginning of the game.
(playerChoices == ComputerNum) {
   return "You Won!";
}
//The player loses if their score goes above the random number.
(playerChoices > ComputerNum) {
   return "Sorry you lose";
//The game restarts whenever the player wins or loses.

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
var reset = {}
var updatedWin = {}
var updatedLoss = {}
var updatedComputerNum = {}


//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.




*/


}); //closes document_ready_function