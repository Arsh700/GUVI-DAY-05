/***Arrow Function***/

/*Print odd numbers in an array*/

// var result =input=>{
// input.forEach(element => {
//     if(element % 2 != 0)
//     {console.log(`The number ${element} is odd number`);}
//     else 
//     {console.log(`The number ${element} is even number`);}
// });

// }

// console.log(result([34,51,98,65,984,648]))

/*Convert all strings to title caps in a string array*/
// var userInput =""
// var result = input =>{
// for (let i of input){
//     userInput+= i.toUpperCase();
// }
// return userInput;
// }

// console.log(result("Iam a student of guvi"));

/*Sum of all numbers in an array*/

// var result =input =>{
// let total =0;
// input.forEach(element => {
   
//   total=parseInt(total)+parseInt(element);
// });
// return total;
// }

// console.log(result([1,2,54,68,94]));

/*Return all the prime numbers in an array*/

// var result = input =>{

//     for(let i = 2;i <input;i++)
//     {
// if(i%2==0)
// {
// console.log(`${i}Not an prime number`);
// }
// else
// {
// console.log(`${i} It is a prime number`);
// }
//     }
// }

// result(100);

/*program to check if a number is prime or not*/

// var userInput= input =>{
// const number = input;
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }


// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }
// }
// userInput(456);

/*Return all the palidrom in an array*/


// var result = input =>
// {
//     var no = input;
//     var palidrom =input;
//     let rem = 0;
//     while(no>0)
//     {
// console.log(rem);
// rem = (rem*10) + (no%10);
// console.log(rem);
// no = Math.round((no/10));
// console.log(no)
//     }
// if(input == palidrom)
// console.log("Palidrom");
// else 
// console.log("Not palidrom");
// }
// result(1221);
