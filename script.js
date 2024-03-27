function play() {
  var userChoice = document.getElementById("userChoice").value.toLowerCase();
  var computerChoice = Math.random();
  if (computerChoice < 0.33) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  var result;

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  document.getElementById("result").innerHTML = result;
}
