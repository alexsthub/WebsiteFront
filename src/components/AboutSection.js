import React from "react";
import "../styles/About.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses, faMonument, faTachometerAlt, faClock } from "@fortawesome/free-solid-svg-icons";

// TODO: Implement progress bar
export default class AboutSection extends React.Component {
	render() {
		return (
			<section id="about" className="about-container center-vertical" ref={this.props.refProp}>
				<div className="about-content">
					<h3>ABOUT ME</h3>
					<div className="border" />

					<div className="column-container">
						<div className="center-vertical columns">
							<p id="about-description">
								I'm Alex, a software engineer based in Seattle, WA! I am a recent graduate from the
								<a className="link" href="https://www.washington.edu/">
									{" "}
									University of Washington{" "}
								</a>
								with a B.S. in{" "}
								<a className="link" href="https://ischool.uw.edu/programs/informatics">
									Informatics
								</a>
								. My goal is to become an established full stack developer. Through coursework and
								internship experience, I have grown a passion for creating programs that are
								efficient, intuitive, readable, and scaleable. I am always looking to grow my career
								and as an individual as I take on new challenges and learn new technologies or
								practices.
							</p>

							<p>
								I am currently looking for full time opportunities in Seattle, WA! If you would like
								to get in contact or if you have any questions, please contact me via email or
								LinkedIn.
							</p>
						</div>
						<div className="center-vertical columns">
							<img className="image" src={"/profilepicture.jpg"} alt={"Profile"} />
						</div>
					</div>

					<div className="column-container equal-children">
						<Trait
							title={"Efficient"}
							icon={faTachometerAlt}
							description={"I'm always thinking about the best way to do things and tradeoffs."}
						/>
						<Trait
							title={"Readable"}
							icon={faGlasses}
							description={"Code that flows well, is easily legible, and maintainable. "}
						/>
						<Trait
							title={"Reliable"}
							icon={faClock}
							description={"Well planned projects and error handling to strengthen availability."}
						/>
						<Trait
							title={"Scalable"}
							icon={faMonument}
							description={
								"Handle lots of data and traffic with minimal downtime and loss of quality."
							}
						/>
					</div>
				</div>

				<div className="about-content wide">
					<div className="column-container equal-children">
						<div className="skills-column">
							<p className="title">{"Languages & Frameworks"}</p>
							<Skill skill={"Python"} />
							<Skill skill={"JavaScript"} />
							<Skill skill={"TypeScript"} />
							<Skill skill={"Node.js"} />
							<Skill skill={"Golang"} />
							<Skill skill={"SQL"} />
							<Skill skill={"React.js"} />
							<Skill skill={"React Native"} />
							<Skill skill={"Express"} />
						</div>
						<div className="skills-column">
							<p className="title">{"Tools"}</p>
							<Skill skill={"AWS"} />
							<Skill skill={"Git"} />
							<Skill skill={"Docker"} />
							<Skill skill={"SQL Server"} />
							<Skill skill={"Data Warehousing"} />
							<Skill skill={"MongoDB"} />
							<Skill skill={"Redis"} />
						</div>
						<div className="skills-column">
							<p className="title">{"Concepts"}</p>
							<Skill skill={"Server Side Dev"} />
							<Skill skill={"Client Side Dev"} />
							<Skill skill={"Architecture"} />
							<Skill skill={"UML Models"} />
							<Skill skill={"Unit Testing"} />
							<Skill skill={"Websockets"} />
							<Skill skill={"Webscraping"} />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

class Trait extends React.Component {
	render() {
		return (
			<div className="trait">
				<div className="icon-shape">
					<FontAwesomeIcon icon={this.props.icon} size={"2x"} />
				</div>
				<p className="title">{this.props.title}</p>
				<p className="description">{this.props.description}</p>
			</div>
		);
	}
}

class Skill extends React.Component {
	render() {
		return (
			<div className="column-container skill-container">
				<div className="columns">
					<p>{this.props.skill}</p>
				</div>
				<div className="columns progress-bar"></div>
			</div>
		);
	}
}
