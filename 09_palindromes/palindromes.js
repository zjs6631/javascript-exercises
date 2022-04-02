const palindromes = function (str) {
    str = str.toString() //convert input to string

    for (i = 0; i < str.length; i++){
        //use a for loop to loop through and get rid of whitespace
        //and characters not calculated in palindromes
        str = str.replace(" ", "");
        str = str.replace(",", "");
        str = str.replace(".", "");
        str = str.replace("!", "");
    }
    //convert the string to lowercase
    str = str.toLowerCase()
    //split string into an array
    let splitString = str.split("")
    //revserse array
    splitString = splitString.reverse();
    //join array back together with no space
    let reverseString = splitString.join("")
    //if the new str == the original input then true
    if (str == reverseString){
        return true;
    } else {
        return false; //else false
    }

};

// Do not edit below this line
module.exports = palindromes;
