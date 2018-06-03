import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/App.css";
import Logo from "../../assets/Logo";

class Navbar extends Component {
	render() {
		return (
			<nav className="navigation navbar">
				<div className="container">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/">
							<div className="nav-logo">
								<Logo />
							</div>
							<h2>Bru's Brews</h2>
						</Link>
					</div>

					<div className="navbar-menu">
						<div className="navbar-end">
							<Link className="navbar-item" to="/">
								<h4>Home</h4>
							</Link>
							<Link className="navbar-item" to="/compare">
								<h4>Compare</h4>
							</Link>
							<Link className="navbar-item" to="/notes">
								<h4>Notes</h4>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
