import { api } from "./api.js"

const btn = document.querySelector(".burger__btn")
const nav = document.querySelector(".header__nav")
const personalsContainer = document.querySelector(".specialists__flex")
const specialistTemplate = document.querySelector("#specialist")

async function getPersonals(){
    try{
        const personals = await api.getPersonals() //отправление запроса к api и ожидание ответа
        personals.forEach(item => {
            const clone = specialistTemplate.content.cloneNode(true) // создание повторяющегося элемента specialistTemplate
            clone.querySelector('.card__title').textContent = item.surname + ' ' + item.name
            clone.querySelector('img').src = item.image ? item.image : '../img/avatar.png'
            clone.querySelector('.card__link').href = `https://t.me/Charkk25_bot?start`
            personalsContainer.append(clone)
        })
        
    } catch (e) {
        throw new Error(e)
    }
}


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

getPersonals()