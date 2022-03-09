import Seta from "../images/icon - seta.svg";
import GitHub from "../images/github.svg";
import Linkedin from "../images/linkedin.svg";
import Email from "../images/email.svg";

const BackToTop = () => {
	function toTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	return (
		<div className="back-to-top">
			<div className="button-container">
				<img
					className="back-to-top__button seta"
					src={Seta}
					alt=""
					onClick={toTop}
				/>
			</div>

			<div className="button-container">
				<img className="back-to-top__button github" src={GitHub} alt="" />
			</div>

			<div className="button-container">
				<img className="back-to-top__button linkedin" src={Linkedin} alt="" />
			</div>

			<div className="button-container">
				<img className="back-to-top__button email" src={Email} alt="" />
			</div>
		</div>
	);
};

export default BackToTop;
