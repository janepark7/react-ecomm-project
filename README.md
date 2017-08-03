# React eCommerce Project

Front-end eCommerce project using React. User will be able to pick and purchase items. User will be able to add items to cart if they wish to purchase. User can also like item and it will automatically be added to their Wishlist.  

## List of page destinations

* / - the landing page of the eCommerce site, this will contain navigation bar, items for sale, and checkout.
* /cart - page will have a form for user to fill out to purchase item.
* /product - page will contain products, their description, cost and option to buy.
* /checkout - page will allow user to fill out shipping and billing form to purchase items.


## Components

* Navbar.js - Navigation header, this will give the option where the user will go.
* Cart.js - shows list of items, will automatically add the costing of items, allow user to checkout.  
* Product.js - view each product that will hold all the product Components
 - `props.product.id` - id would be a string
 - `props.product.name` - name would be a string
 - `props.product.description` - description would be a string
 - `props.product.cost` - cost would be a number
* Modal.js - pop up to share news about the site or welcome user to the site, this will only be open for a second
* Checkout.js - contain user form to complete transaction (but not transaction will be processed for the sake of this project).

## Inspiration Sites

* [Everlane] (https://www.everlane.com/) - clothing website
* [Gap] (http://www.gap.com) - clothing website, they have good template for modals
* [Busted Tees] (http://www.bustedtees.com) - funny t-shirt website
