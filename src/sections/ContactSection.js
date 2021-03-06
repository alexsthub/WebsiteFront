import React from "react";
import "../styles/About.css";
import "../styles/Contact.css";
import { Links, MiscText } from "../constants/text";

export default class ContactSection extends React.Component {
	handleContact = (e) => {
		window.open(Links.email, "mail");
		e.preventDefault();
	};

	render() {
		return (
			<section
				id="contact"
				className="section-container center-vertical contact-container"
				ref={this.props.refProp}
				style={{ position: "relative" }}
			>
				<div className="center-vertical contact-width">
					<h1 className="no-margin">CONTACT ME</h1>
					<div className="border" />
					<p style={{ textAlign: "center" }}>{MiscText.contact}</p>

					<div
						className="column learn-more-button"
						style={{ marginTop: 30 }}
						onClick={this.handleContact}
					>
						<p style={{ margin: 0 }}>Let's Get in Touch:</p>
						<p style={{ margin: 0 }}>alextan785@gmail.com</p>
					</div>
				</div>

				<div style={{ position: "absolute", bottom: 5, color: "lightgray", fontSize: 14 }}>
					{MiscText.logo}
				</div>
			</section>
		);
	}
}
