var cookieDisplay = document.getElementById("counter");
var cookieButton = document.getElementById("cookieButton");
var score = 0;

function cookieClicked() {
  score += 1;
  cookieDisplay.textContent = score + ' cookies'
}

cookieButton.onclick = cookieClicked;
