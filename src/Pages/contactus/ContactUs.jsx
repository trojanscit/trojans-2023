import React from "react";
import "./ContactUs.css";
import {Icon} from "@iconify/react";

function ContactUs() {
	const inputs = document.querySelectorAll(".input");

	function focusFunc() {
		let parent = this.parentNode;
		parent.classList.add("focus");
	}

	function blurFunc() {
		let parent = this.parentNode;
		if (this.value == "") {
			parent.classList.remove("focus");
		}
	}

	inputs.forEach((input) => {
		input.addEventListener("focus", focusFunc);
		input.addEventListener("blur", blurFunc);
	});
	return (
		<>
			<section id="contact1">
				<div class="contact-box1">
					<div class="contact-links1">
						<h2>CONTACT</h2>
						<div class="links1">
							<div class="link1">
								<a href="$">
									<img
										src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
										alt="linkedin"
									/>
								</a>
							</div>
							<div class="link1">
								<a href="$">
									<img
										src="https://i.postimg.cc/YCV2QBJg/github.png"
										alt="github"
									/>
								</a>
							</div>
							<div class="link1">
								<a href="$">
									<img
										src="https://i.postimg.cc/W4Znvrry/codepen.png"
										alt="codepen"
									/>
								</a>
							</div>
							<div class="link1">
								<a href="$">
									<img
										src="https://i.postimg.cc/NjLfyjPB/email.png"
										alt="email"
									/>
								</a>
							</div>
						</div>
					</div>
					<div class="contact-form-wrapper1">
						<form>
							<div class="form-item1">
								<input type="text" name="sender" required />
								<label>Name:</label>
							</div>
							<div class="form-item1">
								<input type="text" name="email" required />
								<label>Email:</label>
							</div>
							<div class="form-item1">
								<textarea
									class=""
									name="message"
									required
								></textarea>
								<label>Message:</label>
							</div>
							<button class="submit-btn1">Send</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

export default ContactUs;
