const HeaderText = {
	name: "Alex Tan",
	description: "I'm an aspiring full stack developer.",
};

const MiscText = {
	logo: "Created my free logo at LogoMakr.com",
};

const Links = {
	github: "https://github.com/alexsthub",
	linkedin: "https://www.linkedin.com/in/alex-tan-10b491187/",
	email: "mailto:alextan785@gmail.com",
};

const Skills = {
	languages: [
		{
			name: "Python",
			rating: 9,
		},
		{
			name: "JavaScript",
			rating: 9,
		},
		{
			name: "SQL",
			rating: 9,
		},
		{
			name: "TypeScript",
			rating: 8,
		},
		{
			name: "Node.js",
			rating: 7,
		},

		{
			name: "Golang",
			rating: 7,
		},
		{
			name: "Java",
			rating: 6,
		},
		{
			name: "React Native",
			rating: 9,
		},
		{
			name: "React.js",
			rating: 8,
		},
		{
			name: "Express",
			rating: 7,
		},
	],
	tools: [
		{
			name: "Git",
			rating: 9,
		},
		{
			name: "Data Warehousing",
			rating: 8,
		},
		{
			name: "MongoDB",
			rating: 8,
		},
		{
			name: "Redis",
			rating: 8,
		},
		{
			name: "SQL Server",
			rating: 7,
		},
		{
			name: "AWS",
			rating: 7,
		},
		{
			name: "Docker",
			rating: 6,
		},
	],
	concepts: [
		{
			name: "Webscraping",
			rating: 9,
		},
		{
			name: "Server Side Dev",
			rating: 8,
		},
		{
			name: "Client Side Dev",
			rating: 8,
		},
		{
			name: "Architecture",
			rating: 7,
		},
		{
			name: "Distributed Systems",
			rating: 7,
		},
		{
			name: "Unit Testing",
			rating: 7,
		},
		{
			name: "Websockets",
			rating: 6,
		},
	],
};

const Experiences = [
	{
		title: "Stackline",
		jobTitle: "Full Stack Developer Intern",
		link: "https://www.stackline.com/",
		start: "June 2018",
		end: "April 2019",
		points: [
			"Created scheduled web crawelers to extract SKU data from big retailers like Amazon,Target, Walmart, scraping over 10 million data points a day.",
			"Built AWS Kinesis pipelines processing crawled activity into Redshift and monitored the quality of data using CloudWatch metrics.",
			"Automated daily and weekly business operations with Python and AWS services.",
			"Built simple and intuitive internal tools with React, allowing employees company-wide to safely read and write to databases without knowledge of SQL.",
		],
	},
	{
		title: "University of Washington Libraries",
		jobTitle: "Purchasing / Financial Services Assistant",
		link: "https://www.lib.washington.edu/",
		start: "October 2015",
		end: "June 2018",
		points: [
			"Assisted in purchases and the circulation of all items between the UW Libraries.",
			"Developed a coherent local inventory system, storing information on nearly 500 products, and managed a purchasing database to reconcile budget expenditures.",
			"Used data to predict the quantity of items needed for di erent time periods to avoid shortages of materials during peak periods.",
			"Communicated with multiple vendors and staff to confirm all items are properly received.",
		],
	},
];

const Projects = [
	{
		title: "Varmada",
		shortDescr:
			"Creating a service that acts like the middleman between your home and a shipping carrier for the package return process. Made for IOS and Android.",
		longDescr: [
			"This project was inspired by the boom in ecommerce primarily inspired by Amazon. At times when I had to return packages, I was so lazy, sometimes waiting weeks or never returning it at all. But what if there was a service to take care of that for you? Research has shown that 30% of items purchased online are returned and that there is a big opportunity space for 'the first mile' in returns.",
			"I began drawing up designs in Figma and planning my approach. I ended up using React Native to target mobile users and AWS Amplify to do the heavy lifting in the backend such as Authentication, Storage, and Databases. Users will be able to request packaging (boxes, mailers) if they don't have them and request label printing if they cannot. After submitting a location, date, and time, users can track the status of their return and be notified of any major changes. Everything will be in-app for a great user experience.",
			"What started off as a personal project turned into my Capstone project, which includes 3 other team members. The project is still a work in progress but has been a really good experience for me because not only have I been able to strengthen my technical skills but my leadership skills as well. I learned to plan well and what it's like to lead a team, to delegate work, to give feedback, and to communicate properly, especially during the Covid-19 pandemic.",
		],
		tools: ["React Native", "AWS Amplify"],
		github: "https://github.com/alexsthub/Varmada",
		external: "https://wjbarng.wixsite.com/varmada",
	},
	{
		title: "Personal Website",
		shortDescr:
			"My personal website created with React.js and CSS. Hosted on an free EC2 instance so don't overload it!",
		tools: ["React.js, Docker, Bash"],
		github: "https://github.com/alexsthub/WebsiteFront",
	},
	{
		title: "Chat Application",
		shortDescr:
			"A simple chat application reminiscent of Slack. Supports multiple and private channels.",
		tools: ["Golang, React.js, Express, EC2, Docker, Websockets, RabbitMQ"],
		github: "https://github.com/alexsthub/ChatApp",
	},
	{
		title: "Recipe Saver",
		shortDescr:
			"A web application where users can enter and save recipe information they like and view all saved recipes when they like.",
		tools: ["React.js, Firebase"],
		github: "https://github.com/alexsthub/Recipe-Saver",
		external: "https://recipe-saver-5b55b.firebaseapp.com/",
	},
	{
		title: "Steal Grabber",
		shortDescr:
			"A webscraper that will get product information returned from a query in craigslist.",
		tools: ["Python, Async.io"],
		github: "https://github.com/alexsthub/stealGrabber",
	},
	{
		title: "Correlation-One Algo",
		shortDescr: "An algorithm for a tower defense game competition hosted by Citadel.",
		tools: ["Python"],
		github: "https://github.com/alexsthub/Terminal1Algo",
		external: "https://www.correlation-one.com/",
	},
	{
		title: "Movie Revenue Predictor",
		shortDescr: "Utilized shallow machine learning methods to try and predict movie revenue.",
		tools: ["Python", "Selenium"],
		github: "https://github.com/alexsthub/MoviePredictor",
	},
	{
		title: "Traffic Visualizer",
		shortDescr: "An analysis of Seattle traffic collision grouped by neighborhoods.",
		tools: ["R", "Shiny"],
		github: "https://github.com/alexsthub/SeattleTrafficAnalysis",
		external: "https://bzb4565.shinyapps.io/final_project/",
	},
];

export { HeaderText, MiscText, Links, Skills, Experiences, Projects };
