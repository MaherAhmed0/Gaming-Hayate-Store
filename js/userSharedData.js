let userPagesHeader = `
        <nav class="navbar">
            <div class="container py-lg-1 py-sm-1 d-flex justify-content-between align-items-center flex-nowrap">
                <a class="navbar-brand" href="home.html">
                    <img src="images/logo.png" alt="Gaming.">
                </a>
                <div class="d-none">
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="me-4">
                        <button class="d-flex justify-content-between align-items-center gap-1 header-cart"
                            type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            <span class="cart-lable d-none d-md-inline-block me-2">
                                <span class="d-block">My Cart:</span>
                                <b>0.00<span> $</span></b>
                            </span>
                            <span class="position-relative">
                                <i class="fa-solid fa-cart-shopping cart-icon"></i>
                                <span class="items-count">0</span>
                            </span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h4 class="offcanvas-title fw-bold" id="offcanvasRightLabel">My Cart</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body p-0 d-flex flex-column justify-content-between position-relative">
                                <div id="cartItems">
                                </div>
                                <div id="cartFooter"
                                    class="d-flex flex-column align-items-center sticky-bottom bg-white">
                                    <div class="d-flex justify-content-between align-items-center w-100 text-black">
                                        <h4>Total:</h4>
                                        <h4 id="total"><span>$</span></h4>
                                    </div>
                                    <a href="" class="btn new-btn mt-3 mb-2 px-5">View Cart <i
                                            class="fa-solid fa-arrow-right-long ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p id="welcomeUser" class="d-none d-sm-block text-white me-3">Welcome, User!</p>
                    <button class="btn new-btn-transparent d-block" id="logOut">Logout</button>
                </div>
            </div>
        </nav>`

document.addEventListener('DOMContentLoaded', function () {
    insertElement("homeHeader", userPagesHeader)

    insertElement("storeHeader", userPagesHeader)

    let cartItems = document.getElementById('cartItems')
    if (cartItems.children.length > 0) {
        console.log("Cart is not empty");
    } else {
        cartItems.innerHTML = `
        <div class="d-flex flex-column justify-content-center align-items-center empty-cart">
            <img src="images/empty-cart.png" alt="Empty Cart" class="img-fluid"/>
            <h4 class="text-center">Your Cart is Empty</h4>
        </div>`
    }

    const loggedInUser = localStorage.getItem("userName");
    if (loggedInUser) {
        const welcomeMessage = document.getElementById('welcomeUser');
        welcomeMessage.textContent = `Welcome, ${loggedInUser}`;
    }
    let logoutButton = document.querySelector('#logOut');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            localStorage.removeItem('userName');
            window.location = 'index.html';
        });
    }
});


