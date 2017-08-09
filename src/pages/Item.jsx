import "./Item.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemId: props.match.params.itemId,
		};
	}

	render() {
		const item = PRODUCTS[this.state.itemId];
			return (
				<div className="watches">
					<h1 className="item-name">{item.name}</h1>
						<div className="item-image">
							<img className="item-num1" src={item.images[1].medium} />
							<img className="item-num2" src={item.images[0].medium} />
							<img className="item-num3" src={item.images[2].medium} />
						</div>
				</div>
			);
	}
}

export default Item;
