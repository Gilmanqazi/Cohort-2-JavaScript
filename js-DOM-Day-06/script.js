const shoes = [
  {
    tag: "Trending",
    brand: "Nike",
    brandLogo: "https://i.pinimg.com/736x/54/2c/68/542c68c7aef630bb18caeaec635aa7a3.jpg",
    backgroundImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    shoeName: "Nike Air Force 1",
    title: "Own the Air Force",
    description: "Classic style infused with modern comfort. Designed to elevate your everyday look.",
    price: "$120",
    buttonText: "Buy Now",
    
  },
  {
    tag: "Hot Pick",
    brand: "Adidas",
    brandLogo: "https://thumbs.dreamstime.com/b/web-192037111.jpg",
    backgroundImage: "https://cdn.pixabay.com/photo/2020/07/19/05/34/adidas-5418998_640.jpg",
    shoeName: "Adidas Ultraboost",
    title: "Boost Your Run",
    description: "Experience ultimate cushioning and energy return with every cushioning and energy return ",
    price: "$150",
    buttonText: "Shop Now",
     
  },
  {
    tag: "Most Loved",
    brand: "Puma",
    brandLogo: "https://i.pinimg.com/736x/54/2c/68/542c68c7aef630bb18caeaec635aa7a3.jpg",
    backgroundImage: "https://cdn.pixabay.com/photo/2018/09/27/12/07/puma-3706914_960_720.jpg",
    shoeName: "Puma RS-X",
    title: "Retro Meets Modern",
    description: "Bold design with maximum comfort—perfect for everyday wear.",
    price: "$110",
    buttonText: "Explore",
     
  }
];
let main = document.querySelector("main")




let sum = ''
shoes.forEach(function(elem){
  sum += `
   <div class="card">
    <div class="img-card" style="background-image:url('${elem.backgroundImage}');">
  <div class="top">
  <div class="top-left">
    <h4>${elem.tag}</h4>
  </div>
<div class="top-right">
  <img src=${elem.brandLogo} alt="">
</div>
</div>
</div>
<div class="bottom">
  <h1>${elem.shoeName}</h1>
  <h5>${elem.title}</h5>
  <p>${elem.description}</p>

  <div class="btm">
  <div class="bottom-left">
    <h4>${elem.price}</h4>
  </div>
  <div class="bottom-right">
    <button>${elem.buttonText}</button>
  </div>
</div>
</div>
</div>`



main.innerHTML = sum
})