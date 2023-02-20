import React from "react";
import "../../styles/herohome.css";
import Trojans from "../../Assets/Trojans_logo/trojans-compressed.webp";
import scrol from "../../images/scroll.png";
import { Link } from "react-router-dom";

function Herohome() {
  return (
    <div className="herohomecontainer">
      <p className="heroPTag">DEPARTMENT OF</p>
      <h3 id="dept-intro">INFORMATION TECHNOLOGY</h3>
      <p className="heroPTag"> PRESENTS</p>
      <img src={Trojans} id="logo_trojans"  alt=""/>
      <h3 id="home-intro">A NATIONAL LEVEL TECHNICAL SYMPOSIUM</h3>

      <Link to="/registration" className="register-button-home">
        Register
      </Link>

      <div className="scroll">
        <h2 className="scroll_intro">SCROLL DOWN</h2>
        <img src={scrol} alt="" className="scroll_img"></img>
      </div>
    </div>
  );
}

export default Herohome;
