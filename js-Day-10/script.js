// lavel -2
//Q1) Write a Higher-Order function runTwise(fn) that takes another function and executes it two time

// function runTwise(fn){
// fn();
// fn()

// }
// runTwise(function(){
//   console.log("hello")
// })

//Q2) Create one pure function that always return the same output for given input, and one impute function using a globle variable

// function pure(a,b){
//   console.log(a+b)
// }

// pure(5,5);
// pure(5,5)

// let impure = 0;
// function imp(globle){
//   impure++;
// console.log(impure + globle)
// }

// imp(2,2);
// imp(2,2)

//Q3) Write a function that uses object destructuring inside parameter ton extract and print name and age

// function destructuring ({name,age}){
// console.log(name,age)
// }
// destructuring({name:"Gilman", age:21})

//Q4) Demonstrate the difference between normal function and arrow function when used as object method (this issue)
// let obj = {
//   name:"gilman",
//   email:"a@a.a",
//   fnc:function(){
//     console.log(this)
//     let inner= ()=>{
//       console.log(this)
//     }
//     inner()
//   },
 
// }
// console.log(obj.fnc());



//Q5) Given an aray of numbers, use map() to create a new array where each number is square.

// let arr = [1,2,3,4,5,];
// let ar = arr.map(function(val){
//   return val*val;
// })

// Q6) Use filter() to get only even numbers from an array
//  let arr = [1,2,3,4,5,6,7,8,];
//  let even = arr.filter(function(val){
//   return val%2===0;
//  })

//Q7) Use reduce() to find the total salary from an array of numbers[1000,2000,3000];

// let arr = [1000,2000,3000];
// let ar = arr.reduce((acc,val)=>{
//   return acc+val
// },0)

// Q8) Create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 char)

// let arr = ["Gilman","Rahebar,Alman","kaif","Zi"];

// let ar = arr.some(function(val){
//  console.log(val.length>3)
// })

// let ar = arr.every(function(val){
//   return val.length>3
//  })

//Q9) Create an object user and test the behavior of object.freeze() and object.seal() adding/ changing keys.

// let user={
//   name:"gilman",
//   age:21,
// }
// Object.freeze(user)
// Object.seal(user);

//Q10) Create a nested object (user address city) and access the city name inside it

// let obj = {
//   user:{
// name:"Gilman",
//   address:{
// city:"Jalna",
//   },
// },
// }
// let {name}=obj.user
// console.log(name)