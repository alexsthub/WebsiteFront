import React from "react";
import "../styles/About.css";
import { Links, MiscText } from "../constants/text";

export default class ContactSection extends React.Component {
	handleContact = () => {
		window.open(Links.email, "_blank");
	};

	render() {
		return (
			<section
				id="contact"
				className="section-container center-vertical contact-container"
				ref={this.props.refProp}
				style={{ position: "relative" }}
			>
				<div className="center-vertical" style={{ width: "30%" }}>
					<h3>CONTACT ME</h3>
					<div className="border" />
					<p style={{ textAlign: "center" }}>{MiscText.contact}</p>

					<div className="learn-more-button" style={{ marginTop: 30 }} onClick={this.handleContact}>
						Let's Get in Touch
					</div>
				</div>

				<div style={{ position: "absolute", bottom: 5, color: "lightgray", fontSize: 14 }}>
					{MiscText.logo}
				</div>
			</section>
		);
	}
}
