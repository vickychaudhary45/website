import React from "react";
import "./Contact.css";
// import contactImg from "../Img/about1.jpg";s

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        {/* <div className="col__img">
          <img src={contactImg} alt="" className="contact__img" />
        </div> */}
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Vicky Poonia</h1>
              <p className="hire__text white">
                <strong>+91-8958070021</strong> or&nbsp;
                <strong>vickypoonia020@gmail.com</strong>
              </p>
              {/* <br /> */}
              <br />
              <br />
              {/* <br />
              <br />
              <br /> */}
              {/* <p className="hire__text white">
                - Active and <br />
                Open to contract, Can start immediately !!s <br />
              </p> */}
            </div>
          </div>
        </div>
        <div className="iconsAll">
          <a
            href="https://github.com/vicky-poonia/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "54px", color: "your-icon-color" }}
          >
            <i className="fa fa-github"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/vicky-poonia-153748234/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "54px", color: "your-icon-color" }}
          >
            <i className="fa fa-linkedin"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://wa.me/+918958070021"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "54px", color: "your-icon-color" }}
          >
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
