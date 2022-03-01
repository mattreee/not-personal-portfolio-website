const Contact = () => {
	return (
		<section>
			<h2>Do you wanna talk?</h2>
			<p>username@email.com</p>
			<form>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" placeholder="Full name" />

				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="username@email.com"
				/>

				<label htmlFor="howhere">How did you get here?</label>
				<input
					type="text"
					id="howhere"
					name="howhere"
					placeholder="Indicated, social media..."
				/>
				<label htmlFor="message">Message</label>
				<textarea name="message" id="message"></textarea>

				<input type="submit" value="Send" />
			</form>
		</section>
	);
};

export default Contact;
