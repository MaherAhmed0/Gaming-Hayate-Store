let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let loggedInEmail = localStorage.getItem("loggedInEmail");

let loggedInAccount = accounts.find(account => account.email === loggedInEmail);

let userPagesHeader = `
        <nav class="navbar">
            <div class="container py-lg-1 py-sm-1 d-flex justify-content-between align-items-center flex-nowrap">
                <a class="navbar-brand order-lg-1" href="home.html">
                    <img src="images/logo.png" alt="Gaming.">
                </a>
                <ul class="order-lg-0 list-unstyled d-lg-flex gap-4 justify-content-between align-items-center d-none text-white m-0">
                    <li>
                        <div class="dropdown" onmouseover="setAriaExpanded('.dropdown-toggle-2', true)" onmouseout="setAriaExpanded('.dropdown-toggle-2', false)">
                            <a class="dropdown-toggle dropdown-toggle-2 text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pages <i class="fa-solid fa-angle-down ms-1 align-text-bottom"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="home.html">Home</a></li>
                                <li><a class="dropdown-item" href="store.html">Store</a></li>
                                <li><a class="dropdown-item" href="CartFavorites.html">Cart & Favorites</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown" onmouseover="setAriaExpanded('.dropdown-toggle-1', true)" onmouseout="setAriaExpanded('.dropdown-toggle-1', false)">
                            <a class="dropdown-toggle dropdown-toggle-1 text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gaming Accessories <i class="fa-solid fa-angle-down ms-1 align-text-bottom"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="store.html">Monitor</a></li>
                                <li><a class="dropdown-item" href="store.html">Chair</a></li>
                                <li><a class="dropdown-item" href="store.html">Headset</a></li>
                                <li><a class="dropdown-item" href="store.html">Game PCs</a></li>
                                <li><a class="dropdown-item" href="store.html">Card</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div class="order-lg-2 d-flex justify-content-between align-items-center">
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
                                    <a href="CartFavorites.html" class="btn new-btn mt-3 mb-2 px-5">View Cart <i
                                            class="fa-solid fa-arrow-right-long ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p id="welcomeUser" class="d-none d-sm-block text-white me-3 ms-1">Welcome, User!</p>
                    <button class="btn new-btn-transparent d-block" id="logOut">Logout</button>
                </div>
            </div>
        </nav>`

let setAriaExpanded = (linkSelector, value) => {
    document.querySelector(linkSelector).setAttribute('aria-expanded', value);
}

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

let createFavoritesItem = (productImg, productName, version, productCategory) => {
    return {
        productImg,
        productName,
        version,
        productCategory
    };
}

let addItemToCart = (item) => {
    let cartItem = createCartItem(item.productImg, item.productName, item.version, item.price, item.quantity);
    addItem(loggedInAccount.cart, cartItem);
}

let addItemToFavorites = (item) => {
    let favoritestItem = createFavoritesItem(item.productImg, item.productName, item.version, item.productCategory);
    return addFavoritesItem(loggedInAccount.favorites, favoritestItem);
}

let addItem = (cart, item) => {
    let existingItem = cart.items.find(i => i.productName === item.productName && i.version === item.version);
    if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.totalPrice += item.totalPrice;
    } else {
        cart.items.push(item);
    }
    updateAPP()
}

let addFavoritesItem = (favorites, item) => {
    let existingItemIndex = favorites.items.findIndex(i => i.productName === item.productName && i.version === item.version);
    if (existingItemIndex !== -1) {
        favorites.items.splice(existingItemIndex, 1);
        updateLocalStorage();
        return false;
    } else {
        favorites.items.push(item);
        updateLocalStorage();
        return true;
    }
}

let addMinusDeleteBtns = (minusSelector, addSelector, delSelector) => {
    document.querySelectorAll(minusSelector).forEach(btn => {
        btn.addEventListener('click', function () {
            let index = this.getAttribute('data-index');
            let item = loggedInAccount.cart.items[index];
            if (item.quantity > 1) {
                item.quantity--;
                item.totalPrice -= item.price;
            } else {
                loggedInAccount.cart.items.splice(index, 1);
            }
            updateAPP()
        });
    });
    document.querySelectorAll(addSelector).forEach(btn => {
        btn.addEventListener('click', function () {
            let index = this.getAttribute('data-index');
            let item = loggedInAccount.cart.items[index];
            item.quantity++;
            item.totalPrice += item.price;
            updateAPP()
        });
    });
    document.querySelectorAll(delSelector).forEach(btn => {
        btn.addEventListener('click', function () {
            let index = this.getAttribute('data-index');
            loggedInAccount.cart.items.splice(index, 1);
            updateAPP();
        });
    });
}

