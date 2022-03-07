import { useState, useEffect } from "react";
import BurgerBars from "../images/bars-solid.svg";
import BurgerClose from "../images/x-solid.svg";

const Navbar = () => {
	const [burgerActive, setBurgerActive] = useState(false);
	const [mobileMode, setMobileMode] = useState(false);

	const toggleBurger = () => {
		setBurgerActive(!burgerActive);

		if (!burgerActive) document.body.style.position = "fixed";
		else document.body.style.position = "relative";
	};

	let BurgerBarsJSX = (
		<img
			className={burgerActive ? "burger-bars is-open" : "burger-bars"}
			src={BurgerBars}
			alt=""
			onClick={toggleBurger}
		/>
	);

	const BurgerCloseJSX = () => (
		<img
			className="burger-close"
			src={BurgerClose}
			alt=""
			onClick={toggleBurger}
		/>
	);

	let burgerMenuJSX = (
		<div className={burgerActive ? "burger" : ""}>
			<BurgerCloseJSX />
			<ul className="burger__ul">
				<li className="burger__li">home</li>
				<li className="burger__li">about</li>
				<li className="burger__li">services</li>
				<li className="burger__li">projects</li>
				<li className="burger__li">experience</li>
			</ul>
			<div className="burger__lang-buttons"></div>
		</div>
	);

	const windowResized = () => {
		if (window.innerWidth < 1000) {
			if (mobileMode) return;

			setMobileMode(true);
		} else {
			setMobileMode(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", windowResized);

		return () => {
			window.removeEventListener("resize", windowResized);
		};
	});

	useEffect(() => {
		windowResized();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<nav className="navbar-container">
			<ul className={mobileMode ? "navbar mobile-mode" : "navbar"}>
				<li className="navbar__item mobile-hidden">
					<a className="navbar__link navbar__home" href="#home">
						home
					</a>
				</li>
				<li className="navbar__item mobile-hidden">
					<a className="navbar__link" href="#about">
						about
					</a>
				</li>
				<li className="navbar__item mobile-hidden">
					<a className="navbar__link" href="#services">
						services
					</a>
				</li>
				<li className="navbar__item mobile-hidden">
					<a className="navbar__link" href="#projects">
						projects
					</a>
				</li>
				<li className="navbar__item mobile-hidden">
					<a className="navbar__link" href="#experience">
						experience
					</a>
				</li>
			</ul>
			<div className="mobile-container">
				{mobileMode && BurgerBarsJSX}
				{burgerActive && burgerMenuJSX}
				<a className="navbar__link navbar__contact" href="#contact">
					Contact
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
