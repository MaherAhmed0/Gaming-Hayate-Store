let header = document.getElementById("homeHeader");
let logoutButton = document.querySelector('#logOut');

document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem("userName");
    if (loggedInUser) {
        const welcomeMessage = document.getElementById('welcomeUser');
        welcomeMessage.textContent = `Welcome, ${loggedInUser}`;
    }
});

logoutButton.addEventListener('click', function () {
    localStorage.removeItem('userName');
    window.location = 'index.html';
});

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

    let toStore = () => {
        setTimeout(() => { window.location = "store.html", 1000 })
    }

    button1.addEventListener('click', toStore);
    button2.addEventListener('click', toStore);
    button3.addEventListener('click', toStore);
});