let deleteFavoritesItem = (delSelector) => {
    document.querySelectorAll(delSelector).forEach((btn) => {
        btn.addEventListener('click', function () {
            let index = this.getAttribute('data-index');
            loggedInAccount.favorites.items.splice(index, 1);
            updateAPP();
        });
    })
}

let continueShopping = () => {
    document.querySelector('#continueShopping').addEventListener('click', () => {
        let cartNotificationContainer = document.querySelector('.cart-notification');
        if (cartNotificationContainer.classList.contains('cart-notification-expanded')) {
            cartNotificationContainer.classList.remove('cart-notification-expanded');
        }
    });
}

let updateLocalStorage = () => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

let updateCartPage = () => {
    let cartContainer = document.querySelector('#cartContainer')
    let emptyCart = document.querySelector('#probEmpty');
    if (cartContainer) {
        cartContainer.innerHTML = '';
        if (loggedInAccount.cart.items.length > 0) {
            loggedInAccount.cart.items.forEach((item, index) => {
                let cartPageItem = `
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="cart-page-item">
                        <div class="cart-page-item-img">
                            <img src="${item.productImg}" alt="${item.productName}" class="img-fluid"/>
                        </div>
                        <div class="cart-page-item-details">
                            <h4>${item.productName}</h4>
                            <p>Version: ${item.version}</p>
                            <div class="quantity-controler">
                                <button class="d-block minus-btn" aria-label="minus" data-index="${index}"><i class="fa-solid fa-minus"></i></button>
                                <p>${item.quantity}</p>
                                <button class="d-block plus-btn" aria-label="plus" data-index="${index}"><i class="fa-solid fa-plus"></i></button>
                            </div>
                            <div class="d-flex justify-content-between align-items-center foot">
                                <p>Price: ${item.totalPrice} $</p>
                                <button class="d-block delete-btn" aria-label="delete" data-index="${index}"><i class="fa-regular fa-trash-can"></i></button>
                            </div>
                        </div>
                    </div>
                </div>`;
                cartContainer.innerHTML += cartPageItem
            });
            // Cart page items buttons
            addMinusDeleteBtns('.minus-btn', '.plus-btn', '.delete-btn')
        }
        else {
            emptyCart.innerHTML = `
                <div class="d-flex flex-column justify-content-center align-items-center pt-3 empty-cart-page">
                    <img src="images/empty-cart.png" alt="Empty Cart" class="img-fluid empty-img"/>
                    <h6 class="text-center">Your Cart is Empty</h6>
                </div>`;
        }
    }
}

let updateFavoritesPage = () => {
    let favoritesContainer = document.querySelector('#favoritesContainer');
    let dotsContainer = document.querySelector('.dots-container');
    if (favoritesContainer && dotsContainer) {
        favoritesContainer.innerHTML = '';
        dotsContainer.innerHTML = '';
        if (loggedInAccount.favorites.items.length > 0) {
            loggedInAccount.favorites.items.forEach((item, index) => {
                let likedItem = `
                    <div class="favorites-page-item">
                        <div class="favorites-page-item-img">
                            <img src="${item.productImg}" alt="${item.productName}" class="img-fluid"/>
                        </div>
                        <div class="favorites-page-item-details">
                            <h4>${item.productName}</h4>
                            <p>Category: ${item.productCategory}</p>
                            <div class="d-flex justify-content-between">
                                <p>Version: ${item.version}</p>
                                    <button class="remove-btn" aria-label="remove" data-index="${index}">
                                        <i class="fa-solid fa-heart"></i>
                                    </button>
                                </div>
                        </div>
                    </div>`;
                favoritesContainer.innerHTML += likedItem;
            });
            // Add dots
            for (let i = 0; i < 4; i++) {
                dotsContainer.innerHTML += '<div class="dot"></div>';
            }
            // Scroll event
            favoritesContainer.addEventListener('scroll', () => {
                let scrollWidth = favoritesContainer.scrollWidth - favoritesContainer.clientWidth;
                let scrollPercent = favoritesContainer.scrollLeft / scrollWidth;
                let activeDot = Math.round(scrollPercent * 3);
                let dots = Array.from(dotsContainer.querySelectorAll('.dot'));
                dots.forEach((dot, i) => dot.classList.toggle('active', i === activeDot));
            });
            deleteFavoritesItem('.remove-btn')
        }
        else {
            favoritesContainer.innerHTML = `
                <div class="d-flex flex-column justify-content-center align-items-center pt-3 empty-favorites-page">
                    <img src="images/no-favorites.png" alt="No Favorites" class="img-fluid empty-img"/>
                    <h6 class="text-center">No Favorites Yet</h6>
                </div>`;
        }
    }
}

