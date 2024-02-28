import React from "react";
import "./Project.css";
import Project1 from "../Img/portfolio-1.jpg";
import Project2 from "../Img/portfolio-2.jpg";
import Project3 from "../Img/portfolio-3.jpg";
// import Project4 from "../Img/portfolio-4.jpg";
import Project5 from "../Img/portfolio-1.jpg";
import Project6 from "../Img/portfolio-6.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Projects</h1>
      </div>
      <div className="container">
        <div className="row">
          <Pro
            imag={Project1}
            name={"E-Learning"}
            tech={" Next JS + Node JS. "}
            // des={"Cart update on addition and removal."}
            link1={"https://www.whizlabs.com/"}
            link2={"https://github.com/vicky-poonia/Web_Learn"}
          />


          {/* <Pro
            imag={Project4}
            name={"Desktop App Design"}
            tech={"Reactjs, Router-DOM, Figma."}
            // des={"Figma to React app with Routing."}
            link1={"https://figma-to-reactjs.netlify.app/"}
            link2={"https://github.com/vicky-poonia/figma-to-reactjs-app"}
          /> */}
          <Pro
            imag={Project3}
            name={"Post Office API Integation"}
            tech={"HTML, CSS, JS-fetch-api."}
            // des={"for loop + map method. Provides post offices list of user choice city."}
            link1={"https://check-post-office-of-any-city.netlify.app/"}
            link2={"https://github.com/vicky-poonia/API-Post-Offices"}
          />
          <Pro
            imag={Project2}
            name={"Website(Organisation)"}
            tech={"HTML, CSS, JS, Photoshop."}
            // des={"Built a website using PSD document."}
            link1={"https://psd-to-html-1.netlify.app/"}
            link2={"https://github.com/vicky-poonia/psd-to-html-1"}
          />

          <Pro
            imag={Project5}
            name={"To-Do App"}
            tech={"Reactjs, Hooks, Bootstrap."}
            // des={"Add, Edit, Delete in To-Do list."}
            link1={"https://your-to-do-tasks.netlify.app/"}
            link2={"https://github.com/vicky-poonia/To-do-list"}
          />

          <Pro
            imag={Project6}
            name={"Website(Landing Page)"}
            tech={"HTML, CSS, JS, Photoshop."}
            // des={"A website using PSD document to HTML."}
            link1={"https://axit-psd-to-html-website.netlify.app/"}
            link2={"https://github.com/vicky-poonia/psd-to-html-3-axit"}
          />

          <Pro
            imag={Project1}
            name={"Github API"}
            tech={"HTML, CSS, JS-AJAX(http)-Fetch"}
            // des={"A website using PSD document to HTML."}
            link1={"https://ajax-fetch-api.netlify.app/"}
            link2={"https://github.com/vicky-poonia/Fetch-AJAX-API"}
          />

          {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
function Pro(props) {
  return (
    <>
      <div className="col__3">
        <div className="project__box pointer relative">
          <div className="project__box__img pointer relative">
            <div className="project__img__box">
              <img src={props.imag} alt="" className="project__img" />
            </div>
            <div className="mask__effect"></div>
          </div>
          <div className="project__meta absolute">
            <h5 className="project__text">{props.name}</h5>
            <h4 className="project__text">{props.tech}</h4>
            {/* <h6 className="project__text">{props.des}</h6> */}
            <a
              href={props.link1}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn btn2"
            >
              <i className="fa fa-eye"></i> &nbsp; Visit
            </a>
            <a
              href={props.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn btn3"
            >
              <i className="fa fa-github"></i> &nbsp; Source
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
