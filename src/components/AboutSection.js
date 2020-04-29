import React from "react";
import "../styles/About.css";

export default class AboutSection extends React.Component {
	render() {
		return (
			<section id="about" className="container" ref={this.props.refProp}>
				<p>About Me</p>
			</section>
		);
	}
}
