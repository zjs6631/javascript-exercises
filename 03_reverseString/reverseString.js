

const reverseString = function(string) {
    let stringLength = string.length;
    let charList = []
    let i = 0
    for (stringLength; stringLength >= 0; stringLength--){
        charList[i] = string[stringLength]
        i++
    }

    let listLength = charList.length
    let j = 1
    let newString = ""
    for (j; j<listLength; j+=1){
        newString+=charList[j]
    }
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
