var arr = [1,2,3,4,5];

// Basics --------------------

function doubler(arr){
    var temp = [];
for(let elem of arr){
    temp.push(elem * 2);
}
return temp;
}
var output = doubler(arr);
console.log(output);

//--------------------------------------------------

// function doubler(elem){
// return elem * 2;
// }
// var output = arr.map(doubler);
// console.log(output);

// Make it sort ----------------------------------------

    // var output = arr.map(elem => elem * 2);
    // console.log(output);
