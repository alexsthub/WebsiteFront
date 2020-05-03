import React, { createRef } from "react";
import "./styles/App.css";

import NavBar from "./components/Navbar";
import PortalBar from "./components/PortalBar";
import Header from "./components/Header";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import ResumeSection from "./sections/ResumeSection";

import { Route, Switch, Redirect } from "react-router-dom";

// TODO: Dare I do a lightmode/darkmode?
// TODO: Animations?
// TODO: LOGO / Favicon
// TODO: Deploy
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
					<Switch>
						<Route exact path="/">
							<Header refProp={this.refList.Home} aboutRef={this.refList.About} />
							<AboutSection refProp={this.refList.About} />
							<ExperienceSection refProp={this.refList.Experience} />
							<ProjectsSection refProp={this.refList.Projects} />
							<ContactSection refProp={this.refList.Contact} />
						</Route>
						<Route path="/resume">
							<ResumeSection />
						</Route>
						<Redirect to="/" />
					</Switch>
				</main>
			</div>
		);
	}
}

const options = ["Home", "About", "Experience", "Projects", "Contact", "Resume"];
