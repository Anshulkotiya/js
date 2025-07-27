const marvel_heros=["Thor","Ironman","Spiderman"]

const dc_heros=["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros) // it add dc array inside marvel array
 
 let d=[1,2,3,4]
let f=[5,6,7]

let a=d.concat(f); // it can add two array

let b=[...d,...f]  //spreed

// console.log(b);

let other_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

let another_arr=other_arr.flat(Infinity)

// console.log(another_arr);


console.log(Array.isArray("anshul"));
console.log(Array.from("anshul"));
console.log(Array.from({name:"anshul"})); // if not form array then it give empty array

let Score1=100
let Score2=200
let Score3=300

console.log(Array.of(Score1,Score2,Score3)); // to form an array of give data

