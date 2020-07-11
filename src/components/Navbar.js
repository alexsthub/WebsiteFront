import React from "react";
import "../styles/NavBar.css";

import NavOption from "./NavOption";
import Resume from "../misc/resume.pdf";

let active = true;
export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectedIndex: 0 };
	}

	componentDidMount() {
		window.addEventListener("scroll", this.listenToScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.listenToScroll);
	}

	checkRange(index, yPos) {
		const options = this.props.options;
		const ref = this.props.refList[options[index]];
		const offsetTop = ref.current.offsetTop;
		const offsetBottom = offsetTop + ref.current.offsetHeight;
		if (offsetTop <= yPos && yPos <= offsetBottom) {
			return true;
		}
		return false;
	}

	listenToScroll = () => {
		if (!active) {
			return;
		}

		const yPos = window.scrollY + 64;
		let start = this.state.selectedIndex;
		let end = this.state.selectedIndex + 1;
		while (start >= 0 || end < 5) {
			if (start >= 0 && this.checkRange(start, yPos)) {
				this.setState({ selectedIndex: start });
				break;
			}
			start--;
			if (end < 5 && this.checkRange(end, yPos)) {
				this.setState({ selectedIndex: end });
				break;
			}
			end++;
		}
	};

	handleClick = (event, index) => {
		const section = event.currentTarget.lastChild.innerHTML;
		const selectedRef = this.props.refList[section];
		active = false;
		window.scrollTo(0, selectedRef.current.offsetTop - 62);
		let timeout;
		if (window.innerWidth < 600) timeout = 2000;
		else timeout = 1000;
		setTimeout(() => (active = true), timeout);
		this.setState({ selectedIndex: index });
	};

	handleResume = () => {
		window.open(Resume, "_blank");
	};

	render() {
		const renderedOptions = this.props.options.map((option, index) => {
			return (
				<NavOption
					key={option}
					idx={index}
					text={option}
					selected={index === this.state.selectedIndex}
					onClick={(event) => this.handleClick(event, index)}
				/>
			);
		});

		const resumeOption = (
			<NavOption
				key={"Resume"}
				idx={this.props.options.length}
				text={"Resume"}
				selected={this.props.options.length === this.state.selectedIndex}
				onClick={this.handleResume}
			/>
		);
		renderedOptions.push(resumeOption);

		return (
			<div className="navbar">
				<div className="logo-container">
					<img className="logo" src={process.env.PUBLIC_URL + "/logo.png"} alt={"logo"} />
				</div>
				<div className="options-container">{renderedOptions}</div>
			</div>
		);
	}
}
