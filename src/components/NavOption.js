import React from "react";
import "../styles/NavBar.css";
import colors from "../constants/colors";

export default class NavOptions extends React.Component {
  render() {
    const selectedStyle = this.props.selected
      ? { color: colors.navHighlight }
      : null;
    return (
      <div
        className="nav-option"
        style={selectedStyle}
        onClick={this.props.onClick}
      >
        <p>{this.props.text}</p>
      </div>
    );
  }
}
