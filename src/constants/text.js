const HeaderText = {
	name: "Alex Tan",
	description: "I'm a full stack developer.",
};

const MiscText = {
	logo: "Created my free logo at LogoMakr.com",
	contact:
		"I am currently looking for full time opportunities in Seattle, WA. Whether you would like to get in contact, have any questions, or just have some advice, please contact me via email or LinkedIn. I would love to hear from you! I will do my best to get back to you within a day.",
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
			rating: 10,
		},
		{
			name: "SQL",
			rating: 10,
		},
		{
			name: "Typescript",
			rating: 9,
		},
		{
			name: "Node.js",
			rating: 8,
		},
		{
			name: "Golang",
			rating: 7,
		},
		{
			name: "Java",
			rating: 7,
		},
		{
			name: "React (Native)",
			rating: 9,
		},
		{
			name: "Express",
			rating: 7,
		},
	],
	tools: [
		{
			name: "Git",
			rating: 10,
		},
		{
			name: "Data Warehousing",
			rating: 9,
		},
		{
			name: "MongoDB",
			rating: 9,
		},
		{
			name: "AWS",
			rating: 8,
		},
		{
			name: "Redis",
			rating: 8,
		},
		{
			name: "SQL Server",
			rating: 8,
		},
		{
			name: "Docker",
			rating: 7,
		},
		{
			name: "Firebase",
			rating: 7,
		},
	],
	concepts: [
		{
			name: "Client Side Dev",
			rating: 9,
		},
		{
			name: "Server Side Dev",
			rating: 9,
		},
		{
			name: "Webscraping",
			rating: 9,
		},
		{
			name: "Architecture",
			rating: 8,
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
			rating: 7,
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
			"Created scheduled web crawlers to extract SKU data from big retailers like Amazon, Target, and Walmart, scraping over 10 million data points a day.",
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
			"Used data to predict the quantity of items needed for different time periods to avoid shortages of materials during peak periods.",
			"Communicated with multiple vendors and staff to confirm all items are properly received.",
		],
	},
];

