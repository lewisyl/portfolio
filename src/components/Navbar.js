import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img src={logo} alt="logo" className="logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link
								smooth={true}
								to="home"
								offset={-110}
								className="nav-link"
								href="#"
							>
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link
								smooth={true}
								to="aboutMe"
								offset={-110}
								className="nav-link"
								href="#"
							>
								About Me
							</Link>
						</li>
						<li className="nav-item">
							<Link
								smooth={true}
								to="skills"
								offset={-110}
								className="nav-link"
								href="#"
							>
								Skills
							</Link>
						</li>
						<li className="nav-item">
							<Link
								smooth={true}
								to="experiences"
								offset={-110}
								className="nav-link"
								href="#"
							>
								Experiences
							</Link>
						</li>
						<li className="nav-item">
							<Link
								smooth={true}
								to="education"
								offset={-110}
								className="nav-link"
								href="#"
							>
								Education
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
