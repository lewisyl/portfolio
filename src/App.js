import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Particles
				className="particles-canvas"
				params={{
					particles: {
						number: {
							value: 50,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						shape: {
							type: "square",
							stroke: {
								width: 6,
								color: "#f9ab00",
							},
						},
					},
				}}
			/>
			<Navbar />
			<Header />
			<AboutMe />
			<Skills />
			<Experiences />
			<Education />
			<Footer />
		</>
	);
}

export default App;
