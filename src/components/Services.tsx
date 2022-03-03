const Services = () => {
	return (
		<section className="services" id="services">
			<div className="services__title-container">
				<h2 className="services__title">services</h2>
				<div className="services__title-bar">a</div>
			</div>
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
