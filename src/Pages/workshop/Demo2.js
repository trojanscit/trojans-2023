import React from "react";
import "./Demo2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
// import workshopimage1 from "./imgvds/mbg4.jpg";

// library.add(fab, fas);
function Demo2() {
  const [open, isopen] = useState(false);
  const [open1, isopen1] = useState(false);
  const [open2, isopen2] = useState(false);
  const handle = () => {
    isopen(!open);
  };
  const handle1 = () => {
    isopen1(!open1);
  };
  const handle2 = () => {
    isopen2(!open2);
  };

  return (
    <div>
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
        <div className="Workshop-card ">
          <div className="face face1 ">
            {/* <span></span> */}
            <div className="content-face1">
              <img id="workshop-img" width="100px"></img>
              <h3 id="logo-heading">Drone</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content-face2">
              <p id="face2-para">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <button className="custom-btn btn-12" onClick={handle}>
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="Workshop-card">
          <div className="face face1">
            {/* <span></span> */}
            <div className="content-face1">
              <FontAwesomeIcon fontSize={100} />
              <h3 id="logo-heading">Android</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content-face2">
              <p id="face2-para">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <button className="btn-12" onClick={handle1}>
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="Workshop-card">
          <div className="face face1">
            {/* <span></span> */}
            <div className="content-face1">
              <FontAwesomeIcon fontSize={100} />
              <h3 id="logo-heading">Apple</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content-face2">
              <p id="face2-para">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <button className="custom-btn btn-12" onClick={handle2}>
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
            <video autoPlay loop muted className="bgvideo">
              <source src={videoBg} type="video/mp4"/>
            </video>
          </div> */}

      <div className={open ? "pop1" : "not_pop1"}>
        <button onClick={handle} id="ws-close">
          X
        </button>
        <p id="pop1-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
          repudiandae, explicabo voluptate et hic cum ratione a. Officia
          delectus illum perferendis maiores quia molestias vitae fugiat
          aspernatur alias corporis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum
          ratione a. Officia delectus illum perferendis maiores quia molestias
          vitae fugiat aspernatur alias corporis?
        </p>
      </div>
      <div className={open1 ? "pop2" : "not_pop2"}>
        <button onClick={handle1} id="ws-close">
          X
        </button>
        <p id="pop2-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
          repudiandae, explicabo voluptate et hic cum ratione a. Officia
          delectus illum perferendis maiores quia molestias vitae fugiat
          aspernatur alias corporis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum
          ratione a. Officia delectus illum perferendis maiores quia molestias
          vitae fugiat aspernatur alias corporis?
        </p>
      </div>
      <div className={open2 ? "pop3" : "not_pop3"}>
        <button onClick={handle2} id="ws-close">
          X
        </button>
        <p id="pop3-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
          repudiandae, explicabo voluptate et hic cum ratione a. Officia
          delectus illum perferendis maiores quia molestias vitae fugiat
          aspernatur alias corporis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum
          ratione a. Officia delectus illum perferendis maiores quia molestias
          vitae fugiat aspernatur alias corporis?
        </p>
      </div>
    </div>
  );
}

export default Demo2;
