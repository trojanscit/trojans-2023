import React from "react";
import "../styles/sponsors.css";
import backgrdvdo from "../images/sponsorbackgrd.mp4";
function Sponsors() {
  return (
    <div class="container1">
      <h1 id="spons">OUR TOP SPONSORS</h1>
      <div class="box" data-aos="fade-down" data-aos-duration="2000">
        <span></span>
        <div class="content">
          <h2>GOGO SOON</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="box" data-aos="fade-down" data-aos-duration="2000">
        <span></span>
        <div class="content">
          <h2>KASADARA TECH</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="box" data-aos="fade-down" data-aos-duration="2000">
        <span></span>
        <div class="content">
          <h2>DRIVE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div>
        <video autoPlay loop muted id="videoback">
          <source src={backgrdvdo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Sponsors;
