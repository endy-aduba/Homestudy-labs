//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.


function canBalance(array) {
  //Type your solutions here
let arrayLen = array.length;
let arraySumComplete = array.reduce((a,c)=>{
  return a+c
},0);
let arraySum = arraySumComplete/2;
let newarray = [];
let finalarray = [];
for(let i = 0; i<arrayLen; i++){
  newarray.push[array[i]];
  let num = newarray.reduce((a,c)=>{
    a + c
  },0)
  if(num == arraySum){
    finalarray.push(i);
    finalarray.push(arrayLen - i);
  }
}
if(finalarray.toString() == ''){
  return -1
}
else{
  return finalarray;
}
}

module.exports = canBalance;