import React from "react";
import "./Project.css";
import Project1 from "../Img/portfolio-1.jpg";
import Project2 from "../Img/portfolio-2.jpg";
import Project3 from "../Img/portfolio-3.jpg";
import Project4 from "../Img/portfolio-4.jpg";
import Project5 from "../Img/portfolio-5.jpg";
import Project6 from "../Img/portfolio-6.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Projects</h1>
      </div>
      <div className="container">
        <div className="row">
          {/* <br /> */}

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Figma to Reactjs app</h5>
                <h4 className="project__text">
                  Tech:- Reactjs, Router-DOM, Figma.
                </h4>
                {/* <h6 className="project__text">
                  Figma to React app with Routing.
                </h6> */}
                <a
                  href="https://figma-to-reactjs.netlify.app/"
                  target="_blank"
                  className="project__btn btn2"
                >
                  <i className="fa fa-eye"></i> &nbsp; Visit
                </a>
                <a
                  href="https://github.com/vicky-poonia/figma-to-reactjs-app"
                  target="_blank"
                  className="project__btn btn3"
                >
                  <i className="fa fa-github"></i> &nbsp; Source
                </a>
              </div>
            </div>
          </div>

          

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">E-commerce-store</h5>
                <h4 className="project__text">Tech:- React JS + Redux. </h4>
                {/* <h6 className="project__text">
                  Cart update on addition and removal.
                </h6> */}
                <a href="/" target="_blank" className="project__btn btn2">
                  <i className="fa fa-eye"></i> &nbsp; Visit
                </a>
                <a
                  href="https://github.com/vicky-poonia/e-commerce-website"
                  target="_blank"
                  className="project__btn btn3"
                >
                  <i className="fa fa-github"></i> &nbsp; Source
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Post Office app</h5>
                <h4 className="project__text">
                  Tech:- HTML, CSS, JS-fetch-api.
                </h4>
                {/* <h6 className="project__text">
                  Provides post offices list of user choice city.
                </h6> */}
                <a
                  href="https://check-post-office-of-any-city.netlify.app/"
                  target="_blank"
                  className="project__btn btn2"
                >
                  <i className="fa fa-eye"></i> &nbsp; Visit
                </a>
                <a
                  href="https://github.com/vicky-poonia/API-Post-Offices"
                  target="_blank"
                  className="project__btn btn3"
                >
                  <i className="fa fa-github"></i> &nbsp; Source
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Organisation Website</h5>
                <h4 className="project__text">
                  Tech:- HTML, CSS, JS, Photoshop.
                </h4>
                {/* <h6 className="project__text">
                  Built a website using PSD document.
                </h6> */}
                <a
                  href="https://psd-to-html-1.netlify.app/"
                  target="_blank"
                  className="project__btn btn2"
                >
                  <i className="fa fa-eye"></i> &nbsp; Visit
                </a>
                <a
                  href="https://github.com/vicky-poonia/psd-to-html-1"
                  target="_blank"
                  className="project__btn btn3"
                >
                  <i className="fa fa-github"></i> &nbsp; Source
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project5} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">To-Do App</h5>
                <h4 className="project__text">
                  Tech:- Reactjs, Hooks, Bootstrap.
                </h4>
                {/* <h6 className="project__text">
                  Add, Edit, Delete in To-Do list.
                </h6> */}
                <a
                  href="https://your-to-do-tasks.netlify.app/"
                  target="_blank"
                  className="project__btn btn2"
                >
                  <i className="fa fa-eye"></i> &nbsp; Visit
                </a>
                <a
                  href="https://github.com/vicky-poonia/To-do-list"
                  target="_blank"
                  className="project__btn btn3"
                >
                  <i className="fa fa-github"></i> &nbsp; Source
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project6} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Website Landing Page</h5>
                <h4 className="project__text">
                  Tech:- HTML, CSS, JS, Photoshop.
                </h4>
                {/* <h6 className="project__text">
                    A website using PSD document to HTML.
                </h6> */}
                <a
                  href="https://axit-psd-to-html-website.netlify.app/"
                  target="_blank"
                  className="project__btn btn2"
                >
                  <i className="fa fa-eye"></i> &nbsp; Visit
                </a>
                <a
                  href="https://github.com/vicky-poonia/psd-to-html-3-axit"
                  target="_blank"
                  className="project__btn btn3"
                >
                  <i className="fa fa-github"></i> &nbsp; Source
                </a>
              </div>
            </div>
          </div>

          {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
