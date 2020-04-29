import React from "react";
import "../styles/About.css";

export default class ProjectsSection extends React.Component {
	render() {
		return (
			<section id="Projects" className="container" ref={this.props.refProp}>
				<p>Projects</p>
			</section>
		);
	}
}
