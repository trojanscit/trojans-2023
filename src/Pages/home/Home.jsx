import React from "react";
import Sponsors from "../Sponsors";
import Hero from "../../Components/Home/Hero";
import Eventshome from "../../Components/Events/eventshome";
import Herohome from "./Herohome.jsx";
import ContactUs from "../contactus/ContactUs";
import Background from "../bghome/background";
import AboutUs from "./aboutus";
import Navbar from "../navbar/navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Background />
      {/* <Iconsbg /> */}
      <Herohome />
      {/* <Demo2 /> */}
      <AboutUs />
      <Eventshome />
      <ContactUs />
    </div>
  );
}

export default Home;
