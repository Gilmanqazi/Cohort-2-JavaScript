let btn = document.querySelector("button")
let main = document.querySelector("main")

const appreciations = [
  "Harsh Sharma is an inspiration to everyone he meets.",
  "Sarthak Sharma's dedication and creativity are unmatched.",
  "Ankur Prajapati always brings positive energy and fresh ideas.",
  "Sheryians Coding School is shaping the future of coding education.",
  "Satwik from Sheryians is a brilliant mind with a humble personality.",
  "Harsh Sharma never backs down from a challenge.",
  "Sarthak Sharma's leadership skills are truly commendable.",
  "Ankur Prajapati is a perfect example of hard work paying off.",
  "The community at Sheryians Coding School feels like a family.",
  "Satwik at Sheryians always leads by example.",
  "Harsh Sharma's kindness and wisdom make him stand out.",
  "Sarthak Sharma’s analytical thinking is truly impressive.",
  "Ankur Prajapati is a problem-solving genius.",
  "Sheryians Coding School is the best place to kickstart your tech journey.",
  "Satwik’s passion for teaching makes learning enjoyable.",
  "Harsh Sharma always motivates others to do their best.",
  "Harsh Sharma is a role model for aspiring developers.",
  "Ankur Prajapati is always eager to help others succeed.",
  "Sheryians Coding School builds not just coders but confident creators.",
  "Harsh Sharma at Sheryians makes even the toughest topics easy to understand."
];


btn.addEventListener("click",function(){
  
  let h1 = document.createElement("h1")
  let div = document.createElement("div")

  let a = Math.floor(Math.random()*appreciations.length)
  let x = Math.random()*100;
  let y = Math.random()*100;

  let c1 = Math.floor(Math.random()*255)
  let c2 = Math.floor(Math.random()*255)
  let c3 = Math.floor(Math.random()*255)

  let c01 = Math.floor(Math.random()*256)
  let c02 = Math.floor(Math.random()*256)
  let c03 = Math.floor(Math.random()*256)

  // h1.style.position = "absolute"
  h1.style.top = x +"%"
  h1.style.left= y +'%'
  h1.style.color = `rgb(${255 -c1},${255-c2},${255-c3})`
  h1.style.textAlign = "center"
  h1.innerHTML = (appreciations[a])

  div.style.height = "300px"
  div.style.width = "300px"
  div.style.backgroundColor = "blue"
  div.style.position = "absolute"
  div.style.top = x +"%"
  div.style.left= y +'%'
  div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";


  div.style.backgroundColor = `rgb(${c01},${c02},${c03})`

    main.appendChild(h1)
    main.appendChild(div)
    div.appendChild(h1)
})