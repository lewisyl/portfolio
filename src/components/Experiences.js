import React from "react";

const Experiences = () => {
	return (
		<div id="experiences" className="experience">
			<div className="d-flex justify-content-center my-5">
				<h1>Experiences</h1>
			</div>
			<div className="container experience-wrapper">
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>Alaska Airlines - Software Engineer Intern</h3>
						<h5>Seattle(Remote), WA, USA</h5>
						<h5>Jun 2021 - Present</h5>
						<ul>
							<li>Middleware Services team</li>
							<li>Utilized: C#, ASP.NET Core, RESTful API</li>
						</ul>
					</div>
				</div>
				{/* - */}
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>Renton Technical College - CS Teaching Assistant/Tutor</h3>
						<h5>Renton, WA, USA</h5>
						<h5>Jun 2021 - Present</h5>
						<ul>
							<li>Assisting in Computer Science programming courses</li>
							<li>C#, OOP, and more</li>
						</ul>
					</div>
				</div>
				{/* - */}
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>SAP Concur - Software Engineer Intern</h3>
						<h5>Bellvue(Remote), WA, USA</h5>
						<h5>Jun 2020 - Oct 2020</h5>
						<ul>
							<li>Remote agile development working experience</li>
							<li>
								Worked with multiple Agile Software Engineering teams and
								Localization team
							</li>
							<li>
								Analyzed and re-documented a legacy Translation Suggestion Tool
								written in ASP.NET and JavaScript, which not working with newer
								ReactJS UI environment
							</li>
							<li>
								Provided possible solutions for making the legacy tool work with
								the new UI technology
							</li>
							<li>
								Re-engineered and developed a new Translation Suggestion Tool by
								using ReactJS that would work with both new and legacy
								environments and provide smoother and more modern UI
							</li>
							<li>
								Worked through software development process stages from
								analysing, design, developing, unit testing to adoption
							</li>
							<li>
								Technical Project Winner of 2020 SAP iXp Virtual Final Project
								Showcase
							</li>
							<li>
								Utilized: React, JavaScript, Agile SD, C#, ASP.NET, Github,
								Enzyme
							</li>
						</ul>
					</div>
				</div>
				{/* - */}
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>Visual Webz, LLC - Web Developer Intern</h3>
						<h5>Des Moines, WA, USA</h5>
						<h5>Mar 2019 - Jun 2019</h5>
						<ul>
							<li>
								<a
									href="https://www.wordpress.org/plugins/multiple-page-generator/"
									target="_blank"
									rel="noreferrer"
								>
									Plugin Marketplace URL
								</a>
							</li>
							<li>Built a 4 people development team for this project</li>
							<li>Developed a WordPress plugin - Multiple Page Generator</li>
							<li>
								Meta Tags Automatically Populated - A single click will create
								the page. This includes the page name, page title, SEO title,
								Meta description, and its content
							</li>
							<li>
								Upload Keywords - The plugin also provides a secondary
								entry/insertion, where you can upload an Excel File (.xlsx) with
								all your keywords and its values. This, in turn, will
								automatically populate the database with your keywords
							</li>
							<li>Deployed on WordPress plugin marketplace</li>
							<li>
								Utilized: HTML/CSS, PHP, JavaScript, JSON, WordPress library,
								SVN
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experiences;
