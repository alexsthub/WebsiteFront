import React, { createRef } from "react";
import "./styles/App.css";

import NavBar from "./components/Navbar";
import PortalBar from "./components/PortalBar";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";

import { Route, Switch, Redirect } from "react-router-dom";

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
