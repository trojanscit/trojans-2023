import React from "react";
import "./Demo2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../navbar/navbar";
import { useState } from "react";
import Footer from "../footer/footer";
import { Helmet } from "react-helmet";
// import workshopimage1 from "./imgvds/mbg4.jpg";

// library.add(fab, fas);
function Demo2() {
  const [open, setOpen] = useState(false);
  const handle = () => {
    setOpen(!open);
  };

  const workshopList = [
    {
      workshopTitle: "Workshop 1",
      image_url: "https://cdn-icons-png.flaticon.com/512/1160/1160358.png",
      price: 100,
      organizer: "Hello Everyone",
    },
    {
      workshopTitle: "Workshop 1",
      image_url: "",
      price: 100,
      organizer: "Hello Everyone",
    },
    {
      workshopTitle: "Workshop 1",
      image_url: "",
      price: 100,
      organizer: "Hello Everyone",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Workshop | Trojans</title>
      </Helmet>
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
      <div>
        <h1 id="Workshop-Heading">Workshops</h1>
      </div>
      <div className="Workshop-container">
        {workshopList.map((workshop) => {
          return (
            <>
              <div className="Workshop-card ">
                <div className="face face1 ">
                  <div className="content-face1">
                    <img
                      src={workshop.image_url}
                      id="workshop-img"
                      width="100px"
                      alt=""
                    />
                  </div>
                </div>
                <div className="face face2">
                  <div className="content-face2">
                    <h3 id="logo-heading">{workshop.workshopTitle}</h3>
                    <p id="face2-para">Entry Fees : {workshop.price}</p>
                    <p id="face2-para">{workshop.organizer}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Demo2;
