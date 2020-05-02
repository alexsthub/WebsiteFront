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
			"Communicated with multiple vendors and sta  to confirm all items are properly received.",
		],
	},
];

export { HeaderText, MiscText, Links, Skills, Experiences };
