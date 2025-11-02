// let age = prompt("Age Batao");

// if(age === null){
//   console.error("Cancle Daba Diya")
// } else if(age.trim()=== ""){
//   console.log("Sidha likh le Sahi se")
// } 
// else{
// age = Number(age.trim());
// if(isNaN(age)){
//   console.log("Oppps! You can Write Only Number")
// } else if(age>18){
//   console.log("You Can Vote")
// } else {
// console.log("You Are Not Eligible For Vote")
// }
// }

// Q1) print numbers from 1 to 10 and print each number,
// for (let i=1;i<=10;i++){
//   console.log(i)
// }

// Q2) print only evens number from 1 to 20 use loop and conditions to print even ones.
// for(let i=1;i<=20;i++){
//   if(i%2===0){
//     console.log(`${i} even`)
//   }
// }

// Q3) pritn numbers form 10 to 1 reverse loop with a decrement.
// for(let i=10;i>0;i--){
// console.log(i);

// }

// Q4) print the word "yes" 5 times repeat using a loop
// for (let i=1;i<6;i++){
//   console.log("yes")
// }

// Q5) print wheather numers form 1 to 10 are even or odd for each numbercheck:"even"-> "odd"
// for(let i=1;i<=10;i++){
//   if(i%2===0){
//     console.log(`${i}:even`)
//   } else {
//     console.log(`${i}:odd`)
//   }
// }

// Q6) ask user for a number and say if its positive or negative use prompi() and a conditions
// let num =Number(prompt("Enter Number"));
// if(num>0){
//   console.log(`${num} :positive`)
// } else{
//   console.log(`${num} :negative`)
// }

// Q7) ask user's age and check if eligible to vote if age >=18 ->"Eligible", ->"Not Eligible" 

// let age = prompt("Enter Your Age");
// if(age===null){
//   console.error("Aapne Cancle Kiya Hai")
// } else if(age.trim()===""){
//   console.log("Plz Enter Your Age")
// } 
// else{
//   age=Number(age.trim());
// if(isNaN(age)){
//     console.log("Oppps! You can Write Only Number")
//   } else if(age>18){
//     console.log("You Can Vote")
//   } else{
//     console.log("You Can't Vote");
    
//   }
// }

//Q8) Print Multiplication Table
// for(let i =1;i<=10;i++){
//   console.log(i *5)
// }

// Q9)  count how many numbers between 1 and 15 are greater than 8
      //  for(let i=1; i<=15;i++){
      //   if(i>8){
      //     console.log(i)
      //   }
      //  }

// Q10) Ask user for password and print access status hardcoded correct password. compare with user input
// let userPass= prompt("Enter Your PassWord");
// if(userPass.toLowerCase()==="Gilman123".toLowerCase()){
//   console.log("Correct Password")
// } else{
//   console.log("incorrect PassWord")
// }



//This Code is solved by GPt not ME And I can sove this code very confidently 
// const correctPass = "Gilman123";
// let attempts = 3;

// for (let i = 1; i <= attempts; i++) {
//   let userPass = prompt("Enter your password:");

//   if (userPass.toLowerCase() === correctPass.toLowerCase()) {
//     console.log("✅ Correct Password! Access Granted.");
//     break; // stop early if correct
//   } else {
//     if (i < attempts) {
//       console.log(`❌ Incorrect Password. Attempts left: ${attempts - i}`);
//     } else {
//       console.log("🚫 Account Locked! Too many failed attempts.");
//     }
//   }
// }

