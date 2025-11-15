let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let main = document.querySelector("main");
let box = document.querySelector(".box");

// All IPL Teams with Logos
let arr = [
  {
    Team: "RCB",
    Primary: "red",
    Secondary: "black",
    Fullname: "Royal Challengers Bangalore",
    Trophies: 1,
    Captain: "Virat Kohli",
  },
  {
    Team: "CSK",
    Primary: "yellow",
    Secondary: "blue",
    Fullname: "Chennai Super Kings",
    Trophies: 5,
    Captain: "MS Dhoni",
    
  },
  {
    Team: "DELHI",
    Primary: "blue",
    Secondary: "red",
    Fullname: "Delhi Capitals",
    Trophies: 0,
    Captain: "Rishabh Pant",

  },
  {
    Team: "GT",
    Primary: "navy",
    Secondary: "gold",
    Fullname: "Gujarat Titans",
    Trophies: 1,
    Captain: "Shubman Gill",
   
  },
  {
    Team: "KKR",
    Primary: "purple",
    Secondary: "gold",
    Fullname: "Kolkata Knight Riders",
    Trophies: 3,
    Captain: "Shreays Iyer",
  
  },
  {
    Team: "LSG",
    Primary: "skyblue",
    Secondary: "orange",
    Fullname: "Lucknow Super Giants",
    Trophies: 0,
    Captain: "KL Rahul",
    
  },
  {
    Team: "MI",
    Primary: "blue",
    Secondary: "gold",
    Fullname: "Mumbai Indians",
    Trophies: 5,
    Captain: "Hardik Pandya",

  },
  {
    Team: "PBKS",
    Primary: "red",
    Secondary: "silver",
    Fullname: "Punjab Kings",
    Trophies: 0,
    Captain: "Shikhar Dhawan",

  },
  {
    Team: "RR",
    Primary: "pink",
    Secondary: "blue",
    Fullname: "Rajasthan Royals",
    Trophies: 1,
    Captain: "Sanju Samson",

  },
  {
    Team: "SRH",
    Primary: "orange",
    Secondary: "black",
    Fullname: "Sunrisers Hyderabad",
    Trophies: 1,
    Captain: "Pat Cummins",
   
  },
];

btn.addEventListener("click", function () {
  let a = Math.floor(Math.random() * arr.length);

  h1.innerHTML = `Team: ${arr[a].Team}`;
  h2.innerHTML = `FullName: ${arr[a].Fullname}`;
  h3.innerHTML = `Trophies: ${arr[a].Trophies}`;
  h4.innerHTML = `Captain: ${arr[a].Captain}`;

  h1.style.backgroundColor = arr[a].Primary;
  main.style.backgroundColor = arr[a].Secondary;

  // Set Logo Background
  box.style.backgroundImage = `url(${arr[a].bgImg})`;
});
