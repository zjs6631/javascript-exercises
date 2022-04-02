const getTheTitles = function(arr) {
    let titles = []; //create new array to hold results
    for (i = 0; i < arr.length; i++){ //use for loop to loop through
        //provided array
        titles[i] = arr[i]["title"]; //set each index to the value in the title attribute
        //for each obj
    }
    
    return titles; //return the array

};

// Do not edit below this line
module.exports = getTheTitles;
