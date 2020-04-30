import React, { createRef } from "react";
import "./styles/App.css";

import NavBar from "./components/Navbar";
import PortalBar from "./components/PortalBar";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

// TODO: Work on about me
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
					refProp={this.refList.Home}
					handleLearnMore={() => window.scrollTo(0, this.refList.About.current.offsetTop - 64)}
				/>
				<PortalBar />
				<main>
					<AboutSection refProp={this.refList.About} />
					<ExperienceSection refProp={this.refList.Experience} />
					<ProjectsSection refProp={this.refList.Projects} />
				</main>
			</div>
		);
	}
}

const options = ["Home", "About", "Experience", "Projects", "Contact", "Resume"];
