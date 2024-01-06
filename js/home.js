let header = document.getElementById("homeHeader");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});