(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/resume.2e26cbdd.pdf"},function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),o=a.n(r),s=(a(24),a(1)),c=a(2),l=a(5),h=a(4),d=(a(25),a(15),{boldText:"#e31b6d",navHighlight:"#04c2c9"}),u=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.selected?{color:d.navHighlight}:null;return i.a.createElement("div",{className:"nav-option",style:e,onClick:this.props.onClick},i.a.createElement("p",null,this.props.text))}}]),a}(i.a.Component),m=a(18),p=a.n(m),f=!0,g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).listenToScroll=function(){if(f)for(var e=window.scrollY+64,t=n.state.selectedIndex,a=n.state.selectedIndex+1;t>=0||a<5;){if(t>=0&&n.checkRange(t,e)){n.setState({selectedIndex:t});break}if(t--,a<5&&n.checkRange(a,e)){n.setState({selectedIndex:a});break}a++}},n.handleClick=function(e,t){var a,i=e.currentTarget.lastChild.innerHTML,r=n.props.refList[i];f=!1,window.scrollTo(0,r.current.offsetTop-62),a=window.innerWidth<600?2e3:1e3,setTimeout((function(){return f=!0}),a),n.setState({selectedIndex:t})},n.handleResume=function(){window.open(p.a,"_blank")},n.state={selectedIndex:0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"checkRange",value:function(e,t){var a=this.props.options,n=this.props.refList[a[e]],i=n.current.offsetTop,r=i+n.current.offsetHeight;return i<=t&&t<=r}},{key:"render",value:function(){var e=this,t=this.props.options.map((function(t,a){return i.a.createElement(u,{key:t,idx:a,text:t,selected:a===e.state.selectedIndex,onClick:function(t){return e.handleClick(t,a)}})})),a=i.a.createElement(u,{key:"Resume",idx:this.props.options.length,text:"Resume",selected:this.props.options.length===this.state.selectedIndex,onClick:this.handleResume});return t.push(a),i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"logo-container"},i.a.createElement("img",{className:"logo",src:"logo.png",alt:"logo"})),i.a.createElement("div",{className:"options-container"},t))}}]),a}(i.a.Component),w=a(7),b=a(6),v=a(8),y=(a(31),"Alex Tan"),k="I'm a full stack developer.",E="Created my free logo at LogoMakr.com",x="I am currently looking for full time opportunities in Seattle, WA. Whether you would like to get in contact, have any questions, or just have some advice, please contact me via email or LinkedIn. I would love to hear from you! I will do my best to get back to you within a day.",j="https://github.com/alexsthub",I="https://www.linkedin.com/in/alex-tan-10b491187/",C="mailto:alextan785@gmail.com",N={languages:[{name:"Python",rating:10},{name:"SQL",rating:10},{name:"Typescript",rating:9},{name:"Node.js",rating:8},{name:"Golang",rating:7},{name:"Java",rating:7},{name:"React (Native)",rating:9},{name:"Express",rating:7}],tools:[{name:"Git",rating:10},{name:"Data Warehousing",rating:9},{name:"MongoDB",rating:9},{name:"AWS",rating:8},{name:"Redis",rating:8},{name:"SQL Server",rating:8},{name:"Docker",rating:7},{name:"Firebase",rating:7}],concepts:[{name:"Client Side Dev",rating:9},{name:"Server Side Dev",rating:9},{name:"Webscraping",rating:9},{name:"Architecture",rating:8},{name:"Distributed Systems",rating:7},{name:"Unit Testing",rating:7},{name:"Websockets",rating:7}]},S=[{title:"Stackline",jobTitle:"Full Stack Developer Intern",link:"https://www.stackline.com/",start:"June 2018",end:"April 2019",points:["Created scheduled web crawlers to extract SKU data from big retailers like Amazon, Target, and Walmart, scraping over 10 million data points a day.","Built AWS Kinesis pipelines processing crawled activity into Redshift and monitored the quality of data using CloudWatch metrics.","Automated daily and weekly business operations with Python and AWS services.","Built simple and intuitive internal tools with React, allowing employees company-wide to safely read and write to databases without knowledge of SQL."]},{title:"University of Washington Libraries",jobTitle:"Purchasing / Financial Services Assistant",link:"https://www.lib.washington.edu/",start:"October 2015",end:"June 2018",points:["Assisted in purchases and the circulation of all items between the UW Libraries.","Developed a coherent local inventory system, storing information on nearly 500 products, and managed a purchasing database to reconcile budget expenditures.","Used data to predict the quantity of items needed for different time periods to avoid shortages of materials during peak periods.","Communicated with multiple vendors and staff to confirm all items are properly received."]}],T=[{title:"Varmada",shortDescr:"Creating a service that acts like the middleman between your home and a shipping carrier for the package return process.",project:["This project was inspired by the boom in ecommerce primarily inspired by Amazon. At times when I had to return packages, I was so lazy, sometimes waiting weeks or never returning it at all. But what if there was a service to take care of that for you? Research has shown that 30% of items purchased online are returned and that there is a big opportunity space for 'the first mile' in returns. It was a good opportunity to try and build something from the ground up.","Users will be able to request packaging (boxes, mailers) if they don't have them and request label printing if they cannot. After submitting a location, date, and time, users can track the status of their return and be notified of any major changes. Everything will be in-app for a great user experience.","What started off as a personal project turned into my Capstone project, which includes 3 other team memebers. The project is still a work in progress but has been a really good experience for me because not only have I been able to strengthen my technical skills but my leadership skills as well. I learned to plan well and what it's like to lead a team, to delegate work, to give feedback, and to communicate properly, especially during the Covid-19 pandemic."],problems:["The biggest challenge was trying to start from nothing. How would the application look, what services are offered, who are my customers, and what systems will I need? Other problems included trying to understand how to utilize AWS Amplify and get certain UI components working."],solutions:["I made sure not to rush into programming and to spend an ample amount of time thinking about the problem and the potential solutions. I drew design mockups in Figma to get a sense of the application flow. I had to learn to use amplify by reading their extensive documentation but was a bit confusing and time consuming. For UI components, I tried to make most of my components myself to give myself a good understanding on React lifecycles."],tools:["React Native","AWS Amplify"],github:"https://github.com/alexsthub/Varmada",external:"https://wjbarng.wixsite.com/varmada"},{title:"Review System",shortDescr:"A simple CRUD server that supports companies, products, and reviews.",project:["I wanted to get more experience working with Typescript and building REST Api's so I thought I would implement a review system with persistent storage. Two main things that I wanted to work on were writing unit tests with Chai and Mocha and writing clean code. I wanted to prioritize good naming and structure and writing helper methods to make confusing sections a little more clear, especially in places where there are lots of callbacks."],problems:["I had trouble writing unit tests that would work without resetting the data in my database docker container. For instance, I would test editting a review by reviewID, but the reviewID might not exist anymore because I was reading from the same production database."],solutions:["I created a bash script that would spin up a new database instance specifically for testing, run the tests, and then delete the instance. This made the row ID's consistent even if I ran the tests multiple times. The only downside is that the new instance takes about 15 seconds to load before tests can be run."],tools:["Typescript","Express","Docker","Bash"],github:"https://github.com/alexsthub/ReviewSystem"},{title:"Personal Website",shortDescr:"My personal website created with React.js and CSS. Hosted on a free EC2 instance so don't overload it!",project:["My personal website is written in React.js and CSS. This application is dockerized, hosted on an EC2 instance, and tied to my domain name. I used LetsEncrypt for a SSL certificate and bash scripts for quicker building and deploying to my server using docker.","Overall a fun project that I think I will go back and change as more notable achievements pop up in my life and I get better as a web developer."],problems:["I spent a lot of time using React Native. The concepts are the same but the implementation is slightly different."],solutions:["I spent some extra time to relearn the distinctions between the two frameworks and new things such as the CSS grid layout and the canvas element for extra visuals and interactibility."],tools:["React.js, Docker, Bash"],github:"https://github.com/alexsthub/WebsiteFront"},{title:"Chat Application",shortDescr:"A simple chat application reminiscent of Slack. Supports multiple and private channels.",project:["I created a simple chat application that supports multiple and private channels and users. Users are able to edit and delete messages/channels that they created and likewise add and remove users from channels. This project was structured with a microservice architecture. I used Golang to build the gateway and secure token authentication service using Redis and MySQL from user tokens and user information, respectively. I also used Node.js with express to build the messaging system with the help of MongoDB and RabbitMQ. I also built a less robust front-end interface with React.js and CSS.","This project was really fun because I was introduced to new things such as microservices and understanding the details of user authentication. This was a solo project for my Server Side Development class.","The front-end and back-end services were both dockerized and deployed on EC2 instances. Unfortunately those instances are no longer running."],problems:["There were a lot of new concepts introduced with this project such as microservices, websockets, and message queues. Understanding and implementing secure authentication and implementation of a Trie for user lookup also took a considerable amount of time."],solutions:["My general approach to understanding something new is to read documentation, watch tutorials, or ask for help. I don't think there is anything wrong with asking for help as long as you've tried different options already. Writing tests and thinking of all the possible edgecases helped me write more reliable code."],tools:["Golang, React.js, Express, EC2, Docker, Websockets, RabbitMQ"],github:"https://github.com/alexsthub/ChatApp"},{title:"Recipe Saver",shortDescr:"A web application where users can enter and save recipe information they like and view all saved recipes when they like.",project:["This application allows authenticated users to enter recipe information and an image and save it into a sorted collection to view later. Authenticated and storage was handled entirely by Firebase.","This project was for my Client Side Development class which I did with a partner. I took a leadership role and delegated work for him to do, providing support when needed. The end product was completed in React.js and CSS but initially we were told to make it using jQuery, and then converted our code to React.js to get a better sense of interacting elements."],problems:["A problem was the structure of the entire project. As we were working, the code became more and more difficult to read as wwe both contributed to the repository. It was getting hard to understand the changes that the other person had made."],solutions:["We tried to communicate better to understand each other's intent. However, this was a big learning experience for me towards the importance of software structure and clean code. Moving forward, I made sure to increase the priority of structure and readability in my latest projects."],longDescr:["This was my first React.js project built from the ground up to completion. It was nice to use Firebase to handle the backend implementation so that I could focus on structure and interaction of components."],tools:["React.js, Firebase, jQuery"],github:"https://github.com/alexsthub/Recipe-Saver",external:"https://recipe-saver-5b55b.firebaseapp.com/"},{title:"Steal Grabber",shortDescr:"A webscraper that will get product information returned from a query in craigslist.",project:["The idea was to find products on craigslist and and compare them to their retail price and if the price on Craigslist was a certain percentage of the retail price, to mark that item. The current webscraper will get all product items given a query in Craigslist using Python. However, I found that the products returned were often so far off from the intial query and the title of these products were severely inconsistent that I did not continue.","However, the scraper was interesting to make. I had a lot of fun using Async.io and Aiohttp to scrape asynchronously, reducing runtime by about 30x. I also implemented pagination in case multiple pages of items were returned, which they often were."],problems:["Using the Aiohttp package to make asynchronous requests to a browser. This whole process was a lot different from simple asynchronous functions in javascript."],solutions:["Reading documentation and manually testing if functions are executing properly."],tools:["Python, Async.io, Pandas"],github:"https://github.com/alexsthub/stealGrabber"},{title:"Correlation-One Algo",shortDescr:"An algorithm for a tower defense game competition hosted by Citadel.",project:["Correlation One is a programming competition hosted by Citadel in which teams create an algorithm for a tower defense game and play against 'bosses' (already created algorithms) and algorithms from other teams. I was part of a team of 3 and the whole competition lasted about 5 hours. Teams could either write an algorithm or train a machine learning model. We chose the algorithmic approach in Python.","I had a lot of fun because we first had to play the game to get a sense of what units synergized well with each other, if they were cost effective, strategies that countered other strategies, and responses. After testing our algorithm, I thought we had a good answer but upon playing other teams, we lost. This was because of an oversight where we didn't keep storing resources if attacks were not effective"],problems:["There was not enough time to make a more robust algorithm and think of different types of attacks and defenses."],solutions:["From this experience, I learned to try and think of as many test cases as possible when implementing something and to maybe start earlier because often there are so many cases and it's difficult to think of all of them at once."],tools:["Python"],github:"https://github.com/alexsthub/Terminal1Algo",external:"https://www.correlation-one.com/"},{title:"Movie Revenue Predictor",shortDescr:"Utilized shallow machine learning methods to try and predict movie revenue.",project:["The goals of this project was to see which features of a movie had the most impact on a movie's profit and how accurately can we predict profit. I worked on this project with three other members. To do this, we found a dataset of about 50,000 movies with extra data such as revenue, profit, director, etc.","We then tried Linear, Ridge, Lasso, and Logistic regression to train our models but did not really get good results. I think this was because of a lack of preprocessing. One big thing we thought of later was that the data we got wasn't normalized. Revenue was likely given by the total, so older movies would have a much higher revenue than relatively newer ones.","From this project, I learned to work well with a team and complete a 'real world' project from the ground up. We had to collect our data and clean it, which was a long process. "],problems:["There was a suprising amount of missing revenue data in the dataset we used from kaggle and not enough features to analyze."],solutions:["I scraped for that missing data on a different site with Python/request. In order to use actors and directors, which we felt was a large component in success, we quantified individual success by the number of movies they were in, award nominations, and award wins. To do this, I assisted a partner with crawling IMDB using selenium. From our mistakes, I learned to spend more time thinking about the data before acting on it. Is there anything wrong with it? Our repository was also very unorganized so I started thinking about structure and readability a little more."],tools:["Python","Selenium"],github:"https://github.com/alexsthub/MoviePredictor"},{title:"Traffic Visualizer",shortDescr:"An analysis of Seattle traffic collision grouped by neighborhoods.",project:["This project used traffic accident data provided by the WSDOT to map out collisions in different seattle neighborhoods based on different filters such as road conditions, weather, time, attention. This was my first data analysis project with a team of 3. We used R to manipulate the data and Shiny to create a simple UI.","This was my introduction to programming and utilizing data and it really got me hooked to the profession."],problems:["As a first time git user, I had trouble with merge conflicts."],solutions:["I asked my team members for assistance and worked out problems together."],tools:["R","Shiny"],github:"https://github.com/alexsthub/SeattleTrafficAnalysis",external:"https://bzb4565.shinyapps.io/final_project/"}],O=(a(32),a(9)),M=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=[{title:"Github",link:j,icon:v.a},{title:"LinkedIn",link:I,icon:v.b},{title:"Email",link:C,icon:b.c}].map((function(e){return i.a.createElement(R,{key:e.title,link:e.link,icon:e.icon,title:e.title})}));return i.a.createElement("div",{className:"portal-container"},e,i.a.createElement("div",{className:"bottom-bar"}))}}]),a}(i.a.Component),R=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(O.Tooltip,{arrow:!0,distance:25,title:this.props.title,position:"right",trigger:"mouseenter",theme:"light"},i.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(w.a,{className:"icon",icon:this.props.icon})))}}]),a}(i.a.Component),D=(a(34),40),P={x:void 0,y:void 0},A=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).componentDidMount=function(){window.addEventListener("resize",i.onResize),window.addEventListener("mousemove",i.handleMouseMove),i.canvas=i.canvas.current,i.canvas.width=window.innerWidth,i.canvas.height=window.innerHeight,i.ctx=i.canvas.getContext("2d"),D=i.canvas.width<460?20:40,i.init(),i.animate()},i.componentWillUnmount=function(){window.removeEventListener("resize",i.onResize),window.removeEventListener("mousemove",i.handleMouseMove)},i.handleMouseMove=function(e){P.x=e.x,P.y=e.y},i.init=function(){i.circleList=[],i.particleList=[],i.backgroundStarList=i.generateBackgroundStars(i.ctx)},i.onResize=function(){i.canvas.width=window.innerWidth,i.canvas.height=window.innerHeight,D=i.canvas.width<460?20:40,i.init()},i.renderMountains=function(){var e=i.ctx,t=window.innerWidth,a=window.innerHeight;i.renderMountain(e,t,a,"#646973","#202630",[[-.2,1],[.5,.2],[1.2,1]]),i.renderMountain(e,t,a,"#424752","#292c36",[[-.15,1],[.25,.4],[.65,1]]),i.renderMountain(e,t,a,"#424752","#292c36",[[1.15,1],[.75,.4],[.35,1]]),i.renderMountain(e,t,a,"#282c34","#282c34",[[-.1,1],[.2,.75],[.5,1]]),i.renderMountain(e,t,a,"#282c34","#282c34",[[.2,1],[.5,.75],[.8,1]]),i.renderMountain(e,t,a,"#282c34","#282c34",[[1.1,1],[.8,.75],[.5,1]])},i.generateBackgroundStars=function(e){for(var t=window.innerWidth,a=window.innerHeight,n=[],i=0;i<D;i++){var r=Math.random()*t,o=Math.random()*a,s=Math.floor(5*Math.random())+2,c=new z(r,o,s,e);n.push(c)}return n},i.renderMountain=function(e,t,a,n,i,r){var o=e.createLinearGradient(0,0,0,a);o.addColorStop(0,n),o.addColorStop(1,i),e.fillStyle=o,e.beginPath();for(var s=0;s<r.length;s++){var c=r[s];0===s?e.moveTo(t*c[0],a*c[1]):e.lineTo(t*c[0],a*c[1])}e.fill()},i.renderBackgroundGradient=function(e,t,a){var n=e.createLinearGradient(50,0,0,a);n.addColorStop(0,"#192233"),n.addColorStop(1,"rgba(69, 77, 94, 1)"),e.fillStyle=n,e.fillRect(0,0,t,a)},i.generateCircle=function(e){var t=Math.random(),a=t>=.5?13:10,n=t>=.5?2:1,r=Math.random()*(i.canvas.width-2*a)+a,o=15*(Math.random()-.5);return new W(r,60,o,8,a,n,i.canvas.width,i.canvas.height,e)},i.animate=function(){if(requestAnimationFrame(i.animate),i.ctx.clearRect(0,0,i.canvas.width,i.canvas.height),i.renderBackgroundGradient(i.ctx,window.innerWidth,window.innerHeight),i.backgroundStarList.forEach((function(e){e.draw()})),i.renderMountains(),i.circleList.forEach((function(e,t){if(e.update()&&e.radius>0)for(var a=0;a<4;a++){var n=new L(e.x,e.y,e.dy,e.maxWidth,e.maxHeight,i.ctx);i.particleList.push(n)}0===e.radius&&i.circleList.splice(t,1)})),i.particleList.forEach((function(e,t){e.update(),0===e.radius&&i.particleList.splice(t,1)})),i.timer++,i.timer%i.spawnRate===0){var e=i.generateCircle(i.ctx);i.circleList.push(e),i.spawnRate=Math.floor(170*Math.random()+80),i.timer=0}},i.handleLearnMore=function(){window.scrollTo(0,i.props.aboutRef.current.offsetTop-60)},i.canvas=Object(n.createRef)(),i.timer=0,i.spawnRate=50,i}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"App-header",ref:this.props.refProp},i.a.createElement("canvas",{className:"canvas-background",ref:this.canvas}),i.a.createElement("div",{className:"header-content"},i.a.createElement("div",{className:"text"},i.a.createElement("p",null,"Hello, I'm ",i.a.createElement("span",{style:{color:d.boldText}},y,".")),i.a.createElement("p",null,k)),i.a.createElement("div",{className:"learn-more-button",onClick:this.handleLearnMore},i.a.createElement("p",null,"Learn More"),i.a.createElement(w.a,{className:"right-arrow",icon:b.a,size:"xs"}))))}}]),a}(i.a.Component),L=function(){function e(t,a,n,i,r,o){Object(s.a)(this,e),this.x=t,this.y=a,this.dx=20*Math.random()-10,this.dy=n*(.4*Math.random()+.4),this.radius=3,this.maxWidth=i,this.maxHeight=r,this.ctx=o}return Object(c.a)(e,[{key:"draw",value:function(){this.ctx.beginPath(),this.ctx.strokeStyle="black",this.ctx.fillStyle="white",this.ctx.shadowColor="white",this.ctx.shadowBlur=.5*this.radius,this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.ctx.fill(),this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.closePath()}},{key:"update",value:function(){(this.x+this.radius>=this.maxWidth||this.x-this.radius<0)&&(this.dx=-this.dx),this.y+this.radius>this.maxHeight-20&&(this.radius=0),this.dy=this.dy+1,this.y+=this.dy,this.x+=this.dx,this.draw()}}]),e}(),W=function(){function e(t,a,n,i,r,o,c,l,h){Object(s.a)(this,e),this.x=t,this.y=a,this.dx=n,this.dy=i,this.radius=r,this.count=o,this.maxWidth=c,this.maxHeight=l,this.ctx=h}return Object(c.a)(e,[{key:"draw",value:function(){this.ctx.beginPath(),this.ctx.strokeStyle="black",this.ctx.fillStyle="white",this.ctx.shadowColor="white",this.ctx.shadowBlur=.5*this.radius,this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.ctx.fill(),this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.closePath()}},{key:"update",value:function(){var e=!1;if((this.x+this.radius>=this.maxWidth||this.x-this.radius<0)&&(this.dx=-this.dx),this.y+this.radius>this.maxHeight-50){var t=.25*Math.random()+.65;this.dy>=0&&(0===this.count?this.radius=0:(this.dy=-this.dy*t,this.count-=1,1===this.count&&(this.radius=10),0===this.count&&(this.radius=6)),e=!0)}return this.dy=this.dy+1,this.y+=this.dy,this.x+=this.dx,this.draw(),e}}]),e}(),z=function(){function e(t,a,n,i){Object(s.a)(this,e),this.x=t,this.y=a,this.radius=n,this.initialRadius=n,this.ctx=i}return Object(c.a)(e,[{key:"draw",value:function(){this.ctx.strokeStyle="white",this.ctx.fillStyle="white",this.ctx.shadowColor="white",this.ctx.beginPath(),P.x-this.x<20&&P.x-this.x>-20&&P.y-this.y<20&&P.y-this.y>-20?this.radius<2*this.initialRadius&&(this.radius+=1):this.radius>this.initialRadius&&(this.radius-=1),this.ctx.shadowBlur=3*this.radius,this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.ctx.fill(),this.ctx.stroke(),this.ctx.shadowBlur=0}}]),e}(),B=(a(11),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{id:"about",className:"section-container center-vertical",ref:this.props.refProp},i.a.createElement("div",{className:"about-content"},i.a.createElement("h1",{className:"no-margin"},"ABOUT ME"),i.a.createElement("div",{className:"border"}),i.a.createElement("div",{className:"column-container bottom-margin"},i.a.createElement("div",{className:"center-vertical columns"},i.a.createElement("p",{id:"about-description"},"I'm Alex, a software engineer based in Seattle, WA! I am a recent graduate from the",i.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.washington.edu/"}," ","University of Washington"," "),"(graduate of 2020) with a B.S. in"," ",i.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://ischool.uw.edu/programs/informatics"},"Informatics"),". My goal is to become an established full stack developer. Through coursework and internship experience, I have grown a passion for creating programs that are efficient, intuitive, readable, and scaleable. I am consistently looking for ways to grow both in my career and as an individual. I am eager to take on new challenges and learn new technologies and practices."),i.a.createElement("p",{style:{marginBottom:0}},"My recent projects are not perfect, but I strive to do my best and learn from my mistakes. I believe that as long as I maintain this ideal, I will be able to succeed in any context."),i.a.createElement("p",{style:{marginBottom:0}},"When I'm not working, I like to relax with strategy games and finding new recipes to try in the kitchen!")),i.a.createElement("div",{className:"center-vertical columns"},i.a.createElement("img",{className:"image",src:"/profile.jpg",alt:"Profile"}))),i.a.createElement("div",{className:"column-container equal-children"},i.a.createElement(H,{title:"Efficient",icon:b.g,description:"I'm always thinking about the best way to do things and tradeoffs."}),i.a.createElement(H,{title:"Readable",icon:b.e,description:"I write code that flows well, is easily legible, and maintainable."}),i.a.createElement(H,{title:"Reliable",icon:b.b,description:"I plan projects in advance and utilize robust error handling to strengthen availability."}),i.a.createElement(H,{title:"Scalable",icon:b.f,description:"I can handle lots of data and traffic with minimal downtime and loss of quality."}))),i.a.createElement("div",{className:"about-content wide"},i.a.createElement("div",{className:"column-container equal-children"},i.a.createElement(q,{title:"Languages & Frameworks",skills:N.languages}),i.a.createElement(q,{title:"Tools",skills:N.tools}),i.a.createElement(q,{title:"Concepts",skills:N.concepts}))))}}]),a}(i.a.Component)),H=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"trait"},i.a.createElement("div",{className:"icon-shape"},i.a.createElement(w.a,{icon:this.props.icon,size:"2x"})),i.a.createElement("p",{className:"title"},this.props.title),i.a.createElement("p",{className:"description"},this.props.description))}}]),a}(i.a.Component),U=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.rating,t={width:e+"0%"},a=e+"/10";return i.a.createElement("div",{className:"skill-container"},i.a.createElement("div",{className:"columns"},i.a.createElement("p",null,this.props.skill)),i.a.createElement("div",{className:"columns progress-bar"},i.a.createElement("div",{className:"progress",style:t}),i.a.createElement("p",null,a)))}}]),a}(i.a.Component),q=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.skills.map((function(e){return i.a.createElement(U,{key:e.name,skill:e.name,rating:e.rating})}));return i.a.createElement("div",{className:"skills-column"},i.a.createElement("p",{style:{fontSize:"1.5rem",fontWeight:"bold"}},this.props.title),e)}}]),a}(i.a.Component),F=(a(16),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=S.map((function(e){return i.a.createElement(G,{key:e.title,title:e.title,jobTitle:e.jobTitle,link:e.link,start:e.start,end:e.end,points:e.points})}));return i.a.createElement("section",{id:"experience",className:"section-container center-vertical",ref:this.props.refProp},i.a.createElement("div",{className:"limit-width"},i.a.createElement("h1",{className:"no-margin"},"MY EXPERIENCE"),i.a.createElement("div",{className:"border"}),e))}}]),a}(i.a.Component)),G=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.start+"-"+this.props.end,t=this.props.points.map((function(e){return i.a.createElement("li",{key:e},e)}));return i.a.createElement("div",{className:"experience-container"},i.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.title),i.a.createElement("p",null,this.props.jobTitle),i.a.createElement("p",null,e),i.a.createElement("ul",null,t))}}]),a}(i.a.Component),_=(a(17),a(35),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){window.addEventListener("keydown",n.onEscKeyDown,!1),setTimeout((function(){return n.setState({fadeType:"in"})}),0)},n.componentDidUpdate=function(e){!n.props.show&&e.show&&n.setState({fadeType:"out"})},n.componentWillUnmount=function(){window.removeEventListener("keydown",n.onEscKeyDown,!1)},n.onEscKeyDown=function(e){"Escape"===e.key&&n.setState({fadeType:"out"})},n.handleClose=function(e){e.preventDefault(),n.setState({fadeType:"out"})},n.transitionEnd=function(e){"opacity"===e.propertyName&&"in"!==n.state.fadeType&&"out"===n.state.fadeType&&n.props.onClose()},n.state={fadeType:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e=i.a.createElement("div",{className:"flex-row flex"},i.a.createElement("div",{className:"flex"},i.a.createElement("h1",null,this.props.title)),i.a.createElement("div",{className:"close-container",onClick:this.handleClose},i.a.createElement(w.a,{className:"close",icon:b.h}))),t=this.props.projectDescription?this.props.projectDescription.map((function(e){return i.a.createElement("p",{key:e},e)})):null,a=this.props.problemDescription?this.props.problemDescription.map((function(e){return i.a.createElement("p",{key:e},e)})):null,n=this.props.solutionDescription?this.props.solutionDescription.map((function(e){return i.a.createElement("p",{key:e},e)})):null,r=this.props.tools.join(", "),o=this.props.external?i.a.createElement("a",{href:this.props.external,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(w.a,{className:"card-icon",icon:b.d})):null,s=this.props.github?i.a.createElement("a",{href:this.props.github,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(w.a,{className:"card-icon space",icon:v.a})):null;return i.a.createElement("div",null,i.a.createElement("div",{className:"modal fade-".concat(this.state.fadeType),onTransitionEnd:this.transitionEnd},i.a.createElement("div",{className:"modal-content"},e,i.a.createElement("div",{className:"modal-description"},i.a.createElement("h3",null,"Project"),i.a.createElement("div",{className:"text-container"},t)),i.a.createElement("div",{className:"modal-description"},i.a.createElement("h3",null,"Project Challenges"),i.a.createElement("div",{className:"text-container"},a)),i.a.createElement("div",{className:"modal-description"},i.a.createElement("h3",null,"My Solutions"),i.a.createElement("div",{className:"text-container"},n)),i.a.createElement("div",{className:"modal-description flex"},i.a.createElement("div",{className:"modal-footer"},i.a.createElement("p",{style:{color:"lightgray"}},"Tools: ",r),i.a.createElement("div",{className:"flex-row card-icons justify-start large-icon"},o,s))))),i.a.createElement("div",{className:"modal-background",onMouseDown:this.handleClose}))}}]),a}(i.a.Component)),Q=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e){document.body.style.overflowY="hidden",n.setState({showModal:!0,selectedProject:e})},n.handleModalClose=function(){document.body.style.overflow=null,n.setState({showModal:!1,selectedProject:null})},n.state={showModal:!1,selectedProject:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=T.map((function(t){return i.a.createElement(J,{key:t.title,title:t.title,shortDescr:t.shortDescr,tools:t.tools,github:t.github,external:t.external?t.external:null,onClick:function(){return e.handleCardClick(t)}})}));return i.a.createElement("section",{id:"Projects",className:"section-container center-vertical",ref:this.props.refProp},this.state.showModal&&this.state.selectedProject?i.a.createElement(_,{show:this.state.showModal,onClose:this.handleModalClose,title:this.state.selectedProject.title,github:this.state.selectedProject.github,external:this.state.selectedProject.external,shortDescription:this.state.selectedProject.shortDescr,projectDescription:this.state.selectedProject.project,problemDescription:this.state.selectedProject.problems,solutionDescription:this.state.selectedProject.solutions,tools:this.state.selectedProject.tools}):null,i.a.createElement("div",{className:"limit-width"},i.a.createElement("h1",{className:"no-margin"},"MY PROJECTS"),i.a.createElement("div",{className:"border"}),i.a.createElement("div",{className:"basic-grid"},t)))}}]),a}(i.a.Component),J=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleIconClick=function(e,t){e.stopPropagation(),window.open(t,"_blank")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tools.join(", "),a=this.props.external?i.a.createElement("div",{className:"space",onClick:function(t){return e.handleIconClick(t,e.props.external)}},i.a.createElement(O.Tooltip,{arrow:!0,distance:10,title:"External",position:"top",trigger:"mouseenter",theme:"light"},i.a.createElement(w.a,{className:"card-icon",icon:b.d}))):null,n=this.props.github?i.a.createElement("div",{className:"space",onClick:function(t){return e.handleIconClick(t,e.props.github)}},i.a.createElement(O.Tooltip,{arrow:!0,distance:10,title:"Github",position:"top",trigger:"mouseenter",theme:"light"},i.a.createElement(w.a,{className:"card-icon",icon:v.a}))):null;return i.a.createElement("div",{className:"card",onClick:this.props.onClick},i.a.createElement("div",{className:"card-content"},i.a.createElement("p",{className:"card-title"},this.props.title),i.a.createElement("p",{className:"card-descr"},this.props.shortDescr),i.a.createElement("div",{className:"flex-row"},i.a.createElement("p",{className:"card-tech"},"Tools: ",t),i.a.createElement("div",{className:"card-icons"},a,n))))}}]),a}(i.a.Component),K=(a(36),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleContact=function(e){window.open(C,"mail"),e.preventDefault()},e}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{id:"contact",className:"section-container center-vertical contact-container",ref:this.props.refProp,style:{position:"relative"}},i.a.createElement("div",{className:"center-vertical contact-width"},i.a.createElement("h1",{className:"no-margin"},"CONTACT ME"),i.a.createElement("div",{className:"border"}),i.a.createElement("p",{style:{textAlign:"center"}},x),i.a.createElement("div",{className:"column learn-more-button",style:{marginTop:30},onClick:this.handleContact},i.a.createElement("p",{style:{margin:0}},"Let's Get in Touch:"),i.a.createElement("p",{style:{margin:0}},"alextan785@gmail.com"))),i.a.createElement("div",{style:{position:"absolute",bottom:5,color:"lightgray",fontSize:14}},E))}}]),a}(i.a.Component)),Y=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).generateSectionRefs=function(){for(var e={},t=0;t<V.length;t++){e[V[t]]=Object(n.createRef)()}return e},i.refList=i.generateSectionRefs(),i}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,{refList:this.refList,options:V}),i.a.createElement(M,null),i.a.createElement("main",null,i.a.createElement(A,{refProp:this.refList.Home,aboutRef:this.refList.About}),i.a.createElement(B,{refProp:this.refList.About}),i.a.createElement(F,{refProp:this.refList.Experience}),i.a.createElement(Q,{refProp:this.refList.Projects}),i.a.createElement(K,{refProp:this.refList.Contact})))}}]),a}(i.a.Component),V=["Home","About","Experience","Projects","Contact"];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.9a5dab1e.chunk.js.map