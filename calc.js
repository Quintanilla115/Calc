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
  let operator = '';
  let previousValue = '';
  let currentValue = '';



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


// event listeners

window.addEventListener('keydown', handleKeyboardInput)
equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)
pointButton.addEventListener('click', appendPoint)


document.addEventListener("DOMContentLoaded", function){
  let clear = document.querySelector("#Clear-btn")
  let equal = document.querySelector(".equals")
  let decimal = document.querySelector(".decimal")

  let numbers = document.querySelectorAll(".number")
  let operators = document.querySelectorAll(".operator")

  let previousScreen = document.querySelector(".previous")
  let currentScreen = document.querySelector(".current")
  
  numbers.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue;
  }))
}

function handleNumber (num){
  currentValue += num;
}