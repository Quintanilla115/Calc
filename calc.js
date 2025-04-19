
let CurrentDisplay = " "
let PreviousDisplay = ''
let CurrentOperatorScreen = ''
let shouldResetScreen = false
let score = 0

const numberButtons = document.querySelectorAll('[data-number]')
const buttons = document.querySelectorAll("button");



buttons.forEach((button) => {
  
  button.addEventListener("click", (e) => {
    appendNumber(e.target.textContent);
  });
});

function appendNumber(number) {
  CurrentDisplay += number

  console.log(typeof CurrentDisplay);
  console.log(CurrentDisplay)
}

function updateScreen(){
  
}