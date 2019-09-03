//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.


function canBalance(array) {
  //Type your solutions here
let arrayLen = array.length;
let arraySumComplete = array.reduce((a,c)=>{
 return a+c
},0);

if(arraySumComplete == 0){
    return -1
}else{
  let arraySum = arraySumComplete/2;
let num = 0;
let finalarr = [];
for(let i =0; i< arrayLen; i++){
  num += array[i];
  if(num == arraySum){
  array.splice(0,i+1)
  }
}

if(arrayLen != array.length){
    finalarr.push(arrayLen - array.length);
    finalarr.push(array.length);
    return finalarr;
}
else{
    return -1;
}
}

}

module.exports = canBalance;