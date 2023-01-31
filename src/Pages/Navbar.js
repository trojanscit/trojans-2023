import "../styles/navbar.css";
import { React, useState } from "react";
// import { L } from "react-router-dom";
import on from "../images/wifi.png";
import off from "../images/wifioff.png";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="container">
      <div className={color ? "header header-bg" : "header"}>
        <a>
          <h1>logo</h1>
        </a>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <div id={click ? "neon" : "btn"}>
            <li>
              <a id="atag" href="#">
                <h3 id="h3tag">home</h3>
              </a>
            </li>
          </div>
          <div id={click ? "neon" : "btn"}>
            <li>
              <a id="atag" href="#">
                <h3 id="h3tag">events</h3>
              </a>
            </li>
          </div>

          <div id={click ? "neon" : "btn"}>
            <li>
              <a id="atag" href="#">
                <h3 id="h3tag">workshop</h3>
              </a>
            </li>
          </div>

          <div id={click ? "neon" : "btn"}>
            <li>
              <a id="atag" href="#">
                <h3 id="h3tag">register</h3>
              </a>
            </li>
          </div>
          <div id={click ? "neon" : "btn"}>
            <li>
              <a id="atag" href="#">
                <h3 id="h3tag">sponsors</h3>
              </a>
            </li>
          </div>
          <div id={click ? "neon" : "btn"}>
            <li>
              <a id="atag" href="#">
                <h3 id="h3tag">contact us</h3>
              </a>
            </li>
          </div>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <img src={off} size={20} style={{ color: "#fff" }} />
          ) : (
            <img src={on} size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
