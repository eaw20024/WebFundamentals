//Make a function that copies an array, ONLY accepting the items that are numbers.
//var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]

function numbersOnly(arr){
   var num_arr = [];
   var str_arr = [];
   var bool_arr = [];

   for(var i = 0; i < arr.length; i++){
       //Typeof for Numbers 
       if(typeof(arr[i]) == 'number'){
           num_arr.push(arr[i]);
       }
   }
      //Typeof for Strings
      for(var i = 0; i < arr.length; i++){
       if(typeof(arr[i]) == 'string'){
           str_arr.push(arr[i]);
       }
   }
      //Typeof for Booleans 
      for(var i = 0; i < arr.length; i++){
       if(typeof(arr[i]) == 'boolean'){
           bool_arr.push(arr[i]);
       }
   }

    console.log(num_arr);
    console.log(str_arr);
    console.log(bool_arr);
}

numbersOnly([false, 1, "apple", undefined, -3, "orange", 0.5, "red", true, {}, ""]);