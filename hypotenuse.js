const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

hypotenuseBtn.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;//OR// const sumOfSquares = a**2 + b**2;
    return sumOfSquares;
}

