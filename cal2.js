//const Button = document.querySelector("button");

//Button.onclick= alertFunction;


const buttons = document.querySelectorAll("button");

let score = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        score ++ ;
        console.log(score);
      });
    });




function updateScore(){
    updateScore = score;
}