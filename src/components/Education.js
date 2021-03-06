import React from "react";

const Education = () => {
	return (
		<div id="education" className="education">
			<div className="d-flex justify-content-center my-5">
				<h1>Education</h1>
			</div>
			<div className="container experience-wrapper">
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>Bachelor in Application Development</h3>
						<h4>Renton Technical College</h4>
						<h5>Current GPA: 4.0</h5>
						<h5>Sep 2020 - Mar 2022</h5>
						<h6>CS Teaching Assistant/Tutor:</h6>
						<ul>
							<li>From Jun 2021 to Graduation:</li>
							<li>
								Assisting in Computer Science programming courses, including C#,
								OOP and more
							</li>
						</ul>
						<h6>Core Courses:</h6>
						<ul>
							<li>
								Software Engineering(Agile, DevOps, Requirements Engineering,
								Modeling, etc.)
							</li>
							<li>Discrete Math</li>
							<li>Advanced Data Structures & Algorithms</li>
							<li>
								Software Applications Development I & II (C#, ASP.NET Core, EF
								Core)
							</li>
							<li>
								Mobile Application Development I & II (Java, Android Studio)
							</li>
							<li>Data Mining</li>
							<li>Advanced Database Intelligence</li>
							<li>IT Project Management</li>
						</ul>
					</div>
				</div>
				{/* - */}
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>Full-stack Web Development</h3>
						<h4>Coding Dojo</h4>
						<h5>Coding Bootcamp</h5>
						<h5>Aug 2019 - Nov 2019</h5>
						<p>
							Intensive bootcamp program, learned 3 full stacks in 14 weeks with
							1000+ coding hours and 100+ web applications built.
						</p>
						<h6>Major Full-stack Projects:</h6>
						<ul>
							<li>
								<strong>Restaurant API</strong> - JavaScript (M.E.A.N
								Full-stack)
								<ul>
									<li>
										<a
											href="https://github.com/lewisyl/restaurants"
											target="_blank"
											rel="noreferrer"
										>
											GitHub Link
										</a>
									</li>
									<li>User can add, edit and delete a restaurant</li>
									<li>
										User can rate and leave review for the existed restaurants
									</li>
									<li>
										Delete button will only be shown within 30 sec after new
										restaurant is created
									</li>
									<li>
										Dynamic front-end input validation, and static back-end
										validation as well
									</li>
									<li>Multiple Schemas and Nested Routing</li>
									<li>
										Utilized: HTML/CSS, JavaScript (ES6), TypeScript, AngularJS,
										MongoDB, Express.js, Node.js, Mongoose, NoSQL, RESTful API,
										AWS EC2
									</li>
								</ul>
							</li>
							<li>
								<strong>Bright Ideas</strong> - C# (ASP.NET Full-stack)
								<ul>
									<li>
										<a
											href="https://github.com/lewisyl/BrightIdeas"
											target="_blank"
											rel="noreferrer"
										>
											GitHub Link
										</a>
									</li>
									<li>
										User registration and login with validation features, such
										as unique and valid email address validation - on
										registration, and user dashboard can be accessed only after
										login, etc.
									</li>
									<li>
										Users are able to post their ideas, like others' ideas, and
										delete ideas after login
									</li>
									<li>User can't delete other users' ideas</li>
									<li>
										Utilized: HTML/CSS, C#, ASP.NET, LINQ, Entity Framework
										Core, MySQL, Microsoft SQL, Bootstrap, AWS EC2
									</li>
								</ul>
							</li>
							<li>
								<strong>Trip Buddy</strong> - Python (Django Full-stack)
								<ul>
									<li>
										<a
											href="https://github.com/lewisyl/trip_buddy"
											target="_blank"
											rel="noreferrer"
										>
											GitHub Link
										</a>
									</li>
									<li>
										User registration and login with validation features by
										using Regex
									</li>
									<li>User can post, edit and delete trips</li>
									<li>Date validation: Start Date must be in the future</li>
									<li>RSVP feature</li>
									<li>
										Utilized: HTML/CSS, Python, Django, SQLite, Bootstrap, AWS
										EC2
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				{/* - */}
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>Associate in Web Development</h3>
						<h4>Highline College</h4>
						<h5>GPA: 3.89</h5>
						<h5>Jun 2017 - Jun 2019</h5>
						<h6>Graduated with Honors:</h6>
						<ul>
							<li>
								Winter 2019 - President's Honor Roll (Quarter completed with 15+
								college level credits with a GPA of 4.0)
							</li>
							<li>
								Spring 2019 - President's Honor Roll (Quarter completed with 15+
								college level credits with a GPA of 4.0)
							</li>
							<li>
								Winner of PHP course project of Highline College Computer
								Science Club official website development
							</li>
						</ul>
						<h6>Highline College CS Club Official Site Project:</h6>
						<ul>
							<li>
								<a
									href="https://github.com/lewisyl/hcc_cs_club.git"
									target="_blank"
									rel="noreferrer"
								>
									GitHub Link
								</a>
							</li>
							<li>
								Fully connected to the database with announcement, events
								slideshow, member sign up, FAQs, intern opportunity list pages
							</li>
							<li>
								Admin page with login verification fully access to the database
								which display the data in the database and allows admin to add,
								edit and delete data
							</li>
							<li>
								Responsive pure HTML/CSS and PHP with minimum JavaScript to
								ensures the site will still be fully functioning even when users
								disable JavaScript
							</li>
							<li>Utilized: HTML/CSS, PHP, MySQL, JavaScript</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
