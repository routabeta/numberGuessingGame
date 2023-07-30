const submitButton = document.querySelector("#submit");
const restartButton = document.querySelector("#restart");

document.querySelector("#rulesButton").addEventListener("click", collapse);

let ans = parseInt(Math.floor(Math.random() * 100));
let remaining = 10;
let clicked = false;

submitButton.addEventListener("click", onPress);
restartButton.addEventListener("click", reset);

function onPress() {
  const guess = document.querySelector("#guess").value;
  remaining--;

  console.log(ans);

  if (guess < ans) {
    document.querySelector("#hint").innerHTML = "Too Low!";
  } else if (guess > ans) {
    document.querySelector("#hint").innerHTML = "Too High!";
  } else {
    document.querySelector("#hint").innerHTML = "Correct!";
    document.querySelector("#restart").innerHTML =
      "<button>Play again?</button>";
  } //end if

  document.querySelector("#guess").value = "";

  document.querySelector("#guesses").innerHTML += " " + guess;
  document.querySelector("#remaining").innerHTML =
    "Guesses remaining: " + remaining;
} //end onPress

function reset() {
  remaining = 10;
  ans = parseInt(Math.floor(Math.random() * 100) + 1);
  document.querySelector("#hint").innerHTML = "";
  document.querySelector("#restart").innerHTML = "";
  document.querySelector("#guesses").innerHTML = "Previous guesses:";
  document.querySelector("#remaining").innerHTML =
    "Guesses remaining: " + remaining;
  console.log("restart");
} //end reset

function collapse() {
  if (!clicked) {
    document.querySelector("#rules").style = "display:block;";
  } else {
    document.querySelector("#rules").style = "display:none;";
  }
  clicked = !clicked;
} //end collapse
