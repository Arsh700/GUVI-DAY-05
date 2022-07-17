/***Anonymous Function***/

/*Print odd numbers in an array*/

// var result =function(input){
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
// var result = function(input){
// for (let i of input){
//     userInput+= i.toUpperCase();
// }
// return userInput;
// }

// console.log(result("Iam a student of guvi"));

/*Sum of all numbers in an array*/

// var result =function(input){
// let total =0;
// input.forEach(element => {
   
//   total=parseInt(total)+parseInt(element);
// });
// return total;
// }

// console.log(result([1,2,54,68,94]));

/*Return all the prime numbers in an array*/

// var result = function(input){

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


const number = 100;

var primeNumber = function(number){

let isPrime = true;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

else {
    console.log("The number is not a prime number.");
}}
primeNumber(number);

/*Return all the palidrom in an array*/


// var result = function(input)
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

/* Return Median of the two sorted array of the same size */

// var result=function(arr1, arr2)
// {
// var concat=arr1.concat(arr2);
// concat.sort(function(a,b){return a - b});
// console.log(concat);
// var length = concat.length;
// if(length%2!=0)
// {
// return concat[(length/2)-.5];
// }
// else
// {
// return (concat[length/2]+concat[(length/2)-1])/2
// }
// }

// var arr1 = [2,5,6,8,9,11]
// var arr2 = [3,4,7]

// console.log(result(arr1,arr2));

/*Remove Duplicates from an Array */

// var removeDuplicates = function(input){

//     let chars = input;

// let uniqueChars = [];
// chars.forEach((c) => {
//     if (!uniqueChars.includes(c)) {
//         uniqueChars.push(c);
//     }
// });

// console.log(uniqueChars);
// }
// removeDuplicates([2,6,4,2,4,9]);

/* Rotate an array by K times */

// var result = function(input,k)
// {

//     if((typeof input)== (typeof 1))
//     {
//     var no = input;
//     var rem = 0;
//     for(let i = 0;i<=k;i++){
//     while(no>0)
//     {
//     rem = (rem*10) + (no%10);
//     no = Math.round((no/10));
//     }
//     no=rem;
//     if(i!=k){
//     rem=0;
//     }
//     }
//     console.log(rem)
//     }
//     else
//     {
//     let userInput=[];
//     for(let i = 0; i<k; i++)
//     {
//         userInput=input.reverse();
//         input=userInput;

//     }
//     console.log(userInput)
//     }
// }
// result([1,2,3,4,5],5);