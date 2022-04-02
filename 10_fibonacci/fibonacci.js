const fibonacci = function(num) {
    num = parseInt(num); //turn input into a int (to allow strings)
    if (num < 1){
        return "OOPS"; //if statement to make sure value is positive
    }
    if (num == 1 || num == 2){
        return 1; //if input is 1 or 2 then fib number is 1
    } else {
        return fibonacci(num-1) + fibonacci(num-2); //else recursively call
        //fib function on the previous numbers
        //creates a call stack and then pops off the top of the stack
        //to return the answer
    }

};

// Do not edit below this line
module.exports = fibonacci;
