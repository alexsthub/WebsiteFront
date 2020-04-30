import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/PortalBar.css";
import { Links } from "../constants/text";

import { usePopper } from "react-popper";

// TODO: Show popper on hover
export default class PortalBar extends React.Component {
	render() {
		return (
			<div className="portal-container">
				<ClickableIcon link={Links.github} icon={faGithub} />
				<ClickableIcon link={Links.linkedin} icon={faLinkedin} />
				<ClickableIcon link={Links.email} icon={faEnvelope} />
				<div className="bottom-bar" />
			</div>
		);
	}
}

class ClickableIcon extends React.Component {
	render() {
		return (
			<a href={this.props.link}>
				<FontAwesomeIcon className="icon" icon={this.props.icon} />
			</a>
		);
	}
}
