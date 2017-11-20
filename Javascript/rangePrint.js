function printRange(a, b, c) {
   var counter = "";
   for(var i = a; i < b; i+=c){
      console.log(i); 
   }

}
printRange(2,10,8);

//Range in Arrays
// function printRange(a, b, c) {
//    var counter = [];
//    for(var i = a; i < b; i+=c){
//       counter.push(i); 
//    }
//    console.log(counter);
// }
// printRange(2,10,2);