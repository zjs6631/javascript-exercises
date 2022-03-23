const sumAll = function(i, j) {
   let sum = 0;
   if ((typeof i != 'number') || (typeof j != 'number') || i < 0 || j < 0){
      return 'ERROR';
   } else if (i > j) {
      while (i > j){
         sum+=i;
         i-=1;
      }
      sum+=j;
      return sum;
   } else if (i < j){
      while (i < j){
         sum+=i;
         i+=1;
      } 
      sum+=j;
      return sum;
   }
}

// Do not edit below this line
module.exports = sumAll;
