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
    let a = null;
    let b = null; 
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