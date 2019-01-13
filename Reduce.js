var arr =[1,2,13,4,5];
//  Basic technics ---------------------------------
function sum (arr){
  var sum = 0;
  for(let val of arr){
     sum += val;
  }
  return sum;
}
var output = sum(arr);
console.log(output);

//-----------------------------------------------------
// function sum(acc,val){
//   //console.log(acc);
//   return acc + val;
// }
// var result = arr.reduce(sum,0);
// console.log(result);

//----------------------------------
// Reduce the function

// var result = arr.reduce((acc,val) => acc + val,0);
// console.log(result);

// --------------------------------------------
//

// EXAMPLE 2


//------------------------------------
// function findMax(acc,val){
//   if(acc < val){
//     acc = val;
//   }
//  return acc;
// }
// let bigest = arr.reduce(findMax);
// console.log(bigest);

//------------------------------------

// let bigest = arr.reduce((acc,val) => {
//   if(acc < val){
//     acc = val;
//   }
//  return acc;
//  });
// console.log(bigest);

//-----------------------------------------------
// let bigest = arr.reduce((a,b) => a > b ? a : b); 
// console.log(bigest);
