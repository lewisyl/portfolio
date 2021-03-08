import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBootstrap,
	faGithub,
	faJava,
	faJsSquare,
	faMicrosoft,
	faPhp,
	faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
	faDatabase,
	faFileCode,
	faLanguage,
	faPlusSquare,
	faTasks,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
	return (
		<div className="services">
			<h1 className="py-5">My Core Skills</h1>
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faJsSquare} size="2x" />
							</div>
							<h3>JavaScript</h3>
							<p>MEARN(MongoDB, ExpressJS, Angular, React, NodeJS)</p>
						</div>
					</div>
					{/* - */}
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon
									className="icon"
									icon={faMicrosoft}
									size="2x"
								/>
							</div>
							<h3>C#</h3>
							<p>ASP.NET Core, Entity Framework Core, ASP Razor, Linq</p>
						</div>
					</div>
					{/* - */}
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faPython} size="2x" />
							</div>
							<h3>Python</h3>
							<p>Django, Flask, Jinja</p>
						</div>
					</div>
					{/* - */}
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faDatabase} size="2x" />
							</div>
							<h3>DataBase</h3>
							<p>MySQL(Relational DB), NoSQL(Dynamic DB)</p>.
						</div>
					</div>
					{/* - */}
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
							</div>
							<h3>Web</h3>
							<p>HTML5/CSS3</p>
						</div>
					</div>
					{/* - */}
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
							</div>
							<h3>Git</h3>
							<p>GitHub Version Controll</p>
						</div>
					</div>
					{/* - */}
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faJava} size="2x" />
							</div>
							<h3>Java</h3>
							<p>Pure Java, Kotlin</p>
						</div>
					</div>
					{/* - */}
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faPhp} size="2x" />
							</div>
							<h3>PHP</h3>
							<p>Pure PHP</p>
						</div>
					</div>
					{/* - */}
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon
									className="icon"
									icon={faBootstrap}
									size="2x"
								/>
							</div>
							<h3>Bootstrap</h3>
							<p>Bootstrap 4, Bootstrap 5</p>
						</div>
					</div>
					{/* - */}
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faTasks} size="2x" />
							</div>
							<h3>Agile</h3>
							<p>Agile Software Development</p>
						</div>
					</div>
					{/* - */}
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faLanguage} size="2x" />
							</div>
							<h3>Human Language</h3>
							<p>English, Mandarin Chinese, Cantonese Chinese</p>
						</div>
					</div>
					{/* - */}
					<div className="col-md-3 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon
									className="icon"
									icon={faPlusSquare}
									size="2x"
								/>
							</div>
							<h3>MORE...</h3>
							<p>Learning never ends...</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
