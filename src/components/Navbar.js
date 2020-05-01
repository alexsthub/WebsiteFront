import React from "react";
import "../styles/NavBar.css";

import NavOption from "./NavOption";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectedIndex: 0 };
	}

	// TODO: Only do this when I'm on the home page
	componentDidMount() {
		window.addEventListener("scroll", this.listenToScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.listenToScroll);
	}

	// TODO: Slightly imprecise. when i click on an option its a little off.
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

	// TODO: Hardcoded to 4. should be this.props.options.length
	listenToScroll = () => {
		const yPos = window.scrollY + 64;
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
			window.scrollTo(0, selectedRef.current.offsetTop - 64);
			this.setState({ selectedIndex: index });
		}
	};

	handleResume = (index) => {
		window.scrollTo(0, 0, "auto");
		this.setState({ selectedIndex: index });
		console.log("HELLO");
	};

	render() {
		const renderedOptions = this.props.options.map((option, index) => {
			if (option === "Resume") {
				return (
					<Link to="/resume" key={option} style={{ textDecoration: "none", color: "inherit" }}>
						<NavOption
							idx={index}
							text={option}
							selected={index === this.state.selectedIndex}
							onClick={() => this.handleResume(index)}
						/>
					</Link>
				);
			}

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

		return (
			<div className="navbar">
				<div className="logo-container">
					<img className="logo" src={"/logo2.png"} alt={"logo"} />
				</div>
				<div className="options-container">{renderedOptions}</div>
			</div>
		);
	}
}
