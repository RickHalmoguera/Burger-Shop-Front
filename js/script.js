import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const menuBtn = document.getElementById("menu-btn")
const navUl = document.getElementById("nav-ul")
let isMenuOpen = false

const handleMenu = ()=>{
    if(isMenuOpen == false){
        navUl.style.display = "flex"
        menuBtn.classList.remove("fa-burger")
        menuBtn.classList.add("fa-x")
        isMenuOpen = !isMenuOpen
    }else{
        navUl.style.display= "none"
        menuBtn.classList.remove("fa-x")
        menuBtn.classList.add("fa-burger")
        isMenuOpen = !isMenuOpen
    }

}   

const heroSwiper = new Swiper(".section-hero__swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop : true
  });


menuBtn.addEventListener("click", handleMenu)