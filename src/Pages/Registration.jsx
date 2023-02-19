import React, {useEffect, useState} from "react";
import "../styles/registration.css";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

function Registration() {
	const [eventType, setEventType] = useState("Technical");
	const [data, setData] = useState([]);

	const events = [];
	useEffect(() => {
		if (eventType === "technical") {
			setData(events.filter((eventType = "technical")));
		}
	});

	return (
		<>
			<Navbar />
			<section className="sectionRegistration">
				<div class="container1">
					<div class="title">Registration</div>
					<form className="formRegistration" action="#">
						<div class="user__details">
							<div class="input__box">
								<span class="details">Full Name</span>
								<input
									type="text"
									placeholder="E.g: John Smith"
									required
								/>
							</div>
							<div class="input__box">
								<span class="details">Email</span>
								<input
									type="email"
									placeholder="johnsmith@hotmail.com"
									required
								/>
							</div>
							<div class="input__box">
								<span class="details">Phone Number</span>
								<input
									type="tel"
									pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
									placeholder="012-345-6789"
									required
								/>
							</div>
							<div class="input__box">
								<span class="details">College Name</span>
								<input
									type="tel"
									placeholder="Chennai Institute of Technology"
									required
								/>
							</div>
							<div class="input__box">
								{/* <span class="details">Event Type</span> */}
								{/* <select
								name=""
								id=""
								onChange={(e) => {
									setEventType(e.target.value);
									console.log(eventType);
								}}
							>
								<option value="technical">Technical</option>
								<option value="non-technical">
									Non Technical
								</option>
								<option value="gaming">Gaming</option>
								<option value="workshop">Workshop</option>
							</select> */}
								<span class="details">Technical</span>
								<select
									name=""
									id=""
									onChange={(e) => {
										setEventType(e.target.value);
										console.log(eventType);
									}}
								>
									<option value="technical">Technical</option>
									<option value="non-technical">
										Non Technical
									</option>
									<option value="gaming">Gaming</option>
									<option value="workshop">Workshop</option>
								</select>
							</div>
							<div class="input__box">
								<span class="details">Non Technical</span>
								<select
									name=""
									id=""
									onChange={(e) => {
										setEventType(e.target.value);
										console.log(eventType);
									}}
								>
									<option value="technical">Technical</option>
									<option value="non-technical">
										Non Technical
									</option>
									<option value="gaming">Gaming</option>
									<option value="workshop">Workshop</option>
								</select>
							</div>
							<div class="input__box">
								<span class="details">Gaming</span>
								<select
									name=""
									id=""
									onChange={(e) => {
										setEventType(e.target.value);
										console.log(eventType);
									}}
								>
									<option value="technical">Technical</option>
									<option value="non-technical">
										Non Technical
									</option>
									<option value="gaming">Gaming</option>
									<option value="workshop">Workshop</option>
								</select>
							</div>
							<div class="input__box">
								<span class="details">Workshop</span>
								<select
									name=""
									id=""
									onChange={(e) => {
										setEventType(e.target.value);
										console.log(eventType);
									}}
								>
									<option value="technical">Technical</option>
									<option value="non-technical">
										Non Technical
									</option>
									<option value="gaming">Gaming</option>
									<option value="workshop">Workshop</option>
								</select>
							</div>
						</div>
						<div class="button">
							<input type="submit" value="Register" />
						</div>
					</form>
				</div>
				<Footer />
			</section>
		</>
	);
}

export default Registration;
