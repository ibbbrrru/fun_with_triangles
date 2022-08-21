const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-button");
const outputE1 = document.querySelector("#output");

isTriangleButton.addEventListener("click", isTriangle)

function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    //console.log(sumOfAngles);
    if(sumOfAngles === 180){
        // console.log("yay, The angles form a triangle");
        outputE1.innerText = "yay, The angles form a triangle";
    }else{
        // console.log("oh oh! The angles don't form a triangle");
        outputE1.innerText = "oh oh! The angles don't form a triangle";
    }  
    
}