function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};