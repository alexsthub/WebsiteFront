import React from "react";
import "../styles/About.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses, faMonument, faTachometerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { Skills } from "../constants/text.js";

export default class AboutSection extends React.Component {
	render() {
		return (
			<section id="about" className="section-container center-vertical" ref={this.props.refProp}>
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
								(graduate of 2020) with a B.S. in{" "}
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
								My recent projects are far from perfect, but I strive to do my best and learn from
								my mistakes. I believe that as long as I maintain this ideal, I will be able to
								succeed in any context.
							</p>

							<p>
								When I'm not working, I like to relax with strategy games and finding new recipes to
								try in the kitchen!
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
						<SkillColumn title={"Languages & Frameworks"} skills={Skills.languages} />
						<SkillColumn title={"Tools"} skills={Skills.tools} />
						<SkillColumn title={"Concepts"} skills={Skills.concepts} />
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
		const { rating } = this.props;
		const percentage = rating + "0%";
		const widthStyle = { width: percentage };
		const fraction = rating + "/10";
		return (
			<div className="column-container skill-container">
				<div className="columns">
					<p>{this.props.skill}</p>
				</div>
				<div className="columns progress-bar">
					<div className="progress" style={widthStyle} />
					<p>{fraction}</p>
				</div>
			</div>
		);
	}
}

class SkillColumn extends React.Component {
	render() {
		const skills = this.props.skills.map((s) => {
			return <Skill key={s.name} skill={s.name} rating={s.rating} />;
		});

		return (
			<div className="skills-column">
				<p className="title">{this.props.title}</p>
				{skills}
			</div>
		);
	}
}
