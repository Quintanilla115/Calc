// Function to toggle night mode
function toggleNightMode() {
    const body = document.body;
    body.classList.toggle("night-mode");
  
    // Save the user's preference to localStorage
    if (body.classList.contains("night-mode")) {
      localStorage.setItem("nightMode", "enabled");
    } else {
      localStorage.setItem("nightMode", "disabled");
    }
  }
  
  // Check the user's preference on page load
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("nightMode") === "enabled") {
      document.body.classList.add("night-mode");
    }
  });

  //Start here, maybe add dark mode to end 
  //setting default
  let x = ''
  let y = ''
  let currentOperation = null
  let currentOperationScreen = false



  //Functions

  function multiply(X , y) {
    return X * y;
  }

  function divide (x , y){
    return x/y;
  }

  function addition ( x , y ){
    return  x + y;
  }

  function subtract (x , y ) {
    return x - y;
  }

// query selectors
  const numberButtons = document.querySelectorAll('[data-number]')
  const operatorButtons = document.querySelectorAll('[data-operatior]')
  const equalsButton = document.querySelectorId('equalsBtn')
  const clearButton = document.querySelectorId('clearBtn')
  const deleteButton =  document.querySelectorId('deleteBtn')
  const pointButton = document.querySelectorId('pointBtn')
  const lastOperationScreen = document.querySelectorId('lastOperationScreen')
  const currurentOperationScreen = document.querySelectorId('currentOperationScreen')

// event listeners

window.addEventListener('keydown', handleKeyboardInput)
equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)
pointButton.addEventListener('click', appendPoint)


// append to screen?

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)