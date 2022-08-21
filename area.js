const areaInputs = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

areaBtn.addEventListener("click", calculateArea)

function calculateArea() {
    const baseWithHeight = multiplyBaseWithHeight(Number(areaInputs[0].value), Number(areaInputs[1].value));
    const areaOfTriangle = (1 / 2 * baseWithHeight);
    outputEl.innerText = "The area of the triangle is  " + areaOfTriangle +" cm²";
}

function multiplyBaseWithHeight(b, h) {
    const baseWithHeight = b * h;
    return baseWithHeight;
}