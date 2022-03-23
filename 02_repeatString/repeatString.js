

const repeatString = function(string, num) {
    let holdString = ""
    if (num >=0){
        for (i = 0; i < num; i++){
            holdString += string;
        }
        return holdString;
    } else{
        return "ERROR"
    }
};


// Do not edit below this line
module.exports = repeatString;
