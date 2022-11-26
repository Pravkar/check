"use strict";
const navbarEl = document.querySelector(".navbar");
console.log(navbarEl.offsetHeight)


 const  bottomContainer = document.querySelector(".bottom-container");  console.log(bottomContainer.offsetTop);
 


window.addEventListener("scroll",() =>{
 if(window.scrollY > bottomContainer.offsetTop - navbarEl.offsetHeight- 50)
 by
 {
     navbarEl.classList.add("active");
 }
 
});
