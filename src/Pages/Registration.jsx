import React, {useState, useRef} from "react";
import "../styles/registration.css";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import {register} from "../axios/register.axios";
import {Helmet} from "react-helmet";

function Registration() {
	const [techType, setTechEventType] = useState("Technical");
	const [nonTechType, setNonTechEventType] = useState("Technical");
	const [gamingType, setGamingEventType] = useState("Technical");
	const [workshopType, setWorkshopEventType] = useState("Technical");

	const name = useRef("");
	const email = useRef("");
	const phone = useRef("");
	const college = useRef("");
	const year = useRef("");

	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();

		await register(
			name.current.value,
			email.current.value,
			phone.current.value,
			college.current.value,
			year.current.value,
			{techType, nonTechType, gamingType, workshopType}
		);
		// await toast.success("Good job");
		navigate("/");
	};

	return (
		<>
			<Navbar />
			<Helmet>
				<title>Registration | Trojans</title>
			</Helmet>
			<section className="sectionRegistration">
				<div class="container1">
					<div class="title">
						<h1>Registration</h1>
						<Link to="/">
							<img
								src="https://img.icons8.com/ios-filled/256/multiply.png"
								alt="Cancel button"
							/>
						</Link>
					</div>
					<form
						className="formRegistration"
						onSubmit={(e) => handleSubmit(e)}
					>
						<div class="user__details">
							<div class="input__box">
								<span class="details">Full Name</span>
								<input
									type="text"
									placeholder="E.g: John Smith"
									required
									ref={name}
								/>
							</div>
							<div class="input__box">
								<span class="details">Email</span>
								<input
									type="email"
									placeholder="johnsmith@hotmail.com"
									required
									ref={email}
								/>
							</div>
							<div class="input__box">
								<span class="details">Phone Number</span>
								<input
									type="tel"
									// pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
									placeholder="012-345-6789"
									required
									ref={phone}
								/>
							</div>
							<div class="input__box">
								<span class="details">Year</span>
								{/* <input
									type="text"
									placeholder="1st year"
									required
									ref={year}
								/> */}
								<select
									name=""
									id=""
									// onChange={(e) => {
									// 	setTechEventType(e.target.value);
									// }}
									ref={year}
									defaultValue="Select"
								>
									<option value="Select">
										Select any option
									</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
							</div>
							<div class="input__box">
								<span class="details">College Name</span>
								<input
									type="text"
									placeholder="Chennai Institute of Technology"
									required
									ref={college}
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
										setTechEventType(e.target.value);
									}}
									defaultValue="Select"
								>
									<option value="Select">
										Select any option
									</option>
									<option value="Coders Chemistry">
										Coders Chemistry
									</option>
									<option value="CLEVER BOT">
										CLEVER BOT
									</option>
									<option value="Rhythm Rivalry">
										Rhythm Rivalry
									</option>
									<option value="The Hunt For The Hidden">
										The Hunt For The Hidden
									</option>
									<option value="Code Jigsaw">
										Code Jigsaw
									</option>
									<option value="FinalDraft">
										FinalDraft
									</option>
								</select>
							</div>
							<div class="input__box">
								<span class="details">Non Technical</span>
								<select
									name=""
									id=""
									onChange={(e) => {
										setNonTechEventType(e.target.value);
									}}
									defaultValue="Select"
								>
									<option value="Select">
										Select any option
									</option>
									<option value="SHUTTER STOP">
										SHUTTER STOP
									</option>
									<option value="TALENTRON">TALENTRON</option>
									<option value="SHIP WRECK">
										SHIP WRECK
									</option>
									<option value="GULLY CRICKET">
										GULLY CRICKET
									</option>
									<option value="COMIC QUIZ">
										COMIC QUIZ
									</option>
									<option value="SQUID GAME">
										SQUID GAME
									</option>
									<option value="OKAY FINE">OKAY FINE</option>
								</select>
							</div>
							{/* <div class="input__box">
								<span class="details">Gaming</span>
								<select
									name=""
									id=""
									onChange={(e) => {
										setGamingEventType(e.target.value);
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
										setWorkshopEventType(e.target.value);
									}}
								>
									<option value="technical">Technical</option>
									<option value="non-technical">
										Non Technical
									</option>
									<option value="gaming">Gaming</option>
									<option value="workshop">Workshop</option>
								</select>
							</div> */}
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
