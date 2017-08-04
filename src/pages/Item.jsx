import "./Item.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Item extends Component {

	render() {
		return (
			<div className="Item-List">
				{PRODUCTS.map((product) => {
					return <h1>{product.name}</h1>;
				})}
			</div>
		);
	}

}
export default Item;
