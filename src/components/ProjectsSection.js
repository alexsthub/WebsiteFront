import React from "react";
import "../styles/About.css";
import "../styles/Experience.css";
import "../styles/Projects.css";
import { Projects } from "../constants/text.js";
import Modal from "../components/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

// TODO: Click on it to show modal of more information.
// https://medium.com/@lucksp_22012/pure-react-modal-6e562a317b85
// TODO: Get that shit to the bottom
export default class ProjectsSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showModal: false };
	}

	render() {
		const projectList = Projects.map((p) => {
			return (
				<Project
					key={p.title}
					title={p.title}
					shortDescr={p.shortDescr}
					tools={p.tools}
					github={p.github}
					external={p.external ? p.external : null}
				/>
			);
		});
		return (
			<section id="Projects" className="section-container center-vertical" ref={this.props.refProp}>
				<div className="limit-width">
					<h3>MY PROJECTS</h3>
					<div className="border" />

					<div className="basic-grid">{projectList}</div>
				</div>
			</section>
		);
	}
}

// TODO: Put tools and icons on the same line?
class Project extends React.Component {
	render() {
		const tools = this.props.tools.join(", ");
		const externalIcon = this.props.external ? (
			<a href={this.props.external} target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon className="card-icon space" icon={faExternalLinkAlt} />
			</a>
		) : null;
		const githubIcon = this.props.github ? (
			<a href={this.props.github} target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon className="card-icon space" icon={faGithub} />
			</a>
		) : null;
		return (
			<div className="card">
				<div className="card-content">
					<p className="card-title">{this.props.title}</p>
					<p className="card-descr">{this.props.shortDescr}</p>
					<p className="card-tech">Tools: {tools}</p>

					<div className="card-icons">
						{externalIcon}
						{githubIcon}
					</div>
				</div>
			</div>
		);
	}
}
