import React from "react";
import "../styles/Modal.css";

export default class Modal extends React.Component {
	componentDidMount() {
		window.addEventListener("keydown", this.onEscKeyDown, false);
		// setTimeout(() => this.setState({ fadeType: "in" }), 0);
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.onEscKeyDown, false);
	}

	onEscKeyDown = (e) => {
		if (e.key !== "Escape") return;
		// this.setState({ fadeType: "out" });
		this.handleClose();
	};

	handleClose = () => {
		this.props.onClose();
	};

	render() {
		return (
			<div className={`modal-background`} onMouseDown={this.handleClose}>
				<div className="modal">
					<h3>JUST TESTING</h3>
					<div onClick={this.handleClose}>x</div>
				</div>
			</div>
		);
	}
}
