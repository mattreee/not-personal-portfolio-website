import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./css/main.css";

function App() {
	return (
		<>
			<Header>
				<Navbar />
			</Header>
			<BackToTop />
			<Intro />
			<About />
			<Services />
			<Projects />
			<Experience />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
