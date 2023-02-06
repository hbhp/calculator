const add = function(a, b) {
	console.log(a+b);
};

const subtract = function(a, b) {
	console.log (a-b);
};

const divide = function(a ,b){
    console.log(a/b);
}

const multiply = function(args) {
  let total = 1;
  for (let i = 0; i < args.length; i++){
    total *= args[i];
  }
  console.log(parseFloat(total));
}