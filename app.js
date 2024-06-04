const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const body = document.querySelector("body")
const moon = document.querySelector("#moon")
const hLink = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    
})

hLink.forEach(hLink =>{
    hLink.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
        // hamburger.classList.toggle("bg-white")
    })
})

moon.addEventListener("click", () => {
    body.classList.toggle("dark")
    
})