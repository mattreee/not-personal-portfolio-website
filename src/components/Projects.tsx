import { useEffect } from "react";
import Flickity from "flickity";

const Projects = () => {
	useEffect(() => {
		if (window.innerWidth <= 1000) {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			var flkty = new Flickity(".projects__cards", {
				// options
				cellAlign: "left",
				prevNextButtons: false,
				contain: true,
				pageDots: false,
			});
		}
	});

	return (
		<section className="projects" id="projects">
			<div className="projects__title-container">
				<h2 className="projects__title">projects</h2>
				<div className="projects__title-bar">a</div>
			</div>
			<div className="projects__cards">
				<div className="projects__card beach">
					<p className="projects__type">App</p>
					<div className="projects__info">
						<p className="projects__name">Plant Manager</p>
						<p className="projects__desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque
							tenetur animi reiciendis necessitatibus inventore accusantium
							deleniti autem, modi, totam dicta delectus quam!
						</p>
					</div>
				</div>
				<div className="projects__card camera">
					<p className="projects__type">Web system</p>
					<div className="projects__info">
						<p className="projects__name">RPG Sheet</p>
						<p className="projects__desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
							eius magnam temporibus!
						</p>
					</div>
				</div>
				<div className="projects__card coffee">
					<p className="projects__type">App</p>
					<div className="projects__info">
						<p className="projects__name">Plant Manager</p>
						<p className="projects__desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
							molestiae dignissimos aut accusamus.
						</p>
					</div>
				</div>
				<div className="projects__card jump">
					<p className="projects__type">Web system</p>
					<div className="projects__info">
						<p className="projects__name">RPG Sheet</p>
						<p className="projects__desc">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Asperiores dolores explicabo, nesciunt placeat eaque officia.
						</p>
					</div>
				</div>
				<div className="projects__card path">
					<p className="projects__type">App</p>
					<div className="projects__info">
						<p className="projects__name">Plant Manager</p>
						<p className="projects__desc">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
							ipsam vero excepturi.
						</p>
					</div>
				</div>
				<div className="projects__card starry">
					<p className="projects__type">App</p>
					<div className="projects__info">
						<p className="projects__name">Plant Manager</p>
						<p className="projects__desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
							suscipit at nostrum? Quibusdam tenetur voluptatum obcaecati
							laborum?
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
