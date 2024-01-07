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