const removeFromArray = function(arr, num, num2, num3, num4) {
    
    let i = 0
    while (i < arr.length){
        if (arr[i] === num || arr[i]=== num2 || arr[i] === num3 || arr[i] === num4){
            arr.splice(i, 1)
        } else {
            ++i
        }
    }
    return arr; 
}
// Do not edit below this line
module.exports = removeFromArray;
