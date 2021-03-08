import React from "react";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	EmailShareButton,
	EmailIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from "react-share";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="d-flex">
							<p>Greater Seattle Area, WA, USA</p>
						</div>
						<div className="d-flex">
							<p>LewisLiuUSA@outlook.com</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
								<a className="footer-nav">Home</a>
								<br />
								<a className="footer-nav">About Me</a>
								<br />
								<a className="footer-nav">Skills</a>
							</div>
							<div className="col">
								<a className="footer-nav">Experience</a>
								<br />
								<a className="footer-nav">Education</a>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
						<div className="d-flex justify-content-center">
							<LinkedinShareButton
								url={"https://www.lewisliu.site"}
								title={"Full-stasck Software Engineer"}
								summary={
									"Portfolio of Lewis Liu, a Full-stack Software Engineer."
								}
							>
								<LinkedinIcon className="mx-3" size={36} />
							</LinkedinShareButton>
							<FacebookShareButton
								url={"https://www.lewisliu.site"}
								quote={
									"Portfolio of Lewis Liu, a Full-stack Software Engineer."
								}
								hashtag="#fullstacksoftwareengineer"
							>
								<FacebookIcon className="mx-3" size={36} />
							</FacebookShareButton>
							<TwitterShareButton
								url={"https://www.lewisliu.site"}
								title={"Portfolio of Lewis Liu, a Full-stack Software Engineer"}
								hashtags={[
									"fullstacksoftwareengineer",
									"fullstackwebdeveloper",
									"softwareengineer",
									"softwaredeveloper",
									"webdeveloper",
								]}
							>
								<TwitterIcon className="mx-3" size={36} />
							</TwitterShareButton>
							<EmailShareButton
								url={"https://www.lewisliu.site"}
								subject={
									"Portfolio of Lewis Liu, A Full-stack Software Engineer"
								}
								body={
									"This link is the Portfolio site of Lewis Liu, a full-stack software engineer: "
								}
							>
								<EmailIcon className="mx-3" size={36} />
							</EmailShareButton>
						</div>
						<p className="pt-3 text-center">
							Copyright&copy;
							{new Date().getFullYear()}&nbsp; | Lewis Liu | All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
