import React, { createRef } from "react";
import "./styles/App.css";

import NavBar from "./components/Navbar";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

// TODO: Work on about me
// TODO: scroll from navbar
// TODO: change navbar when i scroll to a location
// TODO: Scroll should be to the offset - the height of the navbar
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.refList = this.generateSectionRefs();
	}

	generateSectionRefs = () => {
		const refList = {};
		for (let i = 0; i < options.length; i++) {
			const option = options[i];
			refList[option] = createRef();
		}
		return refList;
	};

	render() {
		return (
			<div className="App">
				<NavBar refList={this.refList} options={options} />
				<Header
					handleLearnMore={() => window.scrollTo(0, this.refList.About.current.offsetTop - 55)}
				/>
				<main>
					<AboutSection refProp={this.refList.About} />
					<ExperienceSection />
					<ProjectsSection />
				</main>
			</div>
		);
	}
}

const options = ["Home", "About", "Experience", "Projects", "Resume", "Contact"];
