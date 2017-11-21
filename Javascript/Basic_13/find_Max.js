//Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log("The max is: " + max);
}
findMax([-3,3,5,7]);
findMax([300,2,200,5]);
findMax([1]);
