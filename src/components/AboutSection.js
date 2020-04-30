import React from "react";
import "../styles/About.css";

// TODO: Add 4 qualities and some skills about me
export default class AboutSection extends React.Component {
	render() {
		return (
			<section id="about" className="container center-vertical" ref={this.props.refProp}>
				<div className="content">
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
						</div>
						<div className="center-vertical columns">
							<img className="image" src={"/profilepicture.jpg"} alt={"Profile"} />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
