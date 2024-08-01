

let btn = document.querySelector(".header__toggle")

btn.addEventListener( "click" , (e)=>{
  e.preventDefault()
  let header = document.querySelector(".header")

  header.classList.toggle("active")
})