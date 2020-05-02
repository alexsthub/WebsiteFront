import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/PortalBar.css";
import { Links } from "../constants/text";

import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

export default class PortalBar extends React.Component {
	render() {
		const socialList = [
			{ title: "Github", link: Links.github, icon: faGithub },
			{
				title: "LinkedIn",
				link: Links.linkedin,
				icon: faLinkedin,
			},
			{ title: "Email", link: Links.email, icon: faEnvelope },
		];
		const options = socialList.map((option) => {
			return (
				<ClickableIcon
					key={option.title}
					link={option.link}
					icon={option.icon}
					title={option.title}
				/>
			);
		});
		return (
			<div className="portal-container">
				{options}
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
				<a href={this.props.link} target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon className="icon" icon={this.props.icon} />
				</a>
			</Tooltip>
		);
	}
}
