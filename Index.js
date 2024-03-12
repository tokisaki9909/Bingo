console.log("Hello World.");

function generateRandomNumber () {
    // return random number 0 to 10;
    let randomNum = Math.floor(Math.random() * 15) + 1;

    // if...eles if... else statement
    //if (condition) {block to execute}
    //==, ! =, >, <, >=, < =, &&, ||

    if(randomNum >= 5){
       console.log(`Random Number is > = to 5`);
    } else {
       console.log(`Random Number is < = to 5`);
    }

    return console.log(randomNum);
}