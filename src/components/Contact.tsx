const Contact = () => {
	return (
		<section className="contact">
			<div className="contact__intro-container">
				<h2 className="contact__title">Do you wanna talk?</h2>
				<div className="contact__title-bar">a</div>
				<p className="contact__email">username@email.com</p>
			</div>
			<div className="contact__wrapper">
				<form className="contact__form">
					<div className="contact__form-item">
						<label className="contact__form-label" htmlFor="name">
							Name
						</label>
						<input
							className="contact__form-text-input"
							type="text"
							id="name"
							name="name"
							placeholder="Full name"
						/>
					</div>

					<div className="contact__form-item">
						<label className="contact__form-label" htmlFor="email">
							Email
						</label>
						<input
							className="contact__form-text-input"
							type="email"
							id="email"
							name="email"
							placeholder="username@email.com"
						/>
					</div>

					<div className="contact__form-item">
						<label className="contact__form-label" htmlFor="howhere">
							How did you get here?
						</label>
						<input
							className="contact__form-text-input"
							type="text"
							id="howhere"
							name="howhere"
							placeholder="Indicated, social media..."
						/>
					</div>

					<div className="contact__form-item">
						<label className="contact__form-label" htmlFor="message">
							Message
						</label>
						<textarea
							className="contact__form-text-input"
							name="message"
							id="message"
							placeholder="hello, I'm..."
						></textarea>
					</div>

					<input className="contact__submit" type="submit" value="Send" />
				</form>
			</div>
		</section>
	);
};

export default Contact;
