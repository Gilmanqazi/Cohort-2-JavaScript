// Q1) Write a function sayHello() that prints "Hello Javascript",
// function sayHello (){
// return ("Hello Javascript")
// }

// console.log(sayHello())

// Q2) Create a function add (a,b) thath returns their sun and log the result

// function add(a,b){
//   return a+b
// }
// console.log(add(5,5))

// Q3) Write a function with a default parameter name = "Guest" that prints "Hi <name>"

// function Greating (Guest="Guest"){
// return(`Hi ${Guest}`)
// }
// console.log(Greating("Gilman"))

//Q4) Use rest parameter to make a function that adds unlimited numbers

// function UnlimitedNumbers(...nums){
// return nums.reduce(function(acc,val){
// return  acc + val
// },0)
// }
// console.log(UnlimitedNumbers(1,2,3,4,5,6,7,8))

// Q5) Create an IIFE that prints "I run instantly!"

// (function (){
//   console.log("I Run Instantly")
// })();

//Q6) Make a nested function where the inner one prints a variable from ther outer one;

// function parent(){
//   let a = 10; 
//     return function(){
// console.log(a)
//   }
// }
// parent()()

//Q7) Create an array of 5 Fruits. Add one at the end and remove one from the beginnig.

// let arr = ["Mango", "Apple", "Banana", "DragonFruit", "Kiwi"]
// arr.push("Orange");
// arr.shift()

//Q8) Use a for loop to print all elements of an array

// let arr = [1,2,3,4,5,6,7,]
// for(let i=0; i<arr.length;i++){
//   console.log(i)
// }

//Q9) Create an object person with key name,age,and,city, and print each kkay's value

// let person = {
//   name:"Gilman",
//   age:21,
//   city:"Jalna Maharashtra"
// }

//Three Alag Alag Ans Kes Sath
//pahele key and value dono print ho rahi hai
//dusre me value 
//tisre me key 
// for (let key in person){
//   console.log (`${key}: ${person[key]}`)
// }

// for (let key in person){
//   console.log (person[key])
// }

// for(let key in person){
//   console.log(key)
// }

//Q10) Use setTimeout() to log "Time's up!" after 2 second

// setTimeout(()=>{
//   console.log("Time's up!")
// },2000)