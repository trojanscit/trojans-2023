import React from "react";
import "../styles/home.css";
import scrol from "../images/scroll.png";
import NavBar from "../Pages/Navbar";
import logo from "../Assets/Trojans_logo/trojans-compressed.webp";

function Home() {
  return (
    <div className="container">
      <NavBar />
      <div className="dept">
        <h1 id="intro">Department of Infomation Technology Presents</h1>
        {/* <h1 id="quotes">hekl alf fadf af ghs v al fasfas as fksffsdfs asfaf</h1> */}
        <img id="main_logo" src={logo}></img>
      </div>
      <div className="reg">
        <button>
          <span class="effect"></span>
          <span class="effect"></span>
          <span class="effect"></span>
          <span class="text">register</span>
        </button>
      </div>
      <div className="scroll">
        <h2>scroll down</h2>
        <img src={scrol}></img>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
