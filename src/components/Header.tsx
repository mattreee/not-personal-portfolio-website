// import { useEffect } from "react";

const Header = ({ children }: any) => {
	// useEffect(() => {
	// 	window.addEventListener("click", (e) => {
	// 		// @ts-ignore
	// 		let id = e.target.getAttribute("id");

	// 		if (id === "pt" || id === "en") {
	// 			console.log("tets");
	// 		}
	// 	});
	// });

	return (
		<header className="header">
			<div className="header__lang">
				<button className="header__button" id="pt">
					pt
				</button>
				<button className="header__button" id="en">
					en
				</button>
			</div>
			{children}
		</header>
	);
};

export default Header;
