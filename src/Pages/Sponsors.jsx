import React from "react";
import "../styles/sponsors.css";
import amazon from "../images/amazon.jpg";
import backgrdvdo from "../images/backgroundvideo.mp4";
import Tilt from "react-tilt";

function Sponsors() {
  return (
    <div className="container8">
      <div id="sponsor" className="neonText">
        <h1>OUR SPONSORS</h1>
      </div>

      <Tilt options={{ max: 35, transition: true }} className="tilt">
        <div className="cardsp boxsponsor">
          <span id="span12"></span>
          <div className="card-img">
            <img src={amazon} />
          </div>
          <div className="card-body box">
            <h2 className="card-title" data-tilt>
              amazon
            </h2>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique qui praesentium minus quidem distinctio, fuga facilis
              voluptatem nisi laudantium perspiciatis, dolorum perferendis nam
              quod? Accusamus.
            </p>
          </div>
        </div>
      </Tilt>
      <Tilt options={{ max: 35, transition: true }} className="tilt">
        <div className="cardsp boxsponsor">
          <span id="span12"></span>
          <div className="card-img">
            <img src={amazon} />
          </div>
          <div className="card-body box">
            <h2 className="card-title" data-tilt>
              amazon
            </h2>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique qui praesentium minus quidem distinctio, fuga facilis
              voluptatem nisi laudantium perspiciatis, dolorum perferendis nam
              quod? Accusamus.
            </p>
          </div>
        </div>
      </Tilt>

      <div>
        <video autoPlay loop muted id="videoback">
          <source src={backgrdvdo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Sponsors;
