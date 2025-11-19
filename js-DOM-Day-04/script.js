let grow = 0;
let btn = document.querySelector("button");
let reset = document.querySelector("#btn");
let h2 = document.querySelector("h2")
let ine = document.querySelector(".inner")

btn.addEventListener("click",function(){
  grow = 0
 let clear = setInterval(() => {
  grow++
  h2.innerHTML = grow +"%"
  btn.style.pointerEvents = "none" 
  btn.style.opacity = "0.7"
  ine.style.width = grow + "%"
  btn.textContent = "Downloading..."
 }, 50);


 setTimeout(() => {
  clearInterval(clear)
  btn.style.opacity = "0.9"
  btn.textContent = "Downloaded"
 },5000);
 
})
reset.addEventListener("click", function () {

  grow = 0;

  h2.innerHTML = "";
  ine.style.width = "";
  reset.style.pointerEvents = "none";
  reset.style.opacity = "0.4";

  setTimeout(() => {
    reset.style.opacity = "1";
    reset.style.pointerEvents = "";
    btn.style.opacity = "1";
    btn.style.pointerEvents = "";
    btn.textContent = "Download";
  }, 300);
  
 })