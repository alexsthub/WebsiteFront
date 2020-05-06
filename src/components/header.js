import React, { createRef } from "react";

import colors from "../constants/colors";
import "../styles/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HeaderText } from "../constants/text";

// TODO: How to make the stars not move at every animation?
// TODO: Make the momentum logic
const MAX_CIRCLES = 2;
const NUM_STARS = 35;
const GRAVITY = 1.5;
export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.canvas = createRef();
	}

	componentDidMount = () => {
		window.addEventListener("resize", this.onResize);

		this.canvas = this.canvas.current;
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.ctx = this.canvas.getContext("2d");

		this.init();
		// this.animate();
	};

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.onResize);
	};

	init = () => {
		this.circleList = this.generateCircles(this.ctx);
		this.generateBackground();
	};

	onResize = () => {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.init();
	};

	generateBackground = () => {
		const c = this.ctx;
		const width = window.innerWidth;
		const height = window.innerHeight;

		this.renderBackgroundGradient(c, width, height);
		this.renderStars(c, width, height);

		this.renderMountain(c, width, height, "#646973", "#202630", [
			[-0.2, 1],
			[0.5, 0.2],
			[1.2, 1],
		]);

		// Second row
		this.renderMountain(c, width, height, "#424752", "#292c36", [
			[-0.15, 1],
			[0.25, 0.4],
			[0.65, 1],
		]);
		this.renderMountain(c, width, height, "#424752", "#292c36", [
			[1.15, 1],
			[0.75, 0.4],
			[0.35, 1],
		]);

		// Bottom row
		this.renderMountain(c, width, height, "#282c34", "#282c34", [
			[-0.1, 1],
			[0.2, 0.75],
			[0.5, 1],
		]);
		this.renderMountain(c, width, height, "#282c34", "#282c34", [
			[0.2, 1],
			[0.5, 0.75],
			[0.8, 1],
		]);
		this.renderMountain(c, width, height, "#282c34", "#282c34", [
			[1.1, 1],
			[0.8, 0.75],
			[0.5, 1],
		]);
	};

	renderStars = (c, width, height) => {
		c.strokeStyle = "white";
		c.fillStyle = "white";
		c.shadowColor = "white";
		for (let i = 0; i < NUM_STARS; i++) {
			const xPos = Math.random() * width;
			const yPos = Math.random() * height;
			const radius = Math.floor(Math.random() * 5);

			c.beginPath();
			c.shadowBlur = radius * 3;
			c.arc(xPos, yPos, radius, 0, Math.PI * 2, false);
			c.fill();
			c.stroke();
		}

		c.shadowBlur = 0;
	};

	renderMountain = (c, width, height, colorStart, colorEnd, points) => {
		const gradient = c.createLinearGradient(0, 0, 0, height);
		gradient.addColorStop(0, colorStart);
		gradient.addColorStop(1, colorEnd);
		c.fillStyle = gradient;
		c.beginPath();
		for (let i = 0; i < points.length; i++) {
			const multipliers = points[i];
			if (i === 0) {
				c.moveTo(width * multipliers[0], height * multipliers[1]);
			} else {
				c.lineTo(width * multipliers[0], height * multipliers[1]);
			}
		}
		c.fill();
	};

	renderBackgroundGradient = (c, width, height) => {
		let gradient = c.createLinearGradient(50, 0, 0, height);
		gradient.addColorStop(0, "#192233");
		gradient.addColorStop(1, "rgba(69, 77, 94, 1)");
		c.fillStyle = gradient;
		c.fillRect(0, 0, width, height);
	};

	generateCircles = (ctx) => {
		let circleList = [];

		for (let i = 0; i < MAX_CIRCLES; i++) {
			const radius = 10;
			const x = Math.random() * (this.canvas.width - radius * 2) + radius;
			const y = 60;
			const dx = (Math.random() - 0.5) * 8;
			const dy = 8;

			const circle = new Circle(x, y, dx, dy, radius, this.canvas.width, this.canvas.height, ctx);
			circleList.push(circle);
		}

		return circleList;
	};

	animate = () => {
		requestAnimationFrame(this.animate);
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.generateBackground();
		this.circleList.forEach((c) => {
			// c.update();
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
		this.dy = this.dy + GRAVITY;
		this.y += this.dy;
		this.x += this.dx;

		this.draw();
	}
}
