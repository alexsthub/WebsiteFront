import React, { createRef } from "react";
import "./styles/App.css";

import NavBar from "./components/Navbar";
import PortalBar from "./components/PortalBar";
import Header from "./sections/Header";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

// TODO: Need to do something about the navbar.
// TODO: Fix the modal
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
				<PortalBar />

				<main>
					<Header refProp={this.refList.Home} aboutRef={this.refList.About} />
					<AboutSection refProp={this.refList.About} />
					<ExperienceSection refProp={this.refList.Experience} />
					<ProjectsSection refProp={this.refList.Projects} />
					<ContactSection refProp={this.refList.Contact} />
				</main>
			</div>
		);
	}
}

const options = ["Home", "About", "Experience", "Projects", "Contact"];
