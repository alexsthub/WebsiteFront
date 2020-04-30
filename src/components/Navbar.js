import React from "react";
import "../styles/NavBar.css";

import NavOption from "./NavOption";

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

	// TODO: Imprecise because of the navbar i think.
	checkRange(index, yPos) {
		const options = this.props.options;
		const ref = this.props.refList[options[index]];
		const offsetTop = ref.current.offsetTop;
		const offsetBottom = offsetTop + ref.current.offsetHeight;
		console.log(offsetTop, offsetBottom);
		if (offsetTop <= yPos && yPos <= offsetBottom) {
			console.log("Solved!");
			return true;
		}
		return false;
	}

	// TODO: Hardcoded to 4. should be this.props.options.length
	listenToScroll = () => {
		const yPos = window.scrollY + 55;
		console.log(yPos);

		let start = this.state.selectedIndex;
		let end = this.state.selectedIndex + 1;
		while (start >= 0 || end < 4) {
			if (start >= 0 && this.checkRange(start, yPos)) {
				this.setState({ selectedIndex: start });
				break;
			}
			start--;
			if (end < 4 && this.checkRange(end, yPos)) {
				this.setState({ selectedIndex: end });
				break;
			}
			end++;
		}
	};

	handleClick = (event, index) => {
		const section = event.currentTarget.lastChild.innerHTML;
		if (section !== "Resume") {
			const selectedRef = this.props.refList[section];
			window.scrollTo(0, selectedRef.current.offsetTop - 55);
			this.setState({ selectedIndex: index });
		}
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

		return <div className="navbar">{renderedOptions}</div>;
	}
}
