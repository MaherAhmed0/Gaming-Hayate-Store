let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let email = document.getElementById('email')
let password = document.getElementById('password')
let loginBtn = document.getElementById('loginBtn')

loginBtn.addEventListener("click", (event) => {
    event.preventDefault()
    let matchedAccount = accounts.find(account => account.email === email.value && account.password === password.value);
    if (matchedAccount) {
        setTimeout(() => {
            window.location = "home.html";
        }, 1000)
    } else {
        alert("Invalid email or password");
    }
})