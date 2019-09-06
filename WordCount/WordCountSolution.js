// function wordCount(arrayOfStrings) {
//     let newmap = new Map();
//     let arr = [];
    
//     let fish;
//     for(let i = 0; i < arrayOfStrings.length; i++){
//       if(arr.includes(arrayOfStrings[i]) != true){
//       fish = arrayOfStrings.filter(x => x == arrayOfStrings[i]);
//         newmap.set(arrayOfStrings[i],fish.length);
//     }
//   }
//     return newmap;
//   }

// module.exports = wordCount;

function wordCount(arrayOfStrings) {
    let newmap = [];
    let arr = [];
    
    let fish;
    for(let i = 0; i < arrayOfStrings.length; i++){
      if(arr.includes(arrayOfStrings[i]) != true){
      fish = arrayOfStrings.filter(x => x == arrayOfStrings[i]);
        newmap.push(`{${arrayOfStrings[i]} : ${fish.length}}`);
    }
  }
    return newmap;
  }

module.exports = wordCount;