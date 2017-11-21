//Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAvg(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log("The avg is: " + sum / arr.length);
}
findAvg([0,0,0]);
findAvg([1,3,5,7,20]);
findAvg([-3,4,8]);