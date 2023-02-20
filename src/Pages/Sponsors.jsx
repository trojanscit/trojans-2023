import React from "react";
import "../styles/sponsors.css";
import amazon from "../images/amazon.jpg";
import backgrdvdo from "../images/backgroundvideo.mp4";
import Tilt from "react-tilt";
import Navbar from "./navbar/navbar";

function Sponsors() {
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
      <div className="container8">
        <div class="neonText">
          <h1 id="sponsors1">OUR SPONSORS</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tilt options={{ max: 30, transition: true }} className="tilt">
            <div
              className="cardsp boxsponsor"
              style={{
                background: `url(${amazon})center/contain no-repeat`,
              }}
            >
              <span id="span12"></span>
            </div>
          </Tilt>
          <Tilt options={{ max: 30, transition: true }} className="tilt">
            <div
              className="cardsp boxsponsor"
              style={{
                background: `url(${amazon})center/contain no-repeat`,
              }}
            >
              <span id="span12"></span>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
}

export default Sponsors;
