import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<footer class="footerContainer">
			<div className="connect">
				<p>Connect with me</p>
				<div className="social-icons">
					<li>
						<a href="https://www.linkedin.com/in/logan1x">
							<i class="fab fa-linkedin-in"></i>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/herkuch">
							<i class="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://github.com/logan1x">
							<i class="fab fa-github"></i>
						</a>
					</li>
				</div>
			</div>
			<div class="logo">
				<Link to="/">
					{/* <img src="./assets/flash.svg" alt="#" /> */}
					<div>SKB</div>
				</Link>
			</div>
		</footer>
	);
};

export default Home;
