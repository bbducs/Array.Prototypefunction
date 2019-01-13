 //FILTER FUNCTION ----
 let arr = [5,4,9,2,1];
 
 // basics--------------
 function isEven(arr){
     var temp = [];
     for(let elem of arr){
         if(elem % 2 !== 0){
             temp.push(elem);
         }
     }
     return temp;
 }
 var output = isEven(arr);
 console.log(output);
 
 
 
 
 // --------------------------
 
//  function isEven(num){
//    return (num % 2 == 0); 
//  }
//   var result = arr.filter(isEven);
//   console.log(result);

// -----------------------------------

//// (num) =>  (num % 2 == 0)


//   var result = arr.filter((num) =>  (num % 2 == 0));
//   console.log(result);



