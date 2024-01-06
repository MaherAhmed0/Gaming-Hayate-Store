let header = document.getElementById("indexHeader");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let button1 = document.getElementById('btn1');
    let button2 = document.getElementById('btn2');
    let button3 = document.getElementById('btn3');

    let toLogin = () => {
        setTimeout(() => { window.location = "login.html", 1000 })
    }

    button1.addEventListener('click', toLogin);
    button2.addEventListener('click', toLogin);
    button3.addEventListener('click', toLogin);
});
