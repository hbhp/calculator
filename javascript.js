let val1 = "";
let val2 = "";
let whichSum = 0;
let operation = "";
let answer = 0;

function roundedAnswer(answer){
    if(answer % 1 != 0){
        return answer.toFixed(3);
    }
    else {
        return answer
    }
    }

const numbers = document.querySelectorAll('button.numB'); 
numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (whichSum === 0){
            if (val1.includes(".") && e.target.innerText === '.'){
                ;
            }
            else{
            if (val1 === "" && e.target.innerText === '.'){
                    val1 = "0."
                    document.getElementById('val1').innerHTML = val1;
                    }
                    else{
                val1 += e.target.innerText;
                document.getElementById('val1').innerHTML = val1;
                console.log(val1);
                    }       
                }
        } else if (whichSum > 0){
            if (val2.includes(".") && e.target.innerText === '.'){
                ;
            }
            else if (operator = ""){
                ;
            }
            else{  
            if (val2 === "" && e.target.innerText === '.'){
                val2 = "0"
            }else{
            }
            val2 += e.target.innerText;
            document.getElementById('val2').innerHTML = val2
            console.log(val2)
            }}})
    });

const operators = document.querySelectorAll('button.operator')
operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        whichSum++;
        operation = e.target.innerText;
        console.log(e.target.innerText);
        document.getElementById('operation').innerHTML = operation
        if (val1 != "" & val2 !=""){    
            if (operation === '÷' && val2 === "0"){
                alert('To infinity and beyond ')
            }
            else if (operation === '÷'){
                let answer = parseFloat(val1)/parseFloat(val2);
                document.getElementById('answer').innerHTML = roundedAnswer(answer);
                val1 = roundedAnswer(answer);
                document.getElementById('val1').innerHTML = val1;
                val2 = ""
                document.getElementById('operation').innerHTML = "";
                document.getElementById('val2').innerHTML = "";
            }
            else if (operation === 'x'){
                let answer = parseFloat(val1)*parseFloat(val2);
                document.getElementById('answer').innerHTML = roundedAnswer(answer);
                val1 = roundedAnswer(answer);
                document.getElementById('val1').innerHTML = val1;
                val2 = ""
                document.getElementById('operation').innerHTML = "";
                document.getElementById('val2').innerHTML = "";
            }
            else if (operation === '-'){
                let answer = parseFloat(val1)-parseFloat(val2);
                document.getElementById('answer').innerHTML = roundedAnswer(answer);
                val1 = roundedAnswer(answer);
                document.getElementById('val1').innerHTML = val1;
                val2 = ""
                document.getElementById('operation').innerHTML = "";
                document.getElementById('val2').innerHTML = "";
            } else if (operation === '+'){
                let answer = parseFloat(val1)+parseFloat(val2);
                document.getElementById('answer').innerHTML = roundedAnswer(answer);
                val1 = roundedAnswer(answer);
                document.getElementById('val1').innerHTML = val1;
                val2 = ""
                document.getElementById('operation').innerHTML = "";
                document.getElementById('val2').innerHTML = "";
            } else{
            }
        }
        else{}

    });
});

const equals = document.querySelectorAll('button.equals'); 
equals.forEach((button) => {
    button.addEventListener('click', (e) => {
            if (operation === '÷' && val2 === "0"){
                alert('To infinity and beyond ')
            }
            else if (operation === '÷'){
                let answer = parseFloat(val1)/parseFloat(val2);
                document.getElementById('answer').innerHTML = roundedAnswer(answer);
                val1 = roundedAnswer(answer);
                document.getElementById('val1').innerHTML = val1;
                val2 = ""
                document.getElementById('operation').innerHTML = "";
                document.getElementById('val2').innerHTML = "";
            }
            else if (operation === 'x'){
                let answer = parseFloat(val1)*parseFloat(val2);
                document.getElementById('answer').innerHTML = roundedAnswer(answer);
                val1 = roundedAnswer(answer);
                document.getElementById('val1').innerHTML = val1;
                val2 = ""
                document.getElementById('operation').innerHTML = "";
                document.getElementById('val2').innerHTML = "";
            }
            else if (operation === '-'){
                let answer = parseFloat(val1)-parseFloat(val2);
                document.getElementById('answer').innerHTML = roundedAnswer(answer);
                console.log(parseFloat(val1)-parseFloat(val2))
                val1 = roundedAnswer(answer);
                document.getElementById('val1').innerHTML = val1;
                val2 = ""
                document.getElementById('operation').innerHTML = "";
                document.getElementById('val2').innerHTML = "";
            } else if (operation === '+'){
                let answer = parseFloat(val1)+parseFloat(val2);
                document.getElementById('answer').innerHTML = roundedAnswer(answer);
                console.log(parseFloat(val1)+parseFloat(val2))
                val1 = roundedAnswer(answer);
                document.getElementById('val1').innerHTML = val1;
                val2 = ""
                document.getElementById('operation').innerHTML = "";
                document.getElementById('val2').innerHTML = "";
            } else{
            }
        }
    )});
    
const clear = document.querySelectorAll('button.clear'); 
clear.forEach((button) => {
    button.addEventListener('click', (e) => {
        val1 = "";
        val2 = "";
        whichSum = 0;
        operation = "";
        answer = 0;
        document.getElementById('answer').innerHTML = "";
        document.getElementById('operation').innerHTML = "";
        document.getElementById('val1').innerHTML = "";
        document.getElementById('val2').innerHTML = "";
        });
});

const del = document.querySelectorAll('button.del'); 
del.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (whichSum === 0){
            val1 = val1.slice(0, - 1)
            document.getElementById('val1').innerHTML = val1;
        } else if (whichSum > 0){
            val2 = val2.slice(0, - 1)
            document.getElementById('val2').innerHTML = val2;
        }
    })
});;