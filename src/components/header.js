import React, { createRef } from "react";

import colors from "../constants/colors";
import "../styles/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HeaderText } from "../constants/text";

const MAX_CIRCLES = 2;
const height = window.innerHeight;
const width = window.innerWidth;
export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.canvas = createRef();
	}

	componentDidMount = () => {
		this.canvas = this.canvas.current;
		this.canvas.width = width;
		this.canvas.height = height;
		this.ctx = this.canvas.getContext("2d");

		this.circleList = this.generateCircles(this.ctx);
		this.circleList[0].update();
		this.animate();
	};

	generateBackground = () => {
		const c = this.ctx;
		const gradient = c.createLinearGradient(50, 0, 0, window.innerHeight);
		gradient.addColorStop(0, "rgba(20, 22, 26, 1)");
		gradient.addColorStop(1, "rgba(69, 77, 94, 1)");
		c.fillStyle = gradient;
		c.fillRect(0, 0, window.innerWidth, window.innerHeight);
	};

	generateCircles = (ctx) => {
		let circleList = [];

		for (let i = 0; i < MAX_CIRCLES; i++) {
			const radius = 10;
			const x = Math.random() * (width - radius * 2) + radius;
			const y = 60;
			const dx = (Math.random() - 0.5) * 8;
			const dy = 5;

			const circle = new Circle(x, y, dx, dy, radius, this.canvas.width, height, ctx);
			circleList.push(circle);
		}

		return circleList;
	};

	animate = () => {
		requestAnimationFrame(this.animate);
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.generateBackground();
		this.circleList.forEach((c) => {
			c.update();
		});
	};

	handleLearnMore = () => {
		window.scrollTo(0, this.props.aboutRef.current.offsetTop - 60);
	};

	render() {
		return (
			<div className="App-header" ref={this.props.refProp}>
				<canvas className="canvas-background" ref={this.canvas} />
				<div className="header-content">
					<div className="text">
						<span>
							Hello, I'm{" "}
							<span style={{ color: colors.boldText, fontWeight: "bold" }}>{HeaderText.name}.</span>
						</span>
						<p>{HeaderText.description}</p>
					</div>
					<div className="learn-more-button" onClick={this.handleLearnMore}>
						Learn More
						<FontAwesomeIcon className="right-arrow" icon={faArrowRight} size="xs" />
					</div>
				</div>
			</div>
		);
	}
}

class Circle {
	constructor(x, y, dx, dy, radius, width, height, ctx) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.maxWidth = width;
		this.maxHeight = height;
		this.ctx = ctx;
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.strokeStyle = "black";
		this.ctx.fillStyle = "white";
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		this.ctx.fill();
		this.ctx.stroke();
	}

	update() {
		if (this.x + this.radius > this.maxWidth || this.x - this.radius < 0) this.dx = -this.dx;
		if (this.y + this.radius > this.maxHeight || this.y - this.radius < 0) this.dy = -this.dy;
		this.y += this.dy;
		this.x += this.dx;

		this.draw();
	}
}
