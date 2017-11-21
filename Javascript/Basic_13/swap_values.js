//Write a function that will swap the first and last values of any given array. 
//The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapNums(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr);
}

swapNums([0,2,4]);
swapNums([1,5,10,-2]);
swapNums([10,20]);