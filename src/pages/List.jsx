import "./List.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class List extends Component {

	render() {
		return (
			<div className="Item-List">
				{PRODUCTS.map((product, index) => {
					return (
						<Link to= {`/item/${index}`}>
							<div className="Watch-type">
									<h1>{product.name}</h1>
									<img className="Watch-img" src={product.images[0].small}/>
							</div>
						</Link>
					);
				})}
			</div>
		);
	}
}
export default List;
