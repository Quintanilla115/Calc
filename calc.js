
let CurrentDisplay = ''
let PreviousDisplay = ''
let shouldResetScreen = false
let Opperator = null

const numberButtons = document.querySelectorAll('[data-number]')
const buttons = document.querySelectorAll("button");
const CurrentOperatorScreen = document.getElementById('CurrentDisplay')
const ClearButton = document.getElementById('Clear')



buttons.forEach((button) => {
  
  button.addEventListener("click", (e) => {
    appendNumber(e.target.textContent);
  });
});

function appendNumber(number) {
  CurrentDisplay += number

  console.log(typeof CurrentDisplay);
  console.log(CurrentDisplay)
  CurrentOperatorScreen.textContent +=number
}

function updateScreen(){}


function appendNumber1(number){
  if (number === 1||2||3||4||5||6||7||8||9||0){
    appendNumber
  }
  if (number === '*' || '/' || '-'|| '+' ){
    if (number === '*'){
      Opperator = multiply
    }
    if (number === '/'){
      Opperator = divide
    }
    if (number === '-'){
      Opperator = subtract
  }
  if (number === '+'){
    Opperator = addition
  }
}}