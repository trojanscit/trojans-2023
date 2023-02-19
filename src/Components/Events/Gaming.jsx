import React, {useState} from "react";
import {useParams} from "react-router-dom";
import "../../styles/eventsMainPage.css";

function EventsDetails() {
	const {eventType} = useParams("non-technical");
	const [popBox, setPopBox] = useState(false);

	const allTeams = [
		{
			event_name: "Coders Chemistry ",
			event_description: `
				A single team must consist of 2 members
				•	The overall competition consists of three rounds. <br/>
				•	Each round is fifteen minutes long.
				•	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
				•	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
				•	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
				•	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
				•	Between each round, a team will be eliminated.
				`,
			event_coordinators: `
					Abii Aravindh R - 9360051435
					Hariprasad R - 75501 60349
					KavyaDharshini S - 99440 98100      
				`,
			event_photo: "https://assets.codepen.io/1462889/sl1.jpg",
			event_type: "technical",
		},
		{
			event_name: "Chemistry ",
			event_description: `
				A single team must consist of 2 members
				•	The overall competition consists of three rounds. <br/>
				•	Each round is fifteen minutes long.
				•	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
				•	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
				•	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
				•	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
				•	Between each round, a team will be eliminated.
				`,
			event_coordinators: `
					Abii Aravindh R - 9360051435
					Hariprasad R - 75501 60349
					KavyaDharshini S - 99440 98100      
				`,
			event_photo: "https://assets.codepen.io/1462889/sl1.jpg",
			event_type: "non-technical",
		},
	];

	return (
		<>
			{/* {data.map((events, index) => {
				if (events.event === eventType) {
					return (
						<>
							<h1>{events.name}</h1>
						</>
					);
				}
			})} */}

			<div className="section-fluid-main">
				<div className="bg"></div>
				<div className="main-event-type">
					<h1>TECHNICAL EVENTS</h1>
				</div>
				<div className="section-row">
					{allTeams.map((event) => {
						if (event.event_type === eventType) {
							return (
								<>
									{popBox ? (
										<div className="popUpBoxEvents">
											<div className="mainBox">
												<img
													onClick={() =>
														setPopBox(false)
													}
													className="close_button"
													src="https://img.icons8.com/windows/32/ffffff/macos-close.png"
													alt=""
												/>
												<div className="mainContent">
													<h1
														style={{
															textAlign: "center",
															fontSize: 56,
														}}
													>
														{event.event_name}
													</h1>
													<div
														style={{
															paddingBottom: 5,
														}}
													>
														<h3
															style={{
																fontSize: 40,
															}}
														>
															Duration : 1.30 hrs
														</h3>
													</div>
													<div
														style={{
															paddingBottom: 5,
														}}
													>
														<h3
															style={{
																fontSize: 30,
															}}
														>
															Timing : 10am to
															12.30pm
														</h3>
													</div>
													<div
														style={{
															paddingBottom: 5,
														}}
													>
														{/* <p style={{fontSize: 20}}>
														Lorem ipsum dolor sit
														amet consectetur
														adipisicing elit.
														Inventore beatae
														debitis, officia labore
														cupiditate accusamus.
														Explicabo totam quisquam
														earum quibusdam minus
														dolores facere dolorum,
														fugiat omnis, dicta
														facilis iure cum?
													</p>
													<p style={{fontSize: 20}}>
														Lorem ipsum dolor sit
														amet consectetur
														adipisicing elit.
														Inventore beatae
														debitis, officia labore
														cupiditate accusamus.
														Explicabo totam quisquam
														earum quibusdam minus
														dolores facere dolorum,
														fugiat omnis, dicta
														facilis iure cum?
													</p> */}
														<p
															style={{
																fontSize: 20,
															}}
														>
															{
																event.event_description
															}
														</p>
													</div>
													<div>
														<h2
															style={{
																fontSize: 20,
															}}
														>
															Student
															Co-ordinators
														</h2>
														<div>
															{/* <p
															style={{
																fontSize: 20,
															}}
														>
															Name : Prasanna
														</p>
														<p
															style={{
																fontSize: 20,
															}}
														>
															Phone No :
															9994999995
														</p> */}
															<p
																style={{
																	fontSize: 20,
																}}
															>
																{
																	event.event_coordinators
																}
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									) : null}
									<div
										className="section-col"
										onClick={() => setPopBox(true)}
									>
										<div className="section">
											<div className="section-in">
												<img
													src={event.event_photo}
													alt=""
												/>
												<p className="image-title">
													Title
												</p>
											</div>
										</div>
									</div>
									<div className="hover-text">
										<h2>{event.event_name}</h2>
									</div>
								</>
							);
						}
					})}
				</div>
			</div>
		</>
	);
}

export default EventsDetails;
