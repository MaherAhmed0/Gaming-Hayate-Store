let indexHeader = document.getElementById("indexHeader")
let loginHeader = document.getElementById("loginHeader")
let registerHeader = document.getElementById("registerHeader")

let indexHFooter = document.getElementById("indexHFooter")
let loginFooter = document.getElementById("loginFooter")
let registerFooter = document.getElementById("registerFooter")
let homeFooter = document.getElementById("homeFooter")

let headerComponent = `
        <nav class="navbar">
            <div class="container py-lg-2 py-sm-1 d-flex justify-content-between align-items-center flex-nowrap">
                <a class="navbar-brand" href="index.html">
                    <img src="images/logo.png" alt="Gaming.">
                </a>
                <div class="d-none">
                </div>
                <div>
                    <a href="login.html"><button class="btn new-btn-transparent me-2">Login</button></a>
                    <a href="register.html"><button class="btn new-btn-transparent">Register</button></a>
                </div>
            </div>
        </nav>`

let footerComponent = `
        <div class="container">
            <div class="row g-3 text-white mb-4">
                <div class="col-lg-3 col-md-6 col-12">
                    <img src="images/logo.png" alt="logo" class="mb-4">
                    <h3>Reach out & let your <b class="grad-text">mind explore</b></h3>
                    <p>I also love the challenge of trying to beat a difficult game or master a new skill.</p>
                </div>
                <div class="col-lg-3 col-md-6 col-12 ps-lg-5">
                    <h4>NAVIGATION:</h4>
                    <ul class="list-unstyled">
                        <li><i class="fa-solid fa-chevron-right me-2 arr-icon"></i> Search</li>
                        <li><i class="fa-solid fa-chevron-right me-2 arr-icon"></i> All Collections</li>
                        <li><i class="fa-solid fa-chevron-right me-2 arr-icon"></i> All Products</li>
                        <li><i class="fa-solid fa-chevron-right me-2 arr-icon"></i> Article Page</li>
                        <li><i class="fa-solid fa-chevron-right me-2 arr-icon"></i> Blog Page</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-12 ps-lg-5">
                    <h4>ABOUT US:</h4>
                    <ul class="list-unstyled">
                        <li><i class="fa-solid fa-chevron-right me-2 arr-icon"></i> About Us</li>
                        <li><i class="fa-solid fa-chevron-right me-2 arr-icon"></i> Contact Us</li>
                        <li><i class="fa-solid fa-chevron-right me-2 arr-icon"></i> FAQ's</li>
                        <li><i class="fa-solid fa-chevron-right me-2 arr-icon"></i> Privacy Policy</li>
                        <li><i class="fa-solid fa-chevron-right me-2 arr-icon"></i> Shipping & Delivery</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-12 ps-lg-5">
                    <h4>SHARE:</h4>
                    <ul class="list-unstyled social-icons d-flex flex-row">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
            <p class="text-white m-0 pb-3"><i class="fa-solid fa-copyright"></i> 2024, Gaming Hayate, Developed by <a
                    class="link-git" href="https://github.com/MaherAhmed0" target="_blank">MaherAhmed0</a></p>
        </div>`

document.addEventListener('DOMContentLoaded', function () {
    function insertElement(componentId, component) {
        let Element = document.getElementById(componentId);
        if (Element) {
            Element.insertAdjacentHTML('beforeend', component);
        }
    }

    insertElement("indexHeader", headerComponent);
    insertElement("indexFooter", footerComponent);

    insertElement("loginHeader", headerComponent);
    insertElement("loginFooter", footerComponent);

    insertElement("registerHeader", headerComponent);
    insertElement("registerFooter", footerComponent);

    insertElement("homeFooter", footerComponent);
})