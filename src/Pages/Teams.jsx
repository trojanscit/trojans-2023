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
		<div class="section-fluid-main">
			<div className="bg"></div>
			<div class="section-row">
				{allTeams.map((member) => {
					return (
						<>
							<div class="section-col">
								<div class="section">
									<div class="section-in">
										<img src={member.member_photo} alt="" />
									</div>
								</div>
							</div>
							<div class="hover-text">
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
