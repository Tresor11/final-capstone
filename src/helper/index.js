const hamb=document.querySelector(".hamburger");
const navLinks=document.getElementsByClassName('nav-links')
const links=document.querySelectorAll(".nav-links li")

const toggle=()=>{
    navLinks[0].classList.toggle('open')
}

export default toggle;