console.log("Hello World.");

generateRandomNumber(15);

function generateRandomNumber (max) {
    // return random number 0 to 10;
    let randomNum = Math.floor(Math.random() * max) + 1;

    // if...eles if... else statement
    //if (condition) {block to execute}
    //==, ! =, >, <, >=, < =, &&, ||

    if(randomNum <= 15) {
      return console.log(`Random Number $(randomNum) is in B. 1 - 15`);
    } else if (randomNum > 16 && randomNum <  30) {
      return console.log(`Random Number $(randomNum) is in I. 16 - 30`);
    } else {
      return console.log(`Random Number is invalid.`);
    }
 }
    
