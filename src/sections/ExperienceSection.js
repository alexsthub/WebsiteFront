import React from "react";
import "../styles/About.css";
import "../styles/Experience.css";
import { Experiences } from "../constants/text.js";

export default class ExperienceSection extends React.Component {
	render() {
		const experiencePoints = Experiences.map((e) => {
			return (
				<Experience
					key={e.title}
					title={e.title}
					jobTitle={e.jobTitle}
					link={e.link}
					start={e.start}
					end={e.end}
					points={e.points}
				/>
			);
		});

		return (
			<section
				id="experience"
				className="section-container center-vertical"
				ref={this.props.refProp}
			>
				<div className="limit-width">
					<h1 className="no-margin">MY EXPERIENCE</h1>
					<div className="border" />

					{experiencePoints}
				</div>
			</section>
		);
	}
}

class Experience extends React.Component {
	render() {
		const dateRange = this.props.start + "-" + this.props.end;
		const points = this.props.points.map((p) => {
			return <li key={p}>{p}</li>;
		});
		return (
			<div className="experience-container">
				<a href={this.props.link} target="_blank" rel="noopener noreferrer">
					{this.props.title}
				</a>
				<p>{this.props.jobTitle}</p>
				<p>{dateRange}</p>
				<ul>{points}</ul>
			</div>
		);
	}
}
