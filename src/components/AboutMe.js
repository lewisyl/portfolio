import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb-5">
						<img className="profile-img" src={author} alt="author..." />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading">about me</h1>
					<p>
						Howdy! I am Lewis.I'm a Full-stack Software Engineer and Web
						Developer who loves to solve problems and build things with full of
						passions and a hard-working ethic. I'm also a great team-player who
						believes in "1 + 1 > 2", and a fast learner who is able to absorb
						new knowledge quickly.
					</p>
					<p>Furthermore, I'm a scuba diver, traveler, hiker and dog lover.</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
