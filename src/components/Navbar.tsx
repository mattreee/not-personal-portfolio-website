const Navbar = () => {
	return (
		<ul className="navbar">
			<li className="navbar__item">
				<a className="navbar__link navbar__home" href="#home">
					home
				</a>
			</li>
			<li className="navbar__item">
				<a className="navbar__link" href="#about">
					about
				</a>
			</li>
			<li className="navbar__item">
				<a className="navbar__link" href="#services">
					services
				</a>
			</li>
			<li className="navbar__item">
				<a className="navbar__link" href="#projects">
					projects
				</a>
			</li>
			<li className="navbar__item">
				<a className="navbar__link" href="#experience">
					experience
				</a>
			</li>
			<li className="navbar__item">
				<a className="navbar__link navbar__contact" href="#contact">
					Contact
				</a>
			</li>
		</ul>
	);
};

export default Navbar;
