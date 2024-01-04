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

let mainComponent = `
        <div class="container">
            <div class="banner d-flex justify-content-center align-items-center ">
                <p class="text-white m-0"><span class="btn-lable">Featured</span> New featured collection <span
                        class="blue-text">\ Gaming. Collector</span></p>
            </div>
            <h2 class="large-text">Best <b>Pro Gaming</b> Accessories</h2>
            <p class="small-text">Gaming accessories include gear such as headsets, extra controllers, charging
                stations, memory devices,
                carrying cases and much more.</p>
            <div class="mt-4">
                <button class="btn main-btns new-btn me-2" id="btn1">Show products <i
                        class="fa-solid fa-gamepad ms-1"></i></button>
                <button class="btn main-btns new-btn-transparent" id="btn2">Show Collections <i
                        class="fa-solid fa-gamepad ms-1"></i></button>
            </div>
        </div>`

let aboutComponent = `
        <div class="container">
            <h2 class="text-white fs-1">About our Shop</h2>
            <p>Gaming can help to improve cognitive skills such as problem-solving, memory, and attention.</p>
            <div class="row g-4 mt-4">
                <div class="col-xl-3 col-md-6 col-12">
                    <div class="about-item">
                        <h3 class="fs-1">01</h3>
                        <h4 class="text-white">Gift Boxes</h4>
                        <p>Finished products products and gift wrapping</p>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-12">
                    <div class="about-item">
                        <h3 class="fs-1">02</h3>
                        <h4 class="text-white">Promotions</h4>
                        <p>Large promotions with numerous discounts</p>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-12">
                    <div class="about-item">
                        <h3 class="fs-1">03</h3>
                        <h4 class="text-white">Shipping</h4>
                        <p>Free shipping on any order from $ 150</p>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-12">
                    <div class="about-item">
                        <h3 class="fs-1">04</h3>
                        <h4 class="text-white">Quality</h4>
                        <p>All products are made by engineers from India</p>
                    </div>
                </div>
            </div>
        </div>`

let newsletterComponent = `
        <div class="container">
            <div class="row g-3 news-letter">
                <div class="col-md-5 col-12">
                    <span class="subscribe-span">Subscribe</span>
                    <h2 class="my-2 text-black">Subscribe to our newsletter and <b>get -15% off</b></h2>
                    <p>Almost three-quarters of dedicated PC gamers say their main motivation to upgrade is improving
                        gaming experiences.</p>
                    <div class="position-relative mt-4">
                        <input type="email" placeholder="Enter email address..." class="news-input">
                        <button class="news-btn position-absolute top-0 end-0">Subscribe</button>
                    </div>
                </div>
                <div class="col-md-7 col-12">
                    <img src="images/subscribe-img.webp" alt="image" class="img-fluid">
                </div>
            </div>
        </div>`

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
    insertElement("indexMain", mainComponent);
    insertElement("indexAbout", aboutComponent)
    insertElement("indexNewsletter", newsletterComponent)
    insertElement("indexFooter", footerComponent);

    insertElement("loginHeader", headerComponent);
    insertElement("loginFooter", footerComponent);

    insertElement("registerHeader", headerComponent);
    insertElement("registerFooter", footerComponent);

    insertElement("homeMain", mainComponent)
    insertElement("homeAbout", aboutComponent)
    insertElement("homeNewsletter", newsletterComponent)
    insertElement("homeFooter", footerComponent);
})