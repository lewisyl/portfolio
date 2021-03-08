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
						&#128075;Howdy! I am Lewis, a &#128187;Full-stack Software Engineer
						and Web Developer who loves to solve problems and build things with
						&#128175;full of passions and a hard-working ethic. I'm also a great
						&#128101;team-player who believes in &#8968;1+1&gt;2&#8971;, and a
						fast &#9997;learner who is able to absorb new knowledge
						&#128640;quickly.
					</p>
					<p>
						Furthermore, I love to spend my free time on &#127956;hiking,
						&#129343;scuba diving, &#127965;traveling, &#127938;snowboarding,
						&#127916;watching movies, and (maybe&#128514;) being &#128062;walked
						by my dogs&#128054;.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
