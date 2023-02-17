import React from "react";
import "../styles/eventStyle.css";

const techEventCard = () => {
  return (
    <div className="cont" id="tevent1">
      <div className="token">
        <div className="main">
          <h2>Event Name 1</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            dolores dolorem perspiciatis perferendis ad, vero animi alias ab
            tempora iure. Facilis voluptatibus repellendus quae laborum beatae
            delectus! Pariatur, soluta consectetur
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            dolores dolorem perspiciatis perferendis ad, vero animi alias ab
            tempora iure. Facilis voluptatibus repellendus quae laborum beatae
            delectus! Pariatur, soluta consectetu
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            dolores dolorem perspiciatis perferendis ad, vero animi alias ab
            tempora iure. Facilis voluptatibus repellendus quae laborum beatae
            delectus! Pariatur, soluta consectetu
          </p>
        </div>
        <hr />
        <button className="register">Register</button>
        <a href="#" className="close">
          close
        </a>
      </div>
    </div>
  );
};

export default techEventCard;
