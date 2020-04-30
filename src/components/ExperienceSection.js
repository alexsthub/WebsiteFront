import React from "react";
import "../styles/About.css";

export default class ExperienceSection extends React.Component {
	render() {
		return (
			<section id="experience" className="containerB" ref={this.props.refProp}>
				<p>Experience</p>
			</section>
		);
	}
}
