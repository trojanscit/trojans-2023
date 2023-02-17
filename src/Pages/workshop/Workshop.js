import React from "react";
import "./Demo2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import drone from "./drone.png";
import { useState } from "react";

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
      <div>
        <h1 id="heading-workshop">Workshops</h1>
      </div>

      <div className="container-workshop">
        <div className="card-workshop ">
          <div className="face face1 ">
            <div className="content-workshop">
              {/* <img src={drone} width="100px"></img> */}
              <h3 id="tit-work">Drone</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content-workshop">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <button className="custom-btn btn-12" onClick={handle}>
                <h4 color="white">Click!</h4>
                <h4>Read More</h4>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="card-workshop">
          <div className="face face1">
            <span></span>
            <div className="content-workshop">
              {/* <FontAwesomeIcon icon={["fab", "android"]} fontSize={100} /> */}
        {/* <h3 id="tit-work">Android</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content-workshop">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <button className="custom-btn btn-12" onClick={handle1}>
                <span>Click!</span>
                <span>Read More</span>
              </button>
            </div>
          </div> 
        </div> */}
        {/* <div className="card-workshop">
          <div className="face face1">
            <span></span>
            <div className="content-workshop">
              {/* <FontAwesomeIcon icon={["fab", "apple"]} fontSize={100} /> */}
        {/* <h3>Apple</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content-workshop">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a. Officia
                delectus illum perferendis maiores quia molestias vitae fugiat
                aspernatur alias corporis?
              </p>
              <button className="custom-btn btn-12" onClick={handle2}>
                <span>Click!</span>
                <span>Read More</span>
              </button>
            </div>
          </div>         </div> */}
      </div>
      {/* <div>
            <video autoPlay loop muted className="bgvideo">
              <source src={videoBg} type="video/mp4"/>
            </video>
          </div> */}

      <div className={open ? "pop1" : "not_pop1"}>
        <button onClick={handle} id="close_button">
          x
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
          repudiandae, explicabo voluptate et hic cum ratione a. Officia
          delectus illum perferendis maiores quia molestias vitae fugiat
          aspernatur alias corporis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum
          ratione a. Officia delectus illum perferendis maiores quia molestias
          vitae fugiat aspernatur alias corporis?
        </p>
      </div>
      {/* <div className={open1 ? "pop2" : "not_pop2"}>
        <button onClick={handle1} id="close_button">
          x
        </button>
        <p>
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
        <button onClick={handle2} id="close_button">
          x
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
          repudiandae, explicabo voluptate et hic cum ratione a. Officia
          delectus illum perferendis maiores quia molestias vitae fugiat
          aspernatur alias corporis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum
          ratione a. Officia delectus illum perferendis maiores quia molestias
          vitae fugiat aspernatur alias corporis?
        </p>
      </div> */}
    </div>
  );
}

export default Demo2;
