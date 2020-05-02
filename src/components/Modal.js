import React from "react";
import "../styles/Modal.css";

export default class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fadeType: null,
		};
	}

	componentDidMount = () => {
		window.addEventListener("keydown", this.onEscKeyDown, false);
		setTimeout(() => this.setState({ fadeType: "in" }), 0);
	};

	componentDidUpdate = (prevProps) => {
		if (!this.props.show && prevProps.show) {
			this.setState({ fadeType: "out" });
		}
	};

	componentWillUnmount = () => {
		window.removeEventListener("keydown", this.onEscKeyDown, false);
	};

	onEscKeyDown = (e) => {
		if (e.key !== "Escape") return;
		this.setState({ fadeType: "out" });
	};

	handleClose = (e) => {
		e.preventDefault();
		this.props.onClose();
	};

	transitionEnd = (e) => {
		if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;

		if (this.state.fadeType === "out") {
			this.props.onClose();
		}
	};

	render() {
		// console.log(this.state.fadeType);
		// const backgroundFade =
		// 	this.state.fadeType && this.state.fadeType === "in" ? "in-background" : null;
		// console.log(backgroundFade);
		return (
			<div className={`modal-background`} onMouseDown={this.handleClose}>
				<div className={`modal fade-${this.state.fadeType}`} onTransitionEnd={this.transitionEnd}>
					<h3>JUST TESTING</h3>
					<div onClick={this.handleClose}>x</div>
				</div>
			</div>
		);
	}
}
// TODO: Background fade and all fade out
