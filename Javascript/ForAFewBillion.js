var days = 0;
for (var num = 0.01; num < Infinity; num *= 2){
    days = days + 1;
    console.log("Day"+ days + ":" + " " + "$" + num);
}