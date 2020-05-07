import React from "react";
import "../styles/About.css";
import "../styles/Experience.css";
import "../styles/Projects.css";
import { Projects } from "../constants/text.js";
import Modal from "../components/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

// TODO: Body style overflow is not working;
export default class ProjectsSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showModal: false, selectedProject: null };
	}

	handleCardClick = (project) => {
		document.body.style.overflowY = "hidden";
		this.setState({ showModal: true, selectedProject: project });
	};

	handleModalClose = () => {
		document.body.style.overflow = null;
		this.setState({ showModal: false, selectedProject: null });
	};

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
					onClick={() => this.handleCardClick(p)}
				/>
			);
		});

		return (
			<section id="Projects" className="section-container center-vertical" ref={this.props.refProp}>
				{this.state.showModal && this.state.selectedProject ? (
					<Modal
						show={this.state.showModal}
						onClose={this.handleModalClose}
						title={this.state.selectedProject.title}
						github={this.state.selectedProject.github}
						external={this.state.selectedProject.external}
						shortDescription={this.state.selectedProject.shortDescr}
						descriptions={this.state.selectedProject.longDescr}
						tools={this.state.selectedProject.tools}
					/>
				) : null}
				<div className="limit-width">
					<h3>MY PROJECTS</h3>
					<div className="border" />

					<div className="basic-grid">{projectList}</div>
				</div>
			</section>
		);
	}
}

class Project extends React.Component {
	handleIconClick = (e, link) => {
		e.stopPropagation();
		window.open(link, "_blank");
	};

	render() {
		const tools = this.props.tools.join(", ");
		const externalIcon = this.props.external ? (
			<div onClick={(e) => this.handleIconClick(e, this.props.external)}>
				<FontAwesomeIcon className="card-icon space" icon={faExternalLinkAlt} />
			</div>
		) : null;
		const githubIcon = this.props.github ? (
			<div onClick={(e) => this.handleIconClick(e, this.props.github)}>
				<FontAwesomeIcon className="card-icon space" icon={faGithub} />
			</div>
		) : null;
		return (
			<div className="card" onClick={this.props.onClick}>
				<div className="card-content">
					<p className="card-title">{this.props.title}</p>
					<p className="card-descr">{this.props.shortDescr}</p>
					<div className="flex-row">
						<p className="card-tech">Tools: {tools}</p>
						<div className="card-icons">
							{externalIcon}
							{githubIcon}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
