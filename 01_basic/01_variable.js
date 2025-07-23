const accountId=5123;

 let accountEmail="anshul13@google.com"; // you can update it but note re-declared it is block scope 


var accountPassword="1324"


accountCity="jaipur"

let accountState;  // undefine


// accountId=125;  // use cannot change the value if you are using const keyword for declare a variable.


 accountEmail="ak.kotiya@gmail.com";

accountPassword="12345"

accountCity="Noida"

console.log(accountId);

/*

pefer not to use var
because of issue in block scope and functional scope.

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

