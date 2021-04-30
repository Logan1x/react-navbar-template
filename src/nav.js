import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};

	return (
		<div>
			<nav className="navigation">
				<div className="nav-center">
					<div className="nav-header">
						<div className="nav-brand">Shake and Bake</div>
						<button className="nav-toggle" onClick={toggleClass}>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<ul className={isActive ? "links show-links" : "links"}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						{/* <li>
							<a href="projects.html">projects</a>
						</li>
						<li>
							<a href="contact.html">contact</a>
						</li> */}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Home;
