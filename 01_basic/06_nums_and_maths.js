const score = 400

// console.log(score);

const balance = new Number(100)

// console.log(balance);


// console.log (balance.toString());
// console.log (balance.toString().length); //=> 3

// console.log(balance.toFixed(2)); //  to add how many number digit after decimal (2)  => 100.00

const otherNumber=123.8656

// console.log(otherNumber.toPrecision(3))   // return a string  and convert a value or number according to given value into presise form 

const hundreds=1000000

// console.log(hundreds.toLocaleString('en-IN')); // it seprate a number into U.S form ex- 1,000,000 we can convert into indian number form also ex-(10,00,000)


// //------------ Maths---------

// console.log(Math);

// console.log(Math.abs(-4)); // it converted into absolute value (-4)=>4 , (4)=>4 

// console.log(Math.round(4.3)); // it converted into round of  value (4.3)=>4 , (4.6)=>5 

// console.log(Math.ceil(4.2));  // it  mean it convert a upper round of vakue (4.3) => 5  , (4.6)=>5
// console.log(Math.floor(4.9));  // it  mean it convert a lower round of vakue (4.3) => 4  , (4.6)=>4

// console.log(Math.min(4,3,6,8));  // to find minimum value from given value  =>3
// console.log(Math.max(4,3,6,8));  // to find maximum value from given value  =>8

console.log(Math.random());  // to give random value from given value between from 0 to 1

console.log((Math.random()*10)+1);  // to give random value from given value  

const min=10
const max=20

console.log (Math.floor(Math.random() * ( max - min + 1))+min);