import "./Home.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";

class Home extends Component {
	render() {
		return (
			<div className="intro">

				<h1>WATCH THIS</h1>

				Welcome to WATCH THIS. This site will fulfill all of your stylish watch needs!
				A wide range from mens, womens, and of course we didn't forget the kids. Now it's time
				to get shopping needs done!
			</div>
		);
	}
}
export default Home;
