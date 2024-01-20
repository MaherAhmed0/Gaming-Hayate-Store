# Gaming-Hayate-Store

## Description
Gaming-Hayate-Store is a **fully responsive** website for an imaginary gaming accessories brand. It was built to practice front-end skills and includes 6 pages: index (landing page), login, register, user home, store, cart & favorites.

## Website Link
You can access the Gaming-Hayate-Store website at: https://maherahmed0.github.io/Gaming-Hayate-Store/

## Features
- **Responsive Design**: The website is designed to be fully responsive, providing an optimal viewing experience across a wide range of devices.
- **Bootstrap 5**: The website uses Bootstrap 5 for styling and components.
- **Local Storage**: The website heavily relies on local storage for data persistence. This includes user account information (first name, last name, email, password, cart items, and favorite items). Please note that while using local storage allows for data persistence without a backend, it has limitations and should be used judiciously in a production environment.
- **Product Notifications**: With every added product to the cart, a notification pops up displaying the main details of the product. This notification can be dismissed by clicking on "Continue Shopping" or anywhere outside of the notification box.
- **Product Filtering**: The store page includes basic filtering options. You can search by name or category.
- **Product Versions**: Each product card includes a select option to toggle between product versions.
- **Cart**: The header for logged-in users includes a button displaying the total price of the cart and the number of items in it. Clicking this button opens an off-canvas component that displays the added products to the cart, along with plus, minus, and delete buttons for each item.

## Usage
After registration, the user is automatically redirected to the login page and then to the user's home page. The website is designed to be intuitive and user-friendly. However, please note that in order to interact with the website (e.g., add items to the cart or favorites), you must first register and log in. Any attempt to perform an action without being logged in will redirect you to the login page.

## Contributing
Contributions are welcome! Feel free to fork the repository, make your changes, and submit a pull request. You can also submit bug reports or feature requests.

## Contact Information
For any questions or support, please contact me at: 0maherahmed@gmail.com

## Data Structure
The website uses a custom JSON data structure for its products.

The `new` field indicates whether a product is new. If it is, a small styled tab will appear on the product card to inform the user. The `bestSellers` field indicates whether a product will appear in the "Best Sellers of the Week" section.

Here's a sample:

```json
{
    "id": 12,
    "name": "Radeon™ RX 750 XT SPEEDSTER MERC",
    "description": "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR technology delivers a virtually stutter-free, low latency experience, essential for remarkable virtual reality environments.",
    "category": "Card",
    "new": true,
    "bestSellers": false,
    "versions": [
        {
            "color": "Black",
            "price": 940.00,
            "prevPrice": 960.00,
            "image": "images/redon-7-black.webp"
        },
        {
            "color": "White",
            "price": 900.00,
            "prevPrice": 960.00,
            "image": "images/redon-7-white.webp"
        }
    ]
}