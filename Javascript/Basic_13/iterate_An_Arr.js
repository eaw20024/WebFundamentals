//Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)

function iterateAnArr(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(arr);
}
iterateAnArr("The sum is " + [1,2,5]);
iterateAnArr("The sum is " + [-5,2,5,12]);