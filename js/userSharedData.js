let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let loggedInEmail = localStorage.getItem("loggedInEmail");

let loggedInAccount = accounts.find(account => account.email === loggedInEmail);

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

let createCartItem = (productImg, productName, version, price, quantity) => {
    return {
        productImg,
        productName,
        version,
        price,
        quantity,
        totalPrice: price * quantity
    };
}

let addItemToCart = (item) => {
    let cartItem = createCartItem(item.productImg, item.productName, item.version, item.price, item.quantity);
    addItem(loggedInAccount.cart, cartItem);
}

let addItem = (cart, item) => {
    cart.items.push(item);
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

let continueShopping = () => {
    document.querySelector('#continueShopping').addEventListener('click', () => {
        let cartNotificationContainer = document.querySelector('.cart-notification');
        if (cartNotificationContainer.classList.contains('cart-notification-expanded')) {
            cartNotificationContainer.classList.remove('cart-notification-expanded');
        }
    });
}

if (!loggedInAccount.cart) {
    loggedInAccount.cart = {
        items: []
    };
}

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
            localStorage.removeItem('loggedInEmail')
            localStorage.removeItem('userName');
            window.location = 'index.html';
        });
    }
});

document.addEventListener('click', (event) => {
    let cartNotificationContainer = document.querySelector('.cart-notification');
    let productCard = event.target.closest('.product-card');
    
    // Add to Cart Button
    if (event.target.matches('.add-cart-btn')) {
        let productName = productCard.querySelector('h4').innerText;
        let productImg = productCard.querySelector('.product-img').src;
        let productVersion = productCard.querySelector('.select-styles').value;
        let productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));

        // Cart Notification
        if (cartNotificationContainer.classList.contains('cart-notification-expanded')) {
            cartNotificationContainer.classList.remove('cart-notification-expanded');
            setTimeout(() => {
                cartNotificationContainer.classList.add('cart-notification-expanded');
                cartNotificationContainer.innerHTML = `
                    <div class="">
                        <div class="cart-notification-header">
                            <i class="fa-solid fa-check me-2"></i>
                            <span>Item added to your cart</span>
                        </div>
                        <div class="cart-notification-product">
                            <img src="${productImg}" alt="Product Image" class="img-fluid"/>
                            <div>
                                <h5 class="p-name">${productName}</h5>
                                <p class="p-version">Version: ${productVersion}</p>
                            </div>
                        </div>
                        <div class="cart-notification-footer">
                            <a href="" class="btn new-btn w-100 mb-2">View my cart</a>
                            <button class="btn new-btn-transparent w-100" id="continueShopping">Continue shopping</button>
                        </div>
                    </div>`;
                continueShopping()
            }, 100)
        }
        else {
            cartNotificationContainer.classList.add('cart-notification-expanded');
            cartNotificationContainer.innerHTML = `
                    <div class="">
                        <div class="cart-notification-header">
                            <i class="fa-solid fa-check me-2"></i>
                            <span>Item added to your cart</span>
                        </div>
                        <div class="cart-notification-product">
                            <img src="${productImg}" alt="Product Image" class="img-fluid"/>
                            <div>
                                <h5 class="p-name">${productName}</h5>
                                <p class="p-version">Version: ${productVersion}</p>
                            </div>
                        </div>
                        <div class="cart-notification-footer">
                            <a href="" class="btn new-btn w-100 mb-2">View my cart</a>
                            <button class="btn new-btn-transparent w-100" id="continueShopping">Continue shopping</button>
                        </div>
                    </div>`;
            continueShopping()
        }

        let cartItem = createCartItem(productImg, productName, productVersion, productPrice, 1);
        addItemToCart(cartItem);
        console.log(cartItem)
    }
    else if (!cartNotificationContainer.contains(event.target)
        && cartNotificationContainer.classList.contains('cart-notification-expanded')) {
        cartNotificationContainer.classList.remove('cart-notification-expanded');
    }
});