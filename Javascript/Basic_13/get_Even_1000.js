//Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.

function getEven1000(){
    //Declare a sum variable that starts at 0
    let sum = 0;
    //Create a for loop that iterates through 1 and 1000 - it should add the sum of all even numbers
    for(var i = 1; i < 1001; i++){
        if(i % 2 === 0){
            sum += i;
        }
    }
    console.log("The sum is: " + sum);
}
getEven1000();