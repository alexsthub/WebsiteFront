import React from "react";
import "../styles/Modal.css";
import "../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
		const header = (
			<div className="flex-row flex">
				<div className="flex">
					<h3>{this.props.title}</h3>
				</div>
				<div className="close-container" onClick={this.handleClose}>
					<FontAwesomeIcon className="close" icon={faWindowClose} />
				</div>
			</div>
		);

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
							<p>
								This project was inspired by the boom in ecommerce primarily inspired by Amazon. At
								times when I had to return packages, I was so lazy, sometimes waiting weeks or never
								returning it at all. But what if there was a service to take care of that for you?
								Research has shown that 30% of items purchased online are returned and that there is
								a big opportunity space for 'the first mile' in returns.
							</p>
							<p>
								I began drawing up designs in Figma and planning my approach. I ended up using React
								Native to target mobile users and AWS Amplify to do the heavy lifting in the backend
								such as Authentication, Storage, and Databases. Users will be able to request
								packaging (boxes, mailers) if they don't have them and request label printing if
								they cannot. After submitting a location, date, and time, users can track the status
								of their return and be notified of any major changes. Everything will be in-app for
								a great user experience.
							</p>
							<p>
								What started off as a personal project turned into my Capstone project, which
								includes 3 other team members. The project is still a work in progress but has been
								a really good experience for me because not only have I been able to strengthen my
								technical skills but my leadership skills as well. I learned to plan well and what
								it's like to lead a team, to delegate work, to give feedback, and to communicate
								properly, especially during the Covid-19 pandemic.
							</p>
							<p>
								What started off as a personal project turned into my Capstone project, which
								includes 3 other team members. The project is still a work in progress but has been
								a really good experience for me because not only have I been able to strengthen my
								technical skills but my leadership skills as well. I learned to plan well and what
								it's like to lead a team, to delegate work, to give feedback, and to communicate
								properly, especially during the Covid-19 pandemic.
							</p>

							<p>
								Tools: React Native, AWS Amplify, React Native, AWS Amplify,React Native, AWS
								Amplify,React Native, AWS Amplify
							</p>
							<div className="flex-row card-icons justify-start large-icon">
								{externalIcon}
								{githubIcon}
							</div>
						</div>
					</div>
				</div>
				<div className={`modal-background`} onMouseDown={this.handleClose} />
			</div>
		);
	}
}
