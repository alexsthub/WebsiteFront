import React from "react";
import "../styles/Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

// TODO: Fill in the modal
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
		this.setState({ fadeType: "out" });
	};

	transitionEnd = (e) => {
		if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;
		if (this.state.fadeType === "out") {
			this.props.onClose();
		}
	};

	render() {
		return (
			<div>
				<div className={`modal fade-${this.state.fadeType}`} onTransitionEnd={this.transitionEnd}>
					<div className="modal-content">
						<div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
							<div style={{ flex: 1, wordWrap: "break-word" }}>
								<h3>
									Varmada Varmada Varmada Varmada Varmada Varmada Varmada Varmada Varmada Varmada
								</h3>
							</div>

							<div className="close-container" onClick={this.handleClose}>
								<FontAwesomeIcon className="close" icon={faWindowClose} />
							</div>
						</div>
					</div>
				</div>
				<div className={`modal-background`} onMouseDown={this.handleClose} />
			</div>
		);
	}
}
