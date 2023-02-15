import React from "react";
import { useState } from "react";
import "../styles/eventshome.css";
import ImageSwiper from "./imageswiper";

function Eventshome() {
  const [poster1, setposter1] = useState(false);
  const [poster2, setposter2] = useState(false);
  const handleposeter1 = () => {
    setposter1(!poster1);
    setposter2(false);
  };
  const handleposeter2 = () => {
    setposter2(!poster2);
    setposter1(false);
  };

  return (
    <div className="bodyevents">
      <div className={poster1 ? "move-card" : "cardBox"}>
        <div className="card-event-home">
          <div className="content">
            <button className="be" onClick={handleposeter1}>
              <h1>technical</h1>
            </button>
            <button className="be" onClick={handleposeter2}>
              <h1>Nontechnical</h1>
            </button>
            <button className="be">
              <h1>Workshop</h1>
            </button>
          </div>
        </div>
      </div>
      <div className={poster1 ? "move_poster" : "posters"}>
        <div className="card-event-home">
          <div>
            <ImageSwiper />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventshome;
