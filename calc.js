shouldResetScreen = false;


const buttons = document.querySelectorAll("button");
const CurrentoperatorScreen = document.getElementById('CurrentDisplay');
const Numbers = document.querySelectorAll(".number");  


Numbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    appendNumber(e.target.textContent); 
  });
});

function appendNumber(number) {
  if (shouldResetScreen) {
    CurrentoperatorScreen.textContent = number;
    shouldResetScreen = false;
  } else {
    CurrentoperatorScreen.textContent += number;
  }
}





