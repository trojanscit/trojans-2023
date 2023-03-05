import React from "react";
import "./footer2.css";
import logo_round from "../../Assets/Trojans_logo/trojans_logo.webp";
import { Icon } from "@iconify/react";
import cit_logo from "../../Assets/Trojans_logo/CIT_Logo_white.webp";
import { Link } from "react-router-dom";

function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // <div className="footer">
    //   <div className="main-row">
    //     <div className="footer-col">
    //       <img
    //         className="tro-logo"
    //         src={logo_round}
    //         width={200}
    //         height={200}
    //         alt="Trojans logo"
    //       />
    //     </div>
    //     <div className="footer-col">
    //       <h4 className="foot-heading">About</h4>
    //       <ul className="foot-ul">
    //         <li className="foot-row">
    //           <Link className="foot-a" to="/" onClick={scrollUp}>
    //             Trojans
    //           </Link>
    //         </li>
    //         <li className="foot-row">
    //           <Link className="foot-a" to="/">
    //             Department
    //           </Link>
    //         </li>
    //         <li className="foot-row">
    //           <Link className="foot-a" to="/">
    //             College
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="footer-col">
    //       <h4 className="foot-heading">Events</h4>
    //       <ul className="foot-ul">
    //         <li className="foot-row">
    //           <Link className="foot-a" to="/events/technical">
    //             Technical
    //           </Link>

    //         </li>
    //         <li className="foot-row">
    //           <Link className="foot-a" to="/events/non-technical">
    //             Non-Technical
    //           </Link>
    //         </li>
    //         <li className="foot-row">
    //           <Link className="foot-a" to="/events/gaming">
    //             Gaming
    //           </Link>

    //         </li>
    //         <li className="foot-row">
    //           <Link className="foot-a" to="/workshop">
    //             Workshop
    //           </Link>

    //         </li>
    //       </ul>
    //     </div>
    //     <div className="footer-col">
    //       <img
    //         className="foot-logocit"
    //         src={cit_logo}
    //         style={{
    //           width: "100%",
    //           height: "auto",
    //           position: "relative",
    //           left: "50%",
    //           transform: "translateX(-50%)",
    //         }}
    //         alt="CIT LOGO"
    //       />
    //     </div>

    //     <div className="footer-col">
    //       <h4 className="connect">Connect with us</h4>
    //       <div className="social-links">
    //         <a className="foot-a" href="#">
    //           <Icon icon="mdi:twitter" style={{ fontSize: "41px" }} />
    //         </a>
    //         <a className="foot-a" href="#">
    //           <Icon icon="mdi:youtube" style={{ fontSize: "41px" }} />
    //         </a>
    //         <a className="foot-a" href="#">
    //           <Icon icon="mdi:instagram" style={{ fontSize: "41px" }} />
    //         </a>
    //         <a className="foot-a" href="#">
    //           <Icon icon="mdi:linkedin" style={{ fontSize: "41px" }} />
    //         </a>
    //       </div>
    //     </div>
    //     <h1 id="queries-foot">ANY QUERIES ? CONTACT US</h1>
    //   </div>
    //   <hr />
    //   <div className="cpyryt">COPYRIGHT @TROJANS</div>
    // </div>
    <div className="footer">
      <div className="mainfooter-div">
        <div className="logo_text">
          <img src={logo_round} alt="" width={150} height={150} />
          <ul>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <Icon icon="mdi:twitter" style={{ fontSize: "41px" }} />
              </a>
              <a
                href="https://www.youtube.com/@trojanscit2369"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:youtube" style={{ fontSize: "41px" }} />
              </a>
              <a
                href="https://www.instagram.com/trojans_cit/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:instagram" style={{ fontSize: "41px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/trojans-cit-363404239/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:linkedin" style={{ fontSize: "41px" }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="about">
          <h1>About</h1>
          <ul>
            <li>
              <Link to="/" onClick={scrollUp}>
                About
              </Link>
            </li>
            {/* <li>
              {" "}
              <Link to="/">Department</Link>
            </li> */}
            <li>
              <a
                href="https://www.citchennai.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                College
              </a>
            </li>
          </ul>
        </div>
        <div className="events">
          <h1>Events</h1>
          <ul>
            <li>
              <Link to="/events/technical" onClick={scrollUp}>
                Technical
              </Link>
            </li>

            <li>
              <Link to="/events/non-technical">Non- technical</Link>
            </li>
            <li>
              <Link to="/events/gaming">Gaming</Link>
            </li>
            <li>
              <Link to="/workshop">Workshop</Link>
            </li>
          </ul>
        </div>
        <div className="citlogo_div">
          <img
            src={cit_logo}
            alt=""
            style={{
              width: "90%",
              height: "auto",
              position: "relative",
            }}
          />
        </div>
      </div>
      <hr />
      <div className="cpyrt_div">
        <h1>
          Any queries? Contact us <br /> COPYRIGHT @TROJANS
        </h1>
      </div>
    </div>
  );
}

export default Footer;
