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
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="/">
                <li className="nav__items mx__15">Home </li>
              </a>
              {/* <a href="./A">
                <li className="nav__items mx__15">About </li>
              </a> */}
              <a href="#Portfolio">
                <li className="nav__items mx__15">MyProjects</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Skills </li>
              </a>
              {/* <a href="#Blog">
                <li className="nav__items mx__15">Blog </li>
              </a> */}
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
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 
                1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5
                h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>

          {show ? null : (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#home">Home </a>
                </li>
                {/* <li className="sideNavbar">
                  <a href="#about">About </a>
                </li> */}
                <li className="sideNavbar">
                  <a href="#portfolio">MyProjects</a>
                </li>
                <li className="sideNavbar">
                  <a href="#services">Skills </a>
                </li>
                {/* <li className="sideNavbar">
                  <a href="#blog">Blog </a>
                </li> */}
                <li className="sideNavbar">
                  <a href="#contact">Contact </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">
                Hi, Welcome to my Portfolios !!
              </h1>
              <TypeAnimation
                sequence={[
                  "I am Frontend developer",
                  500,
                  "I am ReactJS developer",
                  1000,
                ]}
                speed={20}
                style={{ fontSize: "40px", color: "green" }}
                wrapper="span"
                repeat={Infinity}
              />
              <h2>
                I am currently based in Noida, Uttar Pradesh. <br />
              </h2>
              <div className="bttn">
                <a href="https://drive.google.com/file/d/1kA-OkXWq5Mqr1A6XDlzZ5ivI2sOjm03N/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
