var HOUR = 8;
var MINUTE = 10;
var PERIOD = "AM";
var str = "It's ";

if(MINUTE > 30){
    str += "almost " + (HOUR + 1)
} else {
    str += "just after " + HOUR
}

if(PERIOD == "PM"){
    str += " in the evening."
} else {
    str += " in the morning."
}

console.log(str);

var str = "It's "

if(MINUTE == 5){
    str += "5 after " + HOUR
} else if(MINUTE == 15){
    str += "15 after " + HOUR
} else if(MINUTE == 30){
    str += "half past " + HOUR
} else if(MINUTE >= 30 || MINUTE <= 59){
    str += "almost " + (HOUR + 1)
} else {
    str += "just after "+ HOUR
}

if(PERIOD == "PM"){
    if(HOUR > 6){
        str += " in the evening"
    } else {
        str += " in the afternoon"
    }
 } else {
   str += " in the morning."
}

console.log(str);