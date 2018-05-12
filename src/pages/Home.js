import React, { Component } from "react";
import "../css/Home.css";
import { Section, Container, Columns, Column } from "bloomer";
import Logo from "../Logo";

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<Section className="welcome-con">
					<Container className="welcome">
						<Columns isCentered>
							<Column isSize="1/3" className="logo">
								<Logo />
							</Column>
						</Columns>
						<Columns isCentered>
							<Column isSize="2/3" hasTextAlign="centered">
								<h1>Welcome to Bru's Brews</h1>
							</Column>
						</Columns>
					</Container>
				</Section>
			</div>
		);
	}
}

export default Home;
