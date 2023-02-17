import React from "react";
import Sponsors from "../Sponsors";
import Hero from "../../Components/Home/Hero";
import Homepage from "./aboutus";
import Eventshome from "../eventshome";
import Herohome from "../Herohome.jsx";
import Iconsbg from "../iconsbg";
import ContactUs from "../contactus/ContactUs";
import Background from "../bghome/background";
import Demo2 from "../workshop/Workshop";
// import "../../styles/homepage.css";
function Home() {
  return (
    <div className="home">
      <Background />
      {/* <Iconsbg /> */}
      {/* <Herohome /> */}
      {/* <Demo2 /> */}
      <Homepage />
      <Eventshome />
      <ContactUs />
    </div>
  );
}

export default Home;
