import AboutImage from "../images/6-340x470.jpg";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="about__image-container">
				<img className="about__image" src={AboutImage} alt="" />
			</div>
			<div className="about__desc">
				<h2 className="about__title">about</h2>
				<div className="about__desc-container">
					<p className="about__desc-item">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi iure
						consectetur sapiente harum alias dolorem minima maiores molestias,
						ullam cumque!
					</p>
					<p className="about__desc-item">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
						pariatur assumenda natus vel. Similique, itaque incidunt! Dolore
						nemo qui repellendus asperiores dignissimos earum temporibus
						deserunt.
					</p>
					<p className="about__desc-item">
						<span className="bold-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
							itaque? Facere incidunt, cumque unde accusantium vel porro
							corporis.
						</span>
					</p>
				</div>
			</div>

			<div className="about__skills-gradient">
				<div className="about__skills-container">
					<ul className="about__skills-item">
						<li className="skills-title">front-end</li>
						<li className="about__skills-li">HTML 5</li>
						<li className="about__skills-li">CSS 3</li>
						<li className="about__skills-li">Javascript</li>
						<li className="about__skills-li">Typescript</li>
					</ul>
					<ul className="about__skills-item">
						<li className="skills-title">web/mobile</li>
						<li className="about__skills-li">ReactJs</li>
						<li className="about__skills-li">React Native</li>
						<li className="about__skills-li">NodeJs</li>
					</ul>
					<ul className="about__skills-item">
						<li className="skills-title">versionamento</li>
						<li className="about__skills-li">Git</li>
						<li className="about__skills-li">Github</li>
						<li className="about__skills-li">Gitlab</li>
					</ul>
					<ul className="about__skills-item">
						<li className="skills-title">banco de dados</li>
						<li className="about__skills-li">Firebase</li>
						<li className="about__skills-li">MongoDB</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
