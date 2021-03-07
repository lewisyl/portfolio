import React from "react";
import Typed from "react-typed";

const Header = () => {
	return (
		<div className="header-wraper">
			<div className="main-info">
				<h1>Full-stack Software & Web Development</h1>
				<Typed
					className="typed-text"
					strings={[
						"Full-stack Software Development",
						"Full-stack Web Development",
					]}
					typeSpeed={40}
					backSpeed={60}
					loop
				/>
				<a href="#" className="btn-main-offer">
					Contact Me
				</a>
			</div>
		</div>
	);
};

export default Header;
