import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/PortalBar.css";
import { Links } from "../constants/text";

import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

// TODO: Show popper on hover
export default class PortalBar extends React.Component {
	render() {
		return (
			<div className="portal-container">
				<ClickableIcon link={Links.github} icon={faGithub} title={"Github"} />
				<ClickableIcon link={Links.linkedin} icon={faLinkedin} title={"LinkedIn"} />
				<ClickableIcon link={Links.email} icon={faEnvelope} title={"Email"} />
				<div className="bottom-bar" />
			</div>
		);
	}
}

class ClickableIcon extends React.Component {
	render() {
		return (
			<Tooltip
				arrow={true}
				distance={25}
				title={this.props.title}
				position="right"
				trigger="mouseenter"
				theme={"light"}
			>
				<a href={this.props.link}>
					<FontAwesomeIcon className="icon" icon={this.props.icon} />
				</a>
			</Tooltip>
		);
	}
}
