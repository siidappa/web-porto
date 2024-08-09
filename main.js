const navbar = document.querySelector("[data-nav]")
window.onscroll = function() {
    if(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        navbar.classList.add("active");
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("active");
    }
}