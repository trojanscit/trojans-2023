import React from "react";
import "../../styles/homepage.css";
import { useState } from "react";
import logo_round from "../../Assets/Trojans_logo/trojans_logo.webp";
import cit_logo from "../../Assets/Trojans_logo/CIT_Logo_white.webp";
function AboutUs() {
  const [cit, setcit] = useState(false);
  const handleClick = () => {
    setcit(!cit);
  };

  return (
    <div className="hero-container">
      <div className="gls-card">
        <img
          src={cit_logo}
          className={cit ? "cit_logo" : "hide cit_logo"}
          alt=""
        />
        <img
          src={logo_round}
          className={cit ? "logo_round hide" : "logo_round"}
          alt=""
        />
        <h1 className={cit ? "cit_title" : "tro_title"}>TROJANS</h1>
        <h2 className="text-home">
          {cit ? (
            <div>
              Chennai Institute of Technology (CIT Chennai) is an Industry
              Connected Institute, affiliated to Anna University and is a co-
              educational engineering college located at Kundrathur, Chennai,
              Tamil Nadu, India. It was established in 2010 and was established
              with an objective of providing quality technical education with
              adequate industrial exposure than any other college in Chennai.
            </div>
          ) : (
            <div>
              {/* Trojans is a National Level Technical Symposium
							organized by the department of Information
							Technology, Chennai Institute of Technology. Trojans
							emerged from the shadows on March 13th, 2022.
							Trojans aims to provide a platform for students to
							explore and exhibit their talents as well as learn
							about various technologies that persist in the IT
							industry. Our name is inspired from the historical
							trojan horse, which was a clever instrument used in
							the trojan war to turn the tides of the war. Our
							symposium, was also conceived by similar clever
							maneuvers and has now become a phenomenon of great
							significance and flair. */}
              Trojans is a National Level Technical Symposium organized by the
              department of Information Technology, Chennai Institute of
              Technology. Trojans emerged from the shadows on March 13th, 2022.
              Trojans aims to provide a platform for students to explore and
              exhibit their talents as well as learn about various technologies
              that persist in the IT industry.
            </div>
          )}
        </h2>
        <div>
          <button onClick={handleClick} id="button1">
            {">"}
          </button>
        </div>
      </div>
      <div className="holo"></div>
    </div>
  );
}

export default AboutUs;
