import "./Item.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Item extends Component {

	render() {
		return (
			<div className="Item-List">
				{PRODUCTS.map((product) => {
					return [
						<div className="Watch-type">
						<h1>{product.name}</h1>
						<img className="Watch-img" scr={product.images[0].small}/>
						<h3>{product.description}</h3>
					</div>];
				})}
			</div>
		);
	}

}
export default Item;
