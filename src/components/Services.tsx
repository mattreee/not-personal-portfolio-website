const Services = () => {
	return (
		<section className="services">
			<h2 className="services__title">services</h2>
			<ul className="services__ul">
				<li className="services__li">
					<span className="bullet">&#8226;</span>
					<p className="services__li-text">Web apps development</p>
				</li>
				<li className="services__li">
					<span className="bullet">&#8226;</span>
					<p className="services__li-text">Development of mobile apps</p>
				</li>
				<li className="services__li">
					<span className="bullet">&#8226;</span>
					<p className="services__li-text">Rest APIs development</p>
				</li>
				<li className="services__li">
					<span className="bullet">&#8226;</span>
					<p className="services__li-text">Software tests</p>
				</li>
			</ul>
		</section>
	);
};

export default Services;
