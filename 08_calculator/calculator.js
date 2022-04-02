const add = function(num1, num2) {
	let res = num1 + num2;
  return res;
  
};

const subtract = function(num1, num2) {
	let res = num1 - num2;
  return res;
};

const sum = function(array) {
	let total = 0;
  for (i = 0; i < array.length; i++){
    total+=array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for (i=0; i < array.length; i++){
    total*=array[i];
  }
  return total;
};

const power = function(num1, num2) {
	let res = num1 ** num2;
  return res;
};

const factorial = function(num) {
	let res = 1;
  if (num == 1 || num == 0){
    return res;
  } 
  else {
    for (i = num; i > 0; i--){
      res = res * i;
    }
    return res;
  }
  
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
