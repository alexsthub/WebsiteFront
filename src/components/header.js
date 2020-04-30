import React from "react";

import colors from "../constants/colors";
import "../styles/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { HeaderText } from "../constants/text";

export default class Header extends React.Component {
	render() {
		return (
			<header className="App-header" ref={this.props.refProp}>
				<div className="text">
					<span>
						Hello, I'm{" "}
						<span style={{ color: colors.boldText, fontWeight: "bold" }}>{HeaderText.name}.</span>
					</span>
					<p>{HeaderText.description}</p>
				</div>
				<div className="learn-more-button" onClick={this.props.handleLearnMore}>
					Learn More
					<FontAwesomeIcon className="right-arrow" icon={faArrowRight} size="xs" />
				</div>
			</header>
		);
	}
}
