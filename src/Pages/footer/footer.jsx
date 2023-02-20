import React from "react";
import "./footer.css";
import logo_round from "../../Assets/Trojans_logo/trojans_logo.webp";
import { Icon } from "@iconify/react";
import cit_logo from "../../Assets/Trojans_logo/CIT_Logo_white.webp";
function Footer() {
  return (
    <div className="footer">
      <div className="main-row">
        <div className="footer-col">
          <img
            className="tro-logo"
            src={logo_round}
            width={200}
            height={200}
            alt="Trojans logo"
          />
        </div>
        <div className="footer-col">
          <h4 className="foot-heading">About</h4>
          <ul className="foot-ul">
            <li className="foot-row">
              <a className="foot-a" href="#">
                Trojans
              </a>
            </li>
            <li className="foot-row">
              <a className="foot-a" href="#">
                Department
              </a>
            </li>
            <li className="foot-row">
              <a className="foot-a" href="#">
                College
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="foot-heading">Events</h4>
          <ul className="foot-ul">
            <li className="foot-row">
              <a className="foot-a" href="#">
                Technical
              </a>
            </li>
            <li className="foot-row">
              <a className="foot-a" href="#">
                Non-Technical
              </a>
            </li>
            <li className="foot-row">
              <a className="foot-a" href="#">
                Gaming
              </a>
            </li>
            <li className="foot-row">
              <a className="foot-a" href="#">
                Workshop
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <img
            className="foot-logocit"
            src={cit_logo}
            style={{
              width: "70%",
              height: "auto",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            alt="CIT LOGO"
          />
        </div>

        <div className="footer-col">
          <h4 className="connect">Connect with us</h4>
          <div className="social-links">
            <a className="foot-a" href="#">
              <Icon icon="mdi:twitter" style={{ fontSize: "41px" }} />
            </a>
            <a className="foot-a" href="#">
              <Icon icon="mdi:youtube" style={{ fontSize: "41px" }} />
            </a>
            <a className="foot-a" href="#">
              <Icon icon="mdi:instagram" style={{ fontSize: "41px" }} />
            </a>
            <a className="foot-a" href="#">
              <Icon icon="mdi:linkedin" style={{ fontSize: "41px" }} />
            </a>
          </div>
        </div>
        <h1 id="queries-foot">ANY QUERIES ? CONTACT US</h1>
      </div>
      <hr />
      <div className="cpyryt">COPYRIGHT @TROJANS</div>
    </div>
  );
}

export default Footer;
