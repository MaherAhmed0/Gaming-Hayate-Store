let header = document.getElementById("homeHeader");
let logoutButton = document.querySelector('#logOut');

document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem("userName");
    if (loggedInUser) {
        const welcomeMessage = document.getElementById('welcomeUser');
        welcomeMessage.textContent = `Welcome, ${loggedInUser}!`;
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