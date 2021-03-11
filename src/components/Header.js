import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typed from "react-typed";

const Header = () => {
	return (
		<div id="home" className="header-wraper">
			<div className="main-info">
				<h1>Lewis Liu</h1>
				<Typed
					className="typed-text"
					strings={["Full-stack Software Engineer", "Full-stack Web Developer"]}
					typeSpeed={40}
					backSpeed={60}
					loop
				/>
				<div class="btn-group" role="group" aria-label="Social Portfolios">
					<a
						href="https://www.linkedin.com/in/lewisliudev/"
						target="_blank"
						rel="noreferrer"
						className="btn-main-offer"
					>
						<FontAwesomeIcon className="icon" icon={faLinkedin} size="1x" />
						<span> </span>
						LinkedIn
					</a>
					<a
						href="https://github.com/lewisyl"
						target="_blank"
						rel="noreferrer"
						className="btn-main-offer"
					>
						<FontAwesomeIcon className="icon" icon={faGithub} size="1x" />
						<span> </span>
						GitHub
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
