import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/eventsMainPage.css";

function EventsDetails() {
  const { eventType } = useParams();

  const [popBox, setPopBox] = useState(false);

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
          <h1>Technical</h1>
        </div>
        <div className="section-row">
          {allTeams.map((member) => {
            return (
              <>
                {popBox ? (
                  <div className="popUpBox">
                    <div className="mainBox">
                      <img
                        onClick={() => setPopBox(false)}
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
                          Title
                        </h1>
                        <div style={{ paddingBottom: 5 }}>
                          <h3 style={{ fontSize: 40 }}>Duration : 1.30 hrs</h3>
                        </div>
                        <div style={{ paddingBottom: 5 }}>
                          <h3 style={{ fontSize: 30 }}>
                            Timing : 10am to 12.30pm
                          </h3>
                        </div>
                        <div style={{ paddingBottom: 5 }}>
                          <p style={{ fontSize: 20 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore beatae debitis, officia labore
                            cupiditate accusamus. Explicabo totam quisquam earum
                            quibusdam minus dolores facere dolorum, fugiat
                            omnis, dicta facilis iure cum?
                          </p>
                          <p style={{ fontSize: 20 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore beatae debitis, officia labore
                            cupiditate accusamus. Explicabo totam quisquam earum
                            quibusdam minus dolores facere dolorum, fugiat
                            omnis, dicta facilis iure cum?
                          </p>
                        </div>
                        <div>
                          <h2 style={{ fontSize: 30 }}>Rules</h2>
                          <ul style={{ fontSize: 26 }}>
                            <li>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit.
                            </li>
                            <li>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit.
                            </li>
                            <li>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit.
                            </li>
                            <li>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit.
                            </li>
                            <li>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 style={{ fontSize: 20 }}>
                            Student Co-ordinators
                          </h2>
                          <div>
                            <p style={{ fontSize: 20 }}>Name : Prasanna</p>
                            <p style={{ fontSize: 20 }}>
                              Phone No : 9994999995
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="section-col" onClick={() => setPopBox(true)}>
                  <div className="section">
                    <div className="section-in">
                      <img src={member.member_photo} alt="" />
                      <p className="image-title">Title</p>
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
    </>
  );
}

export default EventsDetails;
