let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let createAccBtn = document.getElementById('createAccBtn')

createAccBtn.addEventListener("click", (event) => {
    event.preventDefault()
    if (firstName.value === "" ||
        lastName.value === "" ||
        email.value === "" ||
        password.value === "") {
        alert("please fill data")
    }
    else {
        let newAccount = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        };
        accounts.push(newAccount)
        localStorage.setItem("accounts", JSON.stringify(accounts))
        setTimeout(() => {
            window.location = "login.html"
        }, 1500)
    }
})