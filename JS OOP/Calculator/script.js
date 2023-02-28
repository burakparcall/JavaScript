let ui = new UI();

let number = 0;

ui.process.innerHTML = `${number}`;

ui.buttonOne.addEventListener("click", function() {
    let number = 1;
    ui.process.innerHTML = "";
    ui.screen.innerHTML += number;
})

ui.buttonTwo.addEventListener("click", function() {
    let number = 2;
    ui.process.innerHTML = "";
    ui.screen.innerHTML += number;
})

ui.buttonThree.addEventListener("click", function() {
    let number = 3;
    ui.process.innerHTML = "";
    ui.screen.innerHTML += number;
})

ui.buttonFour.addEventListener("click", function() {
    let number = 4;
    ui.process.innerHTML = "";
    ui.screen.innerHTML += number;
} )

ui.buttonFive.addEventListener("click", function() {
    let number = 5;
    ui.process.innerHTML = "";
    ui.screen.innerHTML += number;
} )

ui.buttonSix.addEventListener("click", function() {
    let number = 6;
    ui.process.innerHTML = "";
    ui.screen.innerHTML += number;
} )

ui.buttonSeven.addEventListener("click", function() {
    let number = 7;
    ui.process.innerHTML = "";
    ui.screen.innerHTML += number;
} )

ui.buttonEight.addEventListener("click", function() {
    let number = 8;
    ui.process.innerHTML = "";
    ui.screen.innerHTML += number;
} )

ui.buttonNine.addEventListener("click", function() {
    let number = 9;
    ui.process.innerHTML = "";
    ui.screen.innerHTML += number;
} )

ui.buttonZero.addEventListener("click", function() {
    let number = 0;
    ui.process.innerHTML = "";
    ui.screen.innerHTML += number;
} )

ui.buttonPlus.addEventListener("click", function() {
   let plus = "+";

   ui.screen.innerHTML += plus;
})

ui.buttonMinus.addEventListener("click", function() {
    let minus = "-";

    ui.screen.innerHTML += minus;
})

ui.buttonDivide.addEventListener("click", function() {
    let divide = "/";

    ui.screen.innerHTML += divide;
})

ui.buttonMultiplication.addEventListener("click", function() {
    let multiplication = "*";

    ui.screen.innerHTML += multiplication;
})

ui.buttonEqual.addEventListener("click", function() {
    let equal = "=";

    ui.screen.innerHTML += equal;
})

function clear() {    
    document.querySelector(".process").value="";
}

