window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        document.getElementById("homeHeader").classList.add('scrolled');
    } else {
        document.getElementById("homeHeader").classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let button1 = document.getElementById('btn1');
    let button2 = document.getElementById('btn2');
    let button3 = document.getElementById('btn3');

    let toStore = () => {
        setTimeout(() => { window.location = "store.html", 1000 })
    }

    button1.addEventListener('click', toStore);
    button2.addEventListener('click', toStore);
    button3.addEventListener('click', toStore);
});