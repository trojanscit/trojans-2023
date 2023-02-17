import React from "react";
import { useState } from "react";
import "../../styles/eventshome.css";
import ImageSwiper from "../../Pages/imageswiper";
import ImageSwiper1 from "../../Pages/imageswiper1";
import ImageSwiper2 from "../../Pages/imageswiper1";
import { Link } from "react-router-dom";
function Eventshome() {
  const [poster1, setposter1] = useState(false);
  const [poster2, setposter2] = useState(false);
  const [poster3, setposter3] = useState(false);
  const handleposeter1 = () => {
    setposter1(!poster1);
    setposter2(false);
    setposter3(false);
  };
  const handleposeter2 = () => {
    setposter2(!poster2);
    setposter1(false);
    setposter3(false);
  };
  const handleposeter3 = () => {
    setposter3(true);
    setposter1(false);
    setposter2(false);
  };

  return (
    <div className="bodyevents">
      <div className={poster1 || poster2 || poster3 ? "move-card" : "cardBox"}>
        <div className="card-event-home">
          <div className="content">
            <button className="be" onClick={handleposeter1}>
              <h1>Events</h1>
            </button>
            <button className="be" onClick={handleposeter2}>
              <h1>Workshop</h1>
            </button>
          </div>
        </div>
      </div>
      <div className={poster1 ? "move_poster" : "posters"}>
        <div className="card-event-home">
          <button className="closebut" onClick={handleposeter1}>
            {"X"}
          </button>
          <div>
            <ImageSwiper />
          </div>
          <button className="view_more">
            <Link to="/events">View More</Link>
          </button>
        </div>
      </div>
      <div className={poster2 ? "move_poster" : "posters"}>
        <div className="card-event-home">
          <button className="closebut" onClick={handleposeter2}>
            {"X"}
          </button>
          <div>
            <ImageSwiper1 />
          </div>
          <button className="view_more">
            <Link to="/workshop">View More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Eventshome;
