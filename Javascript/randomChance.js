function playSlotMachine(numOfQuarters){
    console.log("Welcome to the Random Chance - Slot Machine");
    console.log("You have just depositied " + numOfQuarters + " quarter/s");

    //Slot Machine 
    if(numOfQuarters <= 0 || numOfQuarters == undefined){
        //If you deposit no coins
        console.log("Sorry, please deposit coins in the machine");
    } else if(numOfQuarters <= 4 || numOfQuarters >= 1){
        //If you deposit 1 to 4 coins - You can win 1 to 4 coins 
        var totalQuartersWon = Math.trunc(Math.random() * 5)
        console.log("You have won " + totalQuartersWon + " quarter/s");
    } else if(numOfQuarters <= 7 || numOfQuarters >= 5){ 
        //If you deposit 5 to 7 coins - You can win 1 to 7 coins 
        totalQuartersWon = Math.trunc(Math.random() * 8)
        console.log("You have won " + totalQuartersWon + " quarter/s");
    } else if(numOfQuarters <= 10 || numOfQuarters >= 8){
        //If you deposit 8 to 10 coins - You can win 1 to 10 coins  
        totalQuartersWon = Math.trunc(Math.random() * 11)
        console.log("You have won " + totalQuartersWon + " quarter/s");
    } else if(numOfQuarters >= 11){
        console.log("Sorry you can only deposit 10 or fewer coins")
    } else {
        return numOfQuarters += totalQuartersWon;
    }

    //Total Quarters Won
    console.log("You have a total of, " + totalQuartersWon + " quarter/s")

}
playSlotMachine(10);