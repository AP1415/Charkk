const btn = document.querySelector(".burger__btn")
const nav = document.querySelector(".header__nav")
function handleClick(){
    nav.classList.add("header__nav-active")
    console.log("click")
}
btn.addEventListener("click", handleClick)

function handleClickNav(){
    nav.classList.remove("header__nav-active")
    console.log("click")
}
nav.addEventListener("click", handleClickNav)