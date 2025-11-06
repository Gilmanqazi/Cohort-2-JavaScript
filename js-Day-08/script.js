
//Q1)Allow only 3 attemps to enter correct password if user gets it right early, stop, if not ->"Account Locked"

// let pass = "gilman";
// let attempts = 0;
// let isAccount = false;

// let userpass = prompt("Enter Your Password");
// attempts++

// if(userpass === pass) isAccount = true;

// while(userpass !== pass){
//   if(attempts === 3) {
//     console.error("Account Blocked");
//    break;
//   }
  
// userpass = prompt("Enter Your Password");
// attempts++
// if(userpass === pass) isAccount = true;
// }

// if(isAccount === true){
//   console.log("Account Opened")
// }

  

//Q2) Ask user for words until they type "stop" . count how many times they typed "yes"

// let word;
// let count = 0;

// while(true){
// word = prompt("say something")
// if(word === "stop"){
//   break;
// }
// if(word === "yes"){
//   count++
// }
// } 
// console.log(`You Type "Yes" ${count} Times`)


//Q3)Print numbers divisible by 7 from 1 to 50 Use Modul0 % and loop
// for (let i=1 ;i<51;i++){
//   if(i%7===0){
//     console.log(i)
//   }
// }

//Q4)sum of all odd numbers from 1 to 30 Ad only numbers. Print final sum
// let sum = 0;
// for(let i=1;i<31;i++){
//   if(i%2===1){
//     sum = sum+i
//   }
// }
// console.log(sum)


//Q5)Keep asking numbers until user enters an even number Use while loop only if inputs is even.
// let num;
// while(true){
//    num = Number(prompt ("Enter Your Number"));
//   if(num%2===0 ){
//     console.log("stop"); break;
//   } 
// }



//Q6)print numbers between two user inputs input start and end using prompt () --> print all between
// let start = Number(prompt("start"));
// let end = Number(prompt("end"));

// if(start>end){
//   console.error("Start Cannot Bigger Than End")
// }

// for (let i =start; i<=end;i++){
//   console.log(i) 
// }


//Q7 Print only first 3 odd numbers from 1 to 20 use loop. stop with break after 3 odd prints

// let count = 0;
// for(let i = 1;i<21;i++){
//   if(count === 3){
// break;
//   }
// if(i%2===1){
//   console.log(i)
//   count++
// }
// }

//Q8 Ask User 5 Numbers. Count how many are positive Use loop + condition + counter.

// let positiveCount = 0;
// let nagativeCount = 0;
// let zeroCount = 0;

// for(let i=1;i<6;i++){
//  let  userNum = Number(prompt(`Enter A Number ${i}`))
//   if(userNum>0){
//     console.log(`${userNum} Is Positive`);
//     positiveCount++;
//   } else if(userNum<0){
//     console.log(`${userNum} Is Nagative`);
//     nagativeCount++;
//   } else if(userNum === 0){
//     console.log(`${userNum} Zero`);
//     zeroCount++
//   }
// }
// console.log(` Total Entered ${positiveCount} Positive Number`);
// console.log(` Total Entered ${nagativeCount} Nagative Number`);
// console.log(` Total Entered ${zeroCount} zero Number`);


// Q9) ATM Simulator - Allow 3 Withdrawal amount 3 start qwith $1000 balance. Ask withdrawal amount 3 time
// if enough balance -> deduct
//Else-> print "insufficient balance"

// let balance = 1000;
// let withdrawal = 0;

// while(true){
//   if(balance>0 && withdrawal < 3){
// amount = Number(prompt(`Enter Amount`)); 

// if(amount === 0){
//   console.error("Aapne Amount Nhi Dala Hai")
// }
// break; 
//   }
// };
// if(balance>amount){
//   balance-=amount; 
  
//   console.log(`Aapne Withdawal Kiya ${amount}`);
// } 

// else if(balance<amount){
//   console.log("Insufficient balance")
// } else if(balance === amount){
//   balance-=amount
// console.log(`Aapne Withdawal Kiya ${amount}`);
// }
// console.log(`Aapka Total Balance Hai ${balance}`);






