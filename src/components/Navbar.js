import React from "react";
import "../styles/NavBar.css";

import NavOption from "./NavOption";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
  }

  handleClick = (index) => {
    this.setState({ selectedIndex: index });
    // TODO: Scroll to the right spot
  };

  render() {
    const renderedOptions = options.map((option, index) => {
      return (
        <NavOption
          key={option}
          idx={index}
          text={option}
          selected={index === this.state.selectedIndex}
          onClick={() => this.handleClick(index)}
        />
      );
    });

    return <div className="navbar">{renderedOptions}</div>;
  }
}

const options = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Resume",
  "Contact",
];
