import React, {useRef} from "react";
import "./ContactUs.css";
import Background from "../bghome/background";
import {contact} from "../../axios/contact.axios";

function ContactUs() {
	const inputs = document.querySelectorAll(".input");
	const name = useRef("");
	const email = useRef("");
	const message = useRef("");

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		await contact(
			name.current.value,
			email.current.value,
			message.current.value
		);
		console.log(
			name.current.value,
			email.current.value,
			message.current.value
		);
	};

	return (
		<>
			<Background />
			<section id="contact1">
				<div class="contact-box1">
					<div class="contact-links1">
						<h2>CONTACT</h2>
						<div class="links1">
							{/* <div class="link1">
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
              </div> */}
							<h1>Sandhiya - President - 7904439121</h1>
							<h1>Dhanush Kumar - Vice President - 9790871242</h1>
							<h1>Madhan - Secretory - 7082407236</h1>
						</div>
					</div>
					<div class="contact-form-wrapper1">
						<form onSubmit={handleSubmit}>
							<div class="form-item1">
								<input
									type="text"
									name="sender"
									required
									ref={name}
								/>
								<label>Name:</label>
							</div>
							<div class="form-item1">
								<input
									type="email"
									name="email"
									required
									ref={email}
								/>
								<label>Email:</label>
							</div>
							<div class="form-item1">
								<textarea
									class=""
									name="message"
									required
									ref={message}
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
