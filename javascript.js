let val1 = ""
let val2 = ""
let answer = 0

const buttons = document.querySelectorAll('button.numB'); 
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        val1 += e.target.innerText
        document.getElementById('val1').innerHTML = val1;
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
