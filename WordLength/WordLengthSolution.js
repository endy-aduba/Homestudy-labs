function wordLength(arr) {
    //code goes here
    let finalmap = new Map();
    let newarr = [];
      for(let i = 0;i<arr.length; i++){
          if(newarr.indexOf(arr[i]) == -1){
              newarr.push(arr[i]);
          }
      }  
      for(let p =0;p<newarr.length; p++){
        finalmap.set(newarr[p].toLowerCase(),newarr[p].length);
      }  
        return finalmap;
      }
module.exports = wordLength;