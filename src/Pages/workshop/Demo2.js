import React from "react";
import "./Demo2.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Navbar from "../navbar/navbar";
import {useState} from "react";
// import workshopimage1 from "./imgvds/mbg4.jpg";

// library.add(fab, fas);
function Demo2() {
	const [open, setOpen] = useState(false);
	const handle = () => {
		setOpen(!open);
	};

	const workshopList = [
		{
			workshopTitle: "workshop 1",
			image_url: "https://cdn-icons-png.flaticon.com/512/1160/1160358.png",
			description:
				"1Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis?",
			full_description:
				"1Hello1 Everyone Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis?",
		},
		{
			workshopTitle: "workshop 1",
			image_url: "",
			description:
				"2Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis?",
			full_description:
				"2Hello2 Everyone Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis?",
		},
		{
			workshopTitle: "workshop 1",
			image_url: "",
			description:
				"3Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis?",
			full_description:
				"3Hello3 Everyone Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo   fugiat aspernatur alias corporis?",
		},
	];

	return (
		<>
			<Navbar />
			<div className="work-bg">
				<div class="wrapper">
					<div class="work-box">
						<div className="div-child"></div>
						<div className="div-child"></div>
						<div className="div-child"></div>
						<div className="div-child"></div>
						<div className="div-child"></div>
						<div className="div-child"></div>
						<div className="div-child"></div>
						<div className="div-child"></div>
						<div className="div-child"></div>
						<div className="div-child"></div>
					</div>
				</div>
			</div>
			<div>
				<h1 id="Workshop-Heading">Workshops</h1>
			</div>
			<div className="Workshop-container">
				{workshopList.map((workshop) => {
					return (
						<>
							<div className="Workshop-card ">
								<div className="face face1 ">
									{/* <span></span> */}
									<div className="content-face1">
										<img
											src={workshop.image_url}
											id="workshop-img"
											width="100px"
											alt=""
										/>
										<h3 id="logo-heading">
											{workshopList.workshopTitle}
										</h3>
									</div>
								</div>
								<div className="face face2">
									<div className="content-face2">
										<p id="face2-para">
											{workshop.description}
										</p>
										<button
											className="custom-btn btn-12"
											onClick={handle}
										>
											READ MORE
										</button>
									</div>
								</div>
							</div>
							{open ? (
								<div className="pop1">
									<button onClick={handle} id="ws-close">
										X
									</button>
									<p id="pop1-para">
										{workshop.full_description}
									</p>
								</div>
							) : null}
						</>
					);
				})}
			</div>
		</>
	);
}

export default Demo2;
