const findTheOldest = function(arr) {
    let ageList = [];//array to hold ages
    //for loop to calc ages based on birth and death
    for (i=0; i<arr.length; i++){
        let birth = arr[i]['yearOfBirth'];
        let death = arr[i]['yearOfDeath'];
        if (death == undefined){ //handles living people
            let d = new Date();
            death = d.getFullYear();
            //console.log(death);
        }
        //console.log(death);
        
        age = death - birth; //calc age
        ageList[i] = age; //assign age to ageList
        
    }
    //console.log(ageList);
    let oldest = 0; //set oldest to 0
    for (j = 0; j < ageList.length; j++){
        if (ageList[j] > oldest){
            oldest = ageList[j];
            //find oldest in ageList
        }
        
    }
    //console.log(oldest);

    let indexOldest = ageList.indexOf(oldest); //get index of oldest
    //console.log(indexOldest);
    /*
    let oldestName = arr[indexOldest]['name'];
    oldestName = oldestName.toString();
    */
    //console.log(typeof oldestName);
    //console.log(oldestName);
    return arr[indexOldest];

};

// Do not edit below this line
module.exports = findTheOldest;
