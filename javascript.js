let val1 = "";
let val2 = "";
let operation = "";
let answer = 0;

const numbers = document.querySelectorAll('button.numB'); 
numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        val1 += e.target.innerText;
        document.getElementById('val1').innerHTML = val1;
    });
});

const operators = document.querySelectorAll('button.operator')
operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        operation = e.target.innerText;
        console.log(e.target.innerText);
        document.getElementById('operation').innerHTML = operation
        });
});

const equals = document.querySelectorAll('button.equals'); 
equals.forEach((button) => {
    button.addEventListener('click', (e) => {
//        answer = val1                             LINE OF CODE WHICH RUNS THE EQUATION
        document.getElementById('val1').innerHTML = 'The answer!';
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
