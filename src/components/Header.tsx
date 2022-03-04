import { useEffect } from "react";

const Header = ({ children }: any) => {
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

	return (
		<header className="header">
			<div className="header__lang">
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
