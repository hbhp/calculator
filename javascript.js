let val1 = ""
let val2 = ""

const buttons = document.querySelectorAll('button.numB'); 

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        val1 += e.target.innerText
        console.log(val1)           //CURRENTLY GOING TO CONSOLE - REMEMBER TO 'RETURN'
    });
});

const add = function (a,b){
    return a+b;
}

const subtract = function (a,b){
    return a-b;
}

const divide = function (a,b){
    return a/b;
}

const multiply = function (a,b){
    return a*b;
}

const operate = function(a, b, operation) {
    // let a = null;
    // let b = null; 
    switch(operation) {
        case '+':
            return add(a,b) 
        case '-':
            return subtract(a,b)
        case '÷':
            return divide (a,b)
        case 'x':
           return multiply (a,b)
    }
}