let updateCartMenu = () => {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    if (loggedInAccount.cart.items.length > 0) {
        loggedInAccount.cart.items.forEach((item, index) => {
            let itemHTML = `
                <div class="cart-menu-item">
                    <div class="cart-menu-item-img">
                        <img src="${item.productImg}" alt="${item.productName}" class="img-fluid"/>
                    </div>
                    <div class="cart-menu-item-details ps-3">
                        <h4>${item.productName}</h4>
                        <p>Version: ${item.version}</p>
                        <div class="quantity-controler">
                            <button class="d-block minus-btn" data-index="${index}"><i class="fa-solid fa-minus"></i></button>
                            <p>${item.quantity}</p>
                            <button class="d-block plus-btn" data-index="${index}"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <div class="d-flex justify-content-between align-items-center foot">
                            <p>Price: ${item.totalPrice} $</p>
                            <button class="d-block delete-btn" data-index="${index}"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>
                </div>`;
            cartItems.innerHTML += itemHTML;
        });
        // Cart menu items buttons
        addMinusDeleteBtns('.minus-btn', '.plus-btn', '.delete-btn')
    }
    else {
        cartItems.innerHTML = `
            <div class="d-flex flex-column justify-content-center align-items-center empty-cart">
                <img src="images/empty-cart.png" alt="Empty Cart" class="img-fluid"/>
                <h4 class="text-center">Your Cart is Empty</h4>
            </div>`;
    }
}

let updateItemsCount = () => {
    let itemsCount = document.querySelector('.items-count');
    let totalItems = loggedInAccount.cart.items.reduce((total, item) => total + item.quantity, 0);
    itemsCount.textContent = totalItems;
}

let updateTotalPrice = () => {
    let totalPriceHeaderElement = document.querySelector('.cart-lable b');
    let totalPriceMenuElement = document.querySelector('#total');
    let totalPriceCartPageElement = document.querySelector('.cart-page-total');
    let totalPrice = loggedInAccount.cart.items.reduce((total, item) => total + item.totalPrice, 0);
    totalPriceHeaderElement.textContent = totalPrice.toFixed(2) + ' $';
    totalPriceMenuElement.textContent = totalPrice.toFixed(2) + ' $';
    if (totalPriceCartPageElement) {
        totalPriceCartPageElement.textContent = totalPrice.toFixed(2) + ' $';
    }
}

let updateAPP = () => {
    updateLocalStorage();
    updateFavoritesPage()
    updateCartMenu();
    updateCartPage();
    updateItemsCount();
    updateTotalPrice();
}

if (!loggedInAccount.cart) {
    loggedInAccount.cart = {
        items: []
    };
}

if (!loggedInAccount.favorites) {
    loggedInAccount.favorites = {
        items: []
    };
}

document.addEventListener('DOMContentLoaded', function () {
    insertElement("homeHeader", userPagesHeader)

    insertElement("storeHeader", userPagesHeader)

    insertElement("cartHeader", userPagesHeader)

    updateAPP()

    const loggedInUser = localStorage.getItem("userName");
    if (loggedInUser) {
        const welcomeMessage = document.getElementById('welcomeUser');
        welcomeMessage.innerHTML = `Welcome, <p class="m-0">${loggedInUser}</p>`;
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
                            <a href="CartFavorites.html" class="btn new-btn w-100 mb-2">View my cart</a>
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
                            <a href="CartFavorites.html" class="btn new-btn w-100 mb-2">View my cart</a>
                            <button class="btn new-btn-transparent w-100" id="continueShopping">Continue shopping</button>
                        </div>
                    </div>`;
            continueShopping()
        }

        let cartItem = createCartItem(productImg, productName, productVersion, productPrice, 1);
        addItemToCart(cartItem);
    }
    // Close Cart Notification
    else if (!cartNotificationContainer.contains(event.target)
        && cartNotificationContainer.classList.contains('cart-notification-expanded')) {
        cartNotificationContainer.classList.remove('cart-notification-expanded');
    }
    // Add to Favorites Button
    else if (event.target.matches('.like-btn, .like-btn i')) {
        let productName = productCard.querySelector('h4').innerText;
        let productImg = productCard.querySelector('.product-img').src;
        let productVersion = productCard.querySelector('.select-styles').value;
        let productCategory = productCard.querySelector('.product-category span').innerHTML;

        let favoritesItem = createFavoritesItem(productImg, productName, productVersion, productCategory);
        let itemAdded = addItemToFavorites(favoritesItem);

        let likeBtn = event.target.closest('.like-btn');
        if (itemAdded) {
            likeBtn.classList.add('favorited');
        } else {
            likeBtn.classList.remove('favorited');
        }
    }
});