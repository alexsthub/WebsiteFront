import React from "react";
import "../styles/About.css";

export default class ProjectsSection extends React.Component {
	render() {
		return (
			<section id="Projects" className="section-container center-vertical" ref={this.props.refProp}>
				<div className="limit-width">
					<h3>MY PROJECTS</h3>
					<div className="border" />
				</div>
			</section>
		);
	}
}
