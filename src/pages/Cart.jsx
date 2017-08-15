import "./Cart.scss";
import React, { Component } from "react";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: {},
		};
	}

	componentDidMount() {
		totalCart: 0,
		console.log(this.props);
	}

	addToCart(){
	 	const cart = [...this.state.cart];
		console.log(cart);
	}


	render() {
		const { cart } = this.props;
		return (
			<div className="cart-items">
			<h1>Shopping Cart</h1>
			{cart.map((item)=> {
				return (
					<ul>
					<img className="cart-img" src={item.images[0].small}/>
					{item.name}
					{item.price}
					</ul>
				);
			})}
		</div>
		);
	}
}

export default Cart;
