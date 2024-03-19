console.log("Hello World!")

let B = false,
 I = false, 
 N = false, 
 G = false, 
 O = false;
function newNumber (maxNumber){
let newNumber = Math.floor(Math.random() * maxNumber) + 1;
if(x <= 15)
{
    console.log(`New number is ${x} belongs to "B"`);
    B=true;
    BNum = x;
} else if (x >= 16 && x <= 30 ){
    console.log (`New number is ${x} belongs to "I"`);
    I= true;
    INum = x;
} else if (x >= 31 && x <=45 ) {
    console.log (`New number is ${x} belong to "N"`);
    N=true;
    NNum = x;
} else if ( x >= 46 && x  <= 60){
    console.log (`New number is ${x} belongs to "G"`);
    G=true;
    GNum = x;
}else if ( x >=  61 && x <= 75){
    console.log (`New Number is ${x} belongs to "0"`);
    O=true;
    ONum = x;
}else{
    console.log(`New number ${x} is invalid!`);   
}

if (B = true && I == true && N == true && G == true && O == true){
    console.log(`BINGOOOO!!!!`);
  }
}