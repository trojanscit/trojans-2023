import React from "react";
// import "../styles/teams.css";

function Teams() {
	const allTeams = [
		{
			member_name: "Name 1",
			member_photo: "https://assets.codepen.io/1462889/sl1.jpg",
		},
		{
			member_name: "Toy Pig",
			member_photo: "https://assets.codepen.io/1462889/sl2.jpg",
		},
		{
			member_name: "Shy Portrait",
			member_photo: "https://assets.codepen.io/1462889/sl3.jpg",
		},
		{
			member_name: "Skateboard Face",
			member_photo: "https://assets.codepen.io/1462889/sl4.jpg",
		},
		{
			member_name: "Mirror Reflection",
			member_photo: "https://assets.codepen.io/1462889/sl5.jpg",
		},
		{
			member_name: "Funny Bunny",
			member_photo: "https://assets.codepen.io/1462889/sl6.jpg",
		},
	];

	return (
		<div className="section-fluid-main">
			<div className="bg"></div>
			<div className="section-row">
				{allTeams.map((member) => {
					return (
						<>
							<div className="section-col">
								<div className="section">
									<div className="section-in">
										<img src={member.member_photo} alt="" />
									</div>
								</div>
							</div>
							<div className="hover-text">
								<h2>{member.member_name}</h2>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
}

export default Teams;
