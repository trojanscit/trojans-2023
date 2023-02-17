import React from "react";
import "./ContactUs.css";
import { Icon } from "@iconify/react";

function ContactUs() {
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
  return (
    <div className="container-contact">
      <div className="form">
        <div className="contact-info">
          <div className="title">Curious to know more about us?</div>
          <h3 className="title">Let's Get in Touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>
          <div className="info">
            <div className="information-contact">
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information-contact">
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information-contact">
              <p>123-456-789</p>
            </div>
          </div>
          <div className="social-media">
            <p className="title">Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <Icon icon="mdi:twitter" style={{ fontSize: "41px" }} />
              </a>
              <a href="#">
                <Icon icon="mdi:youtube" style={{ fontSize: "41px" }} />{" "}
              </a>
              <a href="#">
                <Icon icon="mdi:instagram" style={{ fontSize: "41px" }} />
              </a>
              <a href="#">
                <Icon icon="mdi:linkedin" style={{ fontSize: "41px" }} />
              </a>
            </div>
            <br />
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one" />
          <span className="circle two" />
          <form action="index.html" autoComplete="off">
            <div className="title">Contact us</div>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor>Name</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor>Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor>Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" defaultValue={""} />
              <label htmlFor>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" className="btn-cont" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
