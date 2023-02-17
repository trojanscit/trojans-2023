import React from "react";
import "../styles/herohome.css";
import Trojans from "../Assets/Trojans_logo/trojans-compressed.webp";
import scrol from "../images/scroll.png";

function Herohome() {
  return (
    <div className="herohomecontainer">
      <h3 id="dept-intro">DEPARTMENT OF INFORMATION TECHNOLOGY</h3>
      <h3 id="presents"> PRESENTS</h3>
      <img src={Trojans} id="logo_trojans" />
      <h3 id="home-intro">A NATIONAL LEVEL TECHNICAL SYMPOSIUM</h3>
      <div className="scroll">
        <h2 className="scroll_intro">scroll down</h2>
        <img src={scrol} alt="" className="scroll_img"></img>
      </div>
    </div>
  );
}

export default Herohome;
