/*Selecting buttons */
const hamburgerMenuBtn = document.querySelector("#menu-btn");
const hamburgerMenu = document.querySelector("#menu");


hamburgerMenuBtn.addEventListener('click',() =>{
    hamburgerMenuBtn.classList.toggle("open");
    hamburgerMenu.classList.toggle("flex");
    hamburgerMenu.classList.toggle("hidden");
})

