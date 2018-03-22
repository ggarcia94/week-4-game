$(document).ready(function() {

    // Variables
    var numToGuess = "";
    var total = 0;
    var numCrystalOne = "";
    var numCrystalTwo = "";
    var numCrystalThree = "";
    var numCrystalFour = "";
    var wins = 0;
    var losses = 0;

    //This function will generate a random variable.
    function randomNumber(min, max) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomNumber;
    }
     
    //This function is called when we start or restart the game.
    function initializeGame() {
      total = 0;
      numToGuess = randomNumber(19, 120);
      $("#numberToGuess").text("Number to Guess: " + numToGuess);
      numCrystalOne = randomNumber(1, 12);
      numCrystalTwo = randomNumber(1, 12);
      numCrystalThree = randomNumber(1, 12);
      numCrystalFour = randomNumber(1, 12);
      $("#total").text("Total: " + total);
      $("#wins").text("Wins: " + wins);
      $("#losses").text("Losses: " + losses);
    }
    
    //This function will check if we have won or lost.
    function checkWinLose() {
      if (total === numToGuess) {
          wins++;
          $("#result").text("You Won!");
          initializeGame();
      } else if (total > numToGuess ) {
          losses++;
          $("#result").text("You Lost!");
          initializeGame();
      } else {
          $("#result").text("");
      }
    }
  
    //By clicking on the buttons we update the total and check if we win or lose.
    $("#button-1").on("click", function() {
      total = total + numCrystalOne;
      $("#total").text("Total: " + total);
      checkWinLose();
    });
  
    $("#button-2").on("click", function() {
      total = total + numCrystalTwo;
      $("#total").text("Total: " + total);
      checkWinLose();
    });
  
    $("#button-3").on("click", function() {
      total = total + numCrystalThree;
      $("#total").text("Total: " + total);
      checkWinLose();
    });
  
    $("#button-4").on("click", function() {
      total = total + numCrystalFour;
      $("#total").text("Total: " + total);
      checkWinLose();
    });
  
    //We call the initializeGame function to start the game.
    initializeGame();  
  
  });