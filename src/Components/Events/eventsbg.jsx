import React from "react";
import "../../styles/eventStyle.css";
import Navbar from "../../Pages/navbar/navbar";
import Footer from "../../Pages/footer/footer";

function eventsbg() {
	return (
		<>
			<Navbar />
			<div className="events_main-page">
				<a class="container" href="/events/technical">
					<div class="content">
						<h1>Technical</h1>
					</div>
				</a>
				<a class="container" href="/events/non-technical">
					<div class="content">
						<h1>Non Technical</h1>
					</div>
				</a>
				<a class="container" href="/workshop">
					<div class="content">
						<h1>Workshop</h1>
					</div>
				</a>
				<a class="container" href="/events/technical">
					<div class="content">
						<h1>Gaming</h1>
					</div>
				</a>
			</div>
			<Footer />
		</>
	);
}

export default eventsbg;
