import React, { useState } from "react";
import "./Home.css";
import logo from "../Img/logo4.jpg";
import { TypeAnimation } from "react-type-animation";

function Home() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <a href="#Contact">
              <img src={logo} alt="Vicky Poonia" />
            </a>
          </div>

          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="/">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">MyProjects</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Skills </li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact </li>
              </a>
            </ul>
          </div>

          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 
                1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5
                h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>

          {show ? null : (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <a href="/" onClick={() => setShow(!show)}>
                  <li className="sideNavbar">Home</li>
                </a>
                <a href="#Portfolio" onClick={() => setShow(!show)}>
                  <li className="sideNavbar">MyProjects</li>
                </a>
                <a href="#Services" onClick={() => setShow(!show)}>
                  <li className="sideNavbar">Skills </li>
                </a>
                <a href="#Contact" onClick={() => setShow(!show)}>
                  <li className="sideNavbar">Contact </li>
                </a>
              </ul>
            </div>
          )}
        </div>

        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">
                Hi, Welcome to my Portfolios 🫶!!
              </h1>
              <TypeAnimation
                sequence={[
                  "I am Frontend developer",
                  5000,
                  "I am Backend developer",
                  5000,
                ]}
                speed={0.001}
                style={{ fontSize: "40px", color: "green" }}
                wrapper="span"
                repeat={Infinity}
              />
              <h3>
                React - Next - Node - Express - SQL  <br />
              </h3>
              {/* <h2>
                Code is ❤️ <br />
              </h2> */}
              <div className="bttn">
                <a
                  href="https://drive.google.com/file/d/14HJ9uZqXBji3g02nH4XZGvFATH0jCum2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="about btn pointer">My Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
