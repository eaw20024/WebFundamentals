//Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. 
//(e.g. [1,5,10,-2] will become [1,25,100,4])

function squares(arr){
    let array = [];
    for(var i = 0; i < arr.length; i++){
        array.push(arr[i] * arr[i])
    }
    console.log("The squares of the numbers are: " + array)
}
squares([1,2,3]);
squares([-1,3,6]);
squares([0]);