// Dates 

let myDate=new Date()

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate= new Date(2025,11,26)

// let myCreatedDate= new Date(2025,0,26,5,23)

// let myCreatedDate= new Date("2025-01-14")

let myCreatedDate= new Date("01-14-2025")

// console.log(myCreatedDate.toLocaleString());


let myTimeStamp=Date.now()

// console.log(myTimeStamp); // in milli second

// console.log(myCreatedDate.getTime()); 

// console.log(Math.floor(Date.now()/1000));  // now date divide by thousand for in  second 

let newDate=new Date()

console.log(newDate);  

console.log(newDate.getMonth());   // to find a particular date or day or month with help of to get , month  start from 0

// `${newDate.getDay()}` // and the time

console.log(newDate.toLocaleString('default',{
    weekday:"long",

    
}))




