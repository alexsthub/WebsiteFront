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
	render() {
		const aboutRef = createRef();
		return (
			<div className="App">
				<NavBar aboutRef={aboutRef} />
				<Header handleLearnMore={() => window.scrollTo(0, aboutRef.current.offsetTop)} />
				<main>
					<AboutSection refProp={aboutRef} />
					<ExperienceSection />
					<ProjectsSection />
				</main>
			</div>
		);
	}
}
