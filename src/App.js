import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Nav from "./nav";
import Footer from "./footer";

export default function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Footer />
			</Router>
		</div>
	);
}
