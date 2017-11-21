//Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.

function get1To255(){
    //Make an empty array 
    let arr = [];
    //Make a for loop that loops through the array - it should start at 1 and end at 255
    for(var i = 1; i < 256; i++){
        arr.push(i);
    }
    console.log(arr);
}
get1To255();