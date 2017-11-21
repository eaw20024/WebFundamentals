//Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
//(e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr){
    let min = 0
    let max = 0
    let sum = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }

        if(arr[i] < min){
            min = arr[i];
        }

        sum = sum + arr[i];
    }

    let avg = sum / arr.length;
    let arr_new = ["The Max: " + max,"The min: " + min,"The avg: " + avg];
    console.log(arr_new);
}
maxMinAvg([0,2,4]);
maxMinAvg([1,5,10,-2]);
maxMinAvg([0]);