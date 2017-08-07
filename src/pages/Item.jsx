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
}

export default Item;
