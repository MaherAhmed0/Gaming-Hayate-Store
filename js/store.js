let searchSelect = document.querySelector('#searchSelect');
let searchBar = document.querySelector('#searchBar');
let productsContainer = document.getElementById('products');
let products = []

let displayProducts = (data) => {
    productsContainer.innerHTML = ''
    if (data.length > 0) {
        data.forEach((item) => {
            let productCard = document.createElement('div');
            productCard.className = 'col-xl-3 col-lg-4 col-md-6 col-12';
            productCard.innerHTML = `
                <div class="product-card position-relative">
                    <div class="d-flex justify-content-center align-items-center like-btn-cont z-3">
                        <button class="like-btn">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                    <h4>${item.name}</h4>
                    <p class="product-category">category: <span>${item.category}</span></p>
                    <div class="position-relative">
                        ${item.new ? `<span class="product-state position-absolute top-0 start-0">New</span>` : ''}
                        <img src="${item.versions[0].image}" alt="" class="img-fluid product-img z-2">
                    </div>
                    <p class="version text-black mb-1">
                        ${item.versions[0].size ? 'Size:' : ''}
                        ${item.versions[0].color ? 'Color:' : ''}
                    </p>
                    <select class="select-styles sss">
                        ${item.versions.map(version => `
                            <option value="${version.size || version.color}">
                                ${version.size || version.color}
                            </option>
                        `).join('')}
                    </select>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <p class="price">${item.versions[0].price.toFixed(2)}<span>$</span></p>
                            <del class="prv-price">${item.versions[0].prevPrice.toFixed(2)}<span>$</span></del>
                        </div>
                        <button class="btn new-btn z-3 add-cart-btn">Add to Cart</button>
                    </div>
                </div>`;
            let selectStyles = productCard.querySelector('.sss');
            selectStyles.addEventListener('change', function () {
                let selectedOption = this.value;
                let selectedVersion = item.versions.find(version => {
                    return (version.size && version.size.toString() === selectedOption) || (version.color && version.color === selectedOption);
                });
                let imgElement = productCard.querySelector('.product-img');
                let priceElement = productCard.querySelector('.price');
                let prvPriceElement = productCard.querySelector('.prv-price');
                if (selectedVersion) {
                    imgElement.src = selectedVersion.image;
                    priceElement.innerHTML = `${selectedVersion.price.toFixed(2)}<span>$</span>`;
                    prvPriceElement.innerHTML = `${selectedVersion.prevPrice.toFixed(2)}<span>$</span>`;
                }
            });
            productsContainer.appendChild(productCard)
        })
    } else {
        productsContainer.innerHTML = `
            <h2 class="text-black fw-medium text-center py-5 display-6">
                No Products Found
            </h2>`
    }
}

let filterProducts = () => {
    let filteredProducts = products.filter((product) => {
        return product[searchSelect.value].toLowerCase().includes(searchBar.value.toLowerCase());
    });
    displayProducts(filteredProducts);
}

fetch('products.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        products = data
        displayProducts(products)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

searchSelect.addEventListener('change', filterProducts);
searchBar.addEventListener('input', filterProducts);