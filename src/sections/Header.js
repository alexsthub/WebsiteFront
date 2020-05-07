import React, { createRef } from "react";

import colors from "../constants/colors";
import "../styles/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HeaderText } from "../constants/text";

let NUM_STARS = 40;
const GRAVITY = 1;
const VELOCITY_DAMPEN_MAX = 0.4;
const VELOCITY_DAMPEN_MIN = 0.65;
const PARTICLES_PER_COLLISION = 4;
let mousePos = {
	x: undefined,
	y: undefined,
};
export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.canvas = createRef();
		this.timer = 0;
		this.spawnRate = 50;
	}

	componentDidMount = () => {
		window.addEventListener("resize", this.onResize);
		window.addEventListener("mousemove", this.handleMouseMove);

		this.canvas = this.canvas.current;
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.ctx = this.canvas.getContext("2d");

		if (this.canvas.width < 460) {
			NUM_STARS = 20;
		} else {
			NUM_STARS = 40;
		}

		this.init();
		this.animate();
	};

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.onResize);
		window.removeEventListener("mousemove", this.handleMouseMove);
	};

	handleMouseMove = (e) => {
		mousePos.x = e.x;
		mousePos.y = e.y;
	};

	init = () => {
		this.circleList = [];
		this.particleList = [];
		this.backgroundStarList = this.generateBackgroundStars(this.ctx);
	};

	onResize = () => {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		if (this.canvas.width < 460) {
			NUM_STARS = 20;
		} else {
			NUM_STARS = 40;
		}
		this.init();
	};

	renderMountains = () => {
		const c = this.ctx;
		const width = window.innerWidth;
		const height = window.innerHeight;

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

	generateBackgroundStars = (c) => {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const starList = [];
		for (let i = 0; i < NUM_STARS; i++) {
			const xPos = Math.random() * width;
			const yPos = Math.random() * height;
			const radius = Math.floor(Math.random() * 5) + 2;

			const star = new BackgroundStar(xPos, yPos, radius, c);
			starList.push(star);
		}
		return starList;
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

	generateCircle = (ctx) => {
		const randomSize = Math.random();
		const radius = randomSize >= 0.5 ? 13 : 10;
		const count = randomSize >= 0.5 ? 2 : 1;
		const x = Math.random() * (this.canvas.width - radius * 2) + radius;
		const y = 60;
		const dx = (Math.random() - 0.5) * 8;
		const dy = 8;

		const circle = new Circle(
			x,
			y,
			dx,
			dy,
			radius,
			count,
			this.canvas.width,
			this.canvas.height,
			ctx
		);
		return circle;
	};

	animate = () => {
		requestAnimationFrame(this.animate);
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.renderBackgroundGradient(this.ctx, window.innerWidth, window.innerHeight);
		this.backgroundStarList.forEach((s) => {
			s.draw();
		});
		this.renderMountains();

		this.circleList.forEach((c, index) => {
			const collision = c.update();
			if (collision && c.radius > 0) {
				for (let i = 0; i < PARTICLES_PER_COLLISION; i++) {
					const particle = new Particle(c.x, c.y, c.dy, c.maxWidth, c.maxHeight, this.ctx);
					this.particleList.push(particle);
				}
			}
			if (c.radius === 0) {
				this.circleList.splice(index, 1);
			}
		});

		this.particleList.forEach((p, index) => {
			p.update();
			if (p.radius === 0) {
				this.particleList.splice(index, 1);
			}
		});

		this.timer++;
		if (this.timer % this.spawnRate === 0) {
			const newCircle = this.generateCircle(this.ctx);
			this.circleList.push(newCircle);
			this.spawnRate = Math.floor(Math.random() * (250 - 80) + 80);
			this.timer = 0;
		}
	};

	handleLearnMore = () => {
		window.scrollTo(0, this.props.aboutRef.current.offsetTop - 60);
	};

	render() {
		return (
			<section className="App-header" ref={this.props.refProp}>
				<canvas className="canvas-background" ref={this.canvas} />
				<div className="header-content">
					<div className="text">
						<p>
							Hello, I'm <span style={{ color: colors.boldText }}>{HeaderText.name}.</span>
						</p>
						<p>{HeaderText.description}</p>
					</div>
					<div className="learn-more-button">
						<p>Learn More</p>
						<FontAwesomeIcon className="right-arrow" icon={faArrowRight} size="xs" />
					</div>
				</div>
			</section>
		);
	}
}

class Particle {
	constructor(x, y, parentDy, width, height, ctx) {
		this.x = x;
		this.y = y;
		this.dx = Math.random() * 20 - 10;
		this.dy = parentDy * (Math.random() * (0.8 - 0.4) + 0.4);
		this.radius = 3;
		this.maxWidth = width;
		this.maxHeight = height;
		this.ctx = ctx;
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.strokeStyle = "black";
		this.ctx.fillStyle = "white";
		this.ctx.shadowColor = "white";
		this.ctx.shadowBlur = this.radius * 0.5;
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.shadowBlur = 0;
		this.ctx.closePath();
	}

	update() {
		if (this.x + this.radius >= this.maxWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > this.maxHeight - 20) {
			this.radius = 0;
		}
		this.dy = this.dy + GRAVITY;
		this.y += this.dy;
		this.x += this.dx;

		this.draw();
	}
}

class Circle {
	constructor(x, y, dx, dy, radius, count, width, height, ctx) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.count = count;
		this.maxWidth = width;
		this.maxHeight = height;
		this.ctx = ctx;
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.strokeStyle = "black";
		this.ctx.fillStyle = "white";
		this.ctx.shadowColor = "white";
		this.ctx.shadowBlur = this.radius * 0.5;
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.shadowBlur = 0;
		this.ctx.closePath();
	}

	update() {
		let bottomCollision = false;
		if (this.x + this.radius >= this.maxWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > this.maxHeight - 50) {
			const velocityDampener =
				Math.random() * (VELOCITY_DAMPEN_MIN - VELOCITY_DAMPEN_MAX) + VELOCITY_DAMPEN_MIN;
			if (this.dy >= 0) {
				if (this.count === 0) {
					this.radius = 0;
				} else {
					this.dy = -(this.dy * velocityDampener);
					this.count -= 1;
					if (this.count === 1) this.radius = 10;
					if (this.count === 0) this.radius = 6;
				}
				bottomCollision = true;
			}
		}
		this.dy = this.dy + GRAVITY;
		this.y += this.dy;
		this.x += this.dx;

		this.draw();
		return bottomCollision;
	}
}

class BackgroundStar {
	constructor(x, y, radius, ctx) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.initialRadius = radius;
		this.ctx = ctx;
	}

	draw() {
		this.ctx.strokeStyle = "white";
		this.ctx.fillStyle = "white";
		this.ctx.shadowColor = "white";
		this.ctx.beginPath();

		if (
			mousePos.x - this.x < 20 &&
			mousePos.x - this.x > -20 &&
			mousePos.y - this.y < 20 &&
			mousePos.y - this.y > -20
		) {
			if (this.radius < this.initialRadius * 2) this.radius += 1;
		} else {
			if (this.radius > this.initialRadius) this.radius -= 1;
		}

		this.ctx.shadowBlur = this.radius * 3;
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.shadowBlur = 0;
	}
}