const Projects = [
	{
		title: "Varmada",
		shortDescr:
			"Creating a service that acts like the middleman between your home and a shipping carrier for the package return process.",
		project: [
			"This project was inspired by the boom in ecommerce primarily inspired by Amazon. At times when I had to return packages, I was so lazy, sometimes waiting weeks or never returning it at all. But what if there was a service to take care of that for you? Research has shown that 30% of items purchased online are returned and that there is a big opportunity space for 'the first mile' in returns. It was a good opportunity to try and build something from the ground up.",
			"Users will be able to request packaging (boxes, mailers) if they don't have them and request label printing if they cannot. After submitting a location, date, and time, users can track the status of their return and be notified of any major changes. Everything will be in-app for a great user experience.",
			"What started off as a personal project turned into my Capstone project, which includes 3 other team memebers. The project is still a work in progress but has been a really good experience for me because not only have I been able to strengthen my technical skills but my leadership skills as well. I learned to plan well and what it's like to lead a team, to delegate work, to give feedback, and to communicate properly, especially during the Covid-19 pandemic.",
		],
		problems: [
			"The biggest challenge was trying to start from nothing. How would the application look, what services are offered, who are my customers, and what systems will I need? Other problems included trying to understand how to utilize AWS Amplify and get certain UI components working.",
		],
		solutions: [
			"I made sure not to rush into programming and to spend an ample amount of time thinking about the problem and the potential solutions. I drew design mockups in Figma to get a sense of the application flow. I had to learn to use amplify by reading their extensive documentation but was a bit confusing and time consuming. For UI components, I tried to make most of my components myself to give myself a good understanding on React lifecycles.",
		],
		tools: ["React Native", "AWS Amplify"],
		github: "https://github.com/alexsthub/Varmada",
		external: "https://wjbarng.wixsite.com/varmada",
	},
	{
		title: "Review System",
		shortDescr: "A simple CRUD server that supports companies, products, and reviews.",
		project: [
			"I wanted to get more experience working with Typescript and building REST Api's so I thought I would implement a review system with persistent storage. Two main things that I wanted to work on were writing unit tests with Chai and Mocha and writing clean code. I wanted to prioritize good naming and structure and writing helper methods to make confusing sections a little more clear, especially in places where there are lots of callbacks.",
		],
		problems: [
			"I had trouble writing unit tests that would work without resetting the data in my database docker container. For instance, I would test editting a review by reviewID, but the reviewID might not exist anymore because I was reading from the same production database.",
		],
		solutions: [
			"I created a bash script that would spin up a new database instance specifically for testing, run the tests, and then delete the instance. This made the row ID's consistent even if I ran the tests multiple times. The only downside is that the new instance takes about 15 seconds to load before tests can be run.",
		],
		tools: ["Typescript", "Express", "Docker", "Bash"],
		github: "https://github.com/alexsthub/ReviewSystem",
	},
	{
		title: "Personal Website",
		shortDescr:
			"My personal website created with React.js and CSS. Hosted on a free EC2 instance so don't overload it!",
		project: [
			"My personal website is written in React.js and CSS. This application is dockerized, hosted on an EC2 instance, and tied to my domain name. I used LetsEncrypt for a SSL certificate and bash scripts for quicker building and deploying to my server using docker.",
			"Overall a fun project that I think I will go back and change as more notable achievements pop up in my life and I get better as a web developer.",
		],
		problems: [
			"I spent a lot of time using React Native. The concepts are the same but the implementation is slightly different.",
		],
		solutions: [
			"I spent some extra time to relearn the distinctions between the two frameworks and new things such as the CSS grid layout and the canvas element for extra visuals and interactibility.",
		],
		tools: ["React.js, Docker, Bash"],
		github: "https://github.com/alexsthub/WebsiteFront",
	},
	{
		title: "Chat Application",
		shortDescr:
			"A simple chat application reminiscent of Slack. Supports multiple and private channels.",
		project: [
			"I created a simple chat application that supports multiple and private channels and users. Users are able to edit and delete messages/channels that they created and likewise add and remove users from channels. This project was structured with a microservice architecture. I used Golang to build the gateway and secure token authentication service using Redis and MySQL from user tokens and user information, respectively. I also used Node.js with express to build the messaging system with the help of MongoDB and RabbitMQ. I also built a less robust front-end interface with React.js and CSS.",
			"This project was really fun because I was introduced to new things such as microservices and understanding the details of user authentication. This was a solo project for my Server Side Development class.",
			"The front-end and back-end services were both dockerized and deployed on EC2 instances. Unfortunately those instances are no longer running.",
		],
		problems: [
			"There were a lot of new concepts introduced with this project such as microservices, websockets, and message queues. Understanding and implementing secure authentication and implementation of a Trie for user lookup also took a considerable amount of time.",
		],
		solutions: [
			"My general approach to understanding something new is to read documentation, watch tutorials, or ask for help. I don't think there is anything wrong with asking for help as long as you've tried different options already. Writing tests and thinking of all the possible edgecases helped me write more reliable code.",
		],
		tools: ["Golang, React.js, Express, EC2, Docker, Websockets, RabbitMQ"],
		github: "https://github.com/alexsthub/ChatApp",
	},
	{
		title: "Recipe Saver",
		shortDescr:
			"A web application where users can enter and save recipe information they like and view all saved recipes when they like.",
		project: [
			"This application allows authenticated users to enter recipe information and an image and save it into a sorted collection to view later. Authenticated and storage was handled entirely by Firebase.",
			"This project was for my Client Side Development class which I did with a partner. I took a leadership role and delegated work for him to do, providing support when needed. The end product was completed in React.js and CSS but initially we were told to make it using jQuery, and then converted our code to React.js to get a better sense of interacting elements.",
		],
		problems: [
			"A problem was the structure of the entire project. As we were working, the code became more and more difficult to read as wwe both contributed to the repository. It was getting hard to understand the changes that the other person had made.",
		],
		solutions: [
			"We tried to communicate better to understand each other's intent. However, this was a big learning experience for me towards the importance of software structure and clean code. Moving forward, I made sure to increase the priority of structure and readability in my latest projects.",
		],
		longDescr: [
			"This was my first React.js project built from the ground up to completion. It was nice to use Firebase to handle the backend implementation so that I could focus on structure and interaction of components.",
		],
		tools: ["React.js, Firebase, jQuery"],
		github: "https://github.com/alexsthub/Recipe-Saver",
		external: "https://recipe-saver-5b55b.firebaseapp.com/",
	},
	{
		title: "Steal Grabber",
		shortDescr:
			"A webscraper that will get product information returned from a query in craigslist.",
		project: [
			"The idea was to find products on craigslist and and compare them to their retail price and if the price on Craigslist was a certain percentage of the retail price, to mark that item. The current webscraper will get all product items given a query in Craigslist using Python. However, I found that the products returned were often so far off from the intial query and the title of these products were severely inconsistent that I did not continue.",
			"However, the scraper was interesting to make. I had a lot of fun using Async.io and Aiohttp to scrape asynchronously, reducing runtime by about 30x. I also implemented pagination in case multiple pages of items were returned, which they often were.",
		],
		problems: [
			"Using the Aiohttp package to make asynchronous requests to a browser. This whole process was a lot different from simple asynchronous functions in javascript.",
		],
		solutions: ["Reading documentation and manually testing if functions are executing properly."],
		tools: ["Python, Async.io, Pandas"],
		github: "https://github.com/alexsthub/stealGrabber",
	},
	{
		title: "Correlation-One Algo",
		shortDescr: "An algorithm for a tower defense game competition hosted by Citadel.",
		project: [
			"Correlation One is a programming competition hosted by Citadel in which teams create an algorithm for a tower defense game and play against 'bosses' (already created algorithms) and algorithms from other teams. I was part of a team of 3 and the whole competition lasted about 5 hours. Teams could either write an algorithm or train a machine learning model. We chose the algorithmic approach in Python.",
			"I had a lot of fun because we first had to play the game to get a sense of what units synergized well with each other, if they were cost effective, strategies that countered other strategies, and responses. After testing our algorithm, I thought we had a good answer but upon playing other teams, we lost. This was because of an oversight where we didn't keep storing resources if attacks were not effective",
		],
		problems: [
			"There was not enough time to make a more robust algorithm and think of different types of attacks and defenses.",
		],
		solutions: [
			"From this experience, I learned to try and think of as many test cases as possible when implementing something and to maybe start earlier because often there are so many cases and it's difficult to think of all of them at once.",
		],
		tools: ["Python"],
		github: "https://github.com/alexsthub/Terminal1Algo",
		external: "https://www.correlation-one.com/",
	},
	{
		title: "Movie Revenue Predictor",
		shortDescr: "Utilized shallow machine learning methods to try and predict movie revenue.",
		project: [
			"The goals of this project was to see which features of a movie had the most impact on a movie's profit and how accurately can we predict profit. I worked on this project with three other members. To do this, we found a dataset of about 50,000 movies with extra data such as revenue, profit, director, etc.",
			"We then tried Linear, Ridge, Lasso, and Logistic regression to train our models but did not really get good results. I think this was because of a lack of preprocessing. One big thing we thought of later was that the data we got wasn't normalized. Revenue was likely given by the total, so older movies would have a much higher revenue than relatively newer ones.",
			"From this project, I learned to work well with a team and complete a 'real world' project from the ground up. We had to collect our data and clean it, which was a long process. ",
		],
		problems: [
			"There was a suprising amount of missing revenue data in the dataset we used from kaggle and not enough features to analyze.",
		],
		solutions: [
			"I scraped for that missing data on a different site with Python/request. In order to use actors and directors, which we felt was a large component in success, we quantified individual success by the number of movies they were in, award nominations, and award wins. To do this, I assisted a partner with crawling IMDB using selenium. From our mistakes, I learned to spend more time thinking about the data before acting on it. Is there anything wrong with it? Our repository was also very unorganized so I started thinking about structure and readability a little more.",
		],
		tools: ["Python", "Selenium"],
		github: "https://github.com/alexsthub/MoviePredictor",
	},
	{
		title: "Traffic Visualizer",
		shortDescr: "An analysis of Seattle traffic collision grouped by neighborhoods.",
		project: [
			"This project used traffic accident data provided by the WSDOT to map out collisions in different seattle neighborhoods based on different filters such as road conditions, weather, time, attention. This was my first data analysis project with a team of 3. We used R to manipulate the data and Shiny to create a simple UI.",
			"This was my introduction to programming and utilizing data and it really got me hooked to the profession.",
		],
		problems: ["As a first time git user, I had trouble with merge conflicts."],
		solutions: ["I asked my team members for assistance and worked out problems together."],
		tools: ["R", "Shiny"],
		github: "https://github.com/alexsthub/SeattleTrafficAnalysis",
		external: "https://bzb4565.shinyapps.io/final_project/",
	},
];

export { HeaderText, MiscText, Links, Skills, Experiences, Projects };
