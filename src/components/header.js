import React, { createRef } from "react";

import colors from "../constants/colors";
import "../styles/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HeaderText } from "../constants/text";

// TODO: Implement resizing (https://youtu.be/vxljFhP2krI?t=1485)
// TODO: Add the static stars
// TODO: Make the momentum logic
const MAX_CIRCLES = 2;
export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.canvas = createRef();
	}

	componentDidMount = () => {
		this.canvas = this.canvas.current;
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.ctx = this.canvas.getContext("2d");

		this.circleList = this.generateCircles(this.ctx);
		this.circleList[0].update();
		this.animate();
	};

	generateBackground = () => {
		const c = this.ctx;
		const width = window.innerWidth;
		const height = window.innerHeight;

		this.genBackgroundGradient(c, width, height);

		this.generateMountain(c, width, height, "#646973", "#202630", [
			[-0.2, 1],
			[0.5, 0.2],
			[1.2, 1],
		]);

		// Second row
		this.generateMountain(c, width, height, "#4f5561", "#292c36", [
			[-0.15, 1],
			[0.25, 0.4],
			[0.65, 1],
		]);
		this.generateMountain(c, width, height, "#4f5561", "#292c36", [
			[1.15, 1],
			[0.75, 0.4],
			[0.35, 1],
		]);

		// Bottom row
		this.generateMountain(c, width, height, "#282c34", "#282c34", [
			[-0.1, 1],
			[0.2, 0.75],
			[0.5, 1],
		]);
		this.generateMountain(c, width, height, "#282c34", "#282c34", [
			[0.2, 1],
			[0.5, 0.75],
			[0.8, 1],
		]);
		this.generateMountain(c, width, height, "#282c34", "#282c34", [
			[1.1, 1],
			[0.8, 0.75],
			[0.5, 1],
		]);
	};

	generateMountain = (c, width, height, colorStart, colorEnd, points) => {
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

	genBackgroundGradient = (c, width, height) => {
		let gradient = c.createLinearGradient(50, 0, 0, height);
		gradient.addColorStop(0, "rgba(20, 22, 26, 1)");
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
			const dy = 5;

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
