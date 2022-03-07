import { useState, useEffect } from "react";

const Header = ({ children }: any) => {
	const [mobileMode, setMobileMode] = useState(false);

	const toggleLangSelect = (e: any) => {
		const pt = document.querySelector("#pt");
		const en = document.querySelector("#en");

		if (e.target === pt || e.target === en) {
			pt?.classList.toggle("lang-selected");
			en?.classList.toggle("lang-selected");
		}
	};

	useEffect(() => {
		window.addEventListener("click", toggleLangSelect);

		return () => {
			window.removeEventListener("click", toggleLangSelect);
		};
	});

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
		<header className="header">
			<div className={mobileMode ? "header__lang mobile-mode" : "header__lang"}>
				<button className="header__button" id="pt">
					pt
				</button>
				<button className="header__button lang-selected" id="en">
					en
				</button>
			</div>
			{children}
		</header>
	);
};

export default Header;
