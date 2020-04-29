import React from "react";

import colors from "../constants/colors";
import "../styles/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="text">
          <span>
            Hello, I'm{" "}
            <span style={{ color: colors.boldText, fontWeight: "bold" }}>
              Alex Tan.
            </span>
          </span>
          <p>I'm an aspiring full stack developer.</p>
        </div>
        <div className="learn-more-button" onClick={this.props.onClick}>
          Learn More
          <FontAwesomeIcon
            className="right-arrow"
            icon={faArrowRight}
            size="xs"
          />
        </div>
      </div>
    );
  }
}
