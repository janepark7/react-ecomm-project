import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Navigation from "components/Navigation";
import Item from "pages/Item";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import FourOhFour from "pages/404";

class App extends React.Component {
	render() {
		return (

			<BrowserRouter>
				<div className="navbar">
					<Navigation />
					<Switch>
						<Route exact path = "/" component={Home} />
						<Route exact path = "/Item" component={Item} />
						<Route exact path = "/Cart" component={Cart} />
						<Route exact path = "/Checkout" component={Checkout} />
						<Route exact path= "*" component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>

		);
	}
}

export default App;
