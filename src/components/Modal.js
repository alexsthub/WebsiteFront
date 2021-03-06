import React from "react";
import "../styles/Modal.css";
import "../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
		const header = (
			<div className="flex-row flex">
				<div className="flex">
					<h1>{this.props.title}</h1>
				</div>
				<div className="close-container" onClick={this.handleClose}>
					<FontAwesomeIcon className="close" icon={faWindowClose} />
				</div>
			</div>
		);

		const projectDescription = this.props.projectDescription
			? this.props.projectDescription.map((d) => {
					return <p key={d}>{d}</p>;
			  })
			: null;

		const problemDescription = this.props.problemDescription
			? this.props.problemDescription.map((d) => {
					return <p key={d}>{d}</p>;
			  })
			: null;

		const solutionDescription = this.props.solutionDescription
			? this.props.solutionDescription.map((d) => {
					return <p key={d}>{d}</p>;
			  })
			: null;

		const tools = this.props.tools.join(", ");

		const externalIcon = this.props.external ? (
			<a href={this.props.external} target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon className="card-icon" icon={faExternalLinkAlt} />
			</a>
		) : null;
		const githubIcon = this.props.github ? (
			<a href={this.props.github} target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon className="card-icon space" icon={faGithub} />
			</a>
		) : null;

		return (
			<div>
				<div className={`modal fade-${this.state.fadeType}`} onTransitionEnd={this.transitionEnd}>
					<div className="modal-content">
						{header}

						<div className="modal-description">
							<h3>Project</h3>
							<div className="text-container">{projectDescription}</div>
						</div>

						<div className="modal-description">
							<h3>Project Challenges</h3>
							<div className="text-container">{problemDescription}</div>
						</div>

						<div className="modal-description">
							<h3>My Solutions</h3>
							<div className="text-container">{solutionDescription}</div>
						</div>

						<div className="modal-description flex">
							<div className="modal-footer">
								<p style={{ color: "lightgray" }}>Tools: {tools}</p>
								<div className="flex-row card-icons justify-start large-icon">
									{externalIcon}
									{githubIcon}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`modal-background`} onMouseDown={this.handleClose} />
			</div>
		);
	}
}
