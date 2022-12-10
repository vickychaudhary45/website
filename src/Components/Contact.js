import React from "react";
import "./Contact.css";
import contactImg from "../Img/about1.jpg";
function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hello ,</h1>
              <p className="hire__text white">
                I am available for Job. Connect with me via:
              </p>
              <p className="hire__text white">
                <strong>+91-8958070021</strong> or{" "}
                <strong>vickypoonia020@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
