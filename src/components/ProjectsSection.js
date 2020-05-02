import React from "react";
import "../styles/About.css";
import "../styles/Experience.css";
import "../styles/Projects.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

// TODO: Click on it to show modal of more information.
// TODO: Style the card to not look like shit
export default class ProjectsSection extends React.Component {
	render() {
		return (
			<section id="Projects" className="section-container center-vertical" ref={this.props.refProp}>
				<div className="limit-width">
					<h3>MY PROJECTS</h3>
					<div className="border" />

					<div className="basic-grid">
						<Project />
						<div className="card">2</div>
						<div className="card">3</div>
						<div className="card">5</div>
						<div className="card">6</div>
						<div className="card">7</div>
						<div className="card">8</div>
					</div>
				</div>
			</section>
		);
	}
}

class Project extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<p className="card-title">Varmada</p>
					<p className="card-descr">
						Creating a service that acts like the middleman between your home and a shipping carrier
						for IOS and Android.
					</p>
					<div className="test">
						<p className="card-tech">Tools:</p>
						<p className="card-tech">React Native, AWS Amplify</p>
					</div>

					<div className="card-icons">
						<a
							href={"https://wjbarng.wixsite.com/varmada"}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon className="card-icon" icon={faExternalLinkAlt} />
						</a>
						<a
							href={"https://github.com/alexsthub/Varmada"}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon className="card-icon space" icon={faGithub} />
						</a>
					</div>
				</div>
			</div>
		);
	}
}
