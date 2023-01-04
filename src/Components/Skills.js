import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <h1 className="heading">My Skills</h1>
        <p className="heading p__color"></p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Reactjs</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
                <h1 className="service__text">React-Redux</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
                <h1 className="service__text">React-Router</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Javascript</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
                <h1 className="service__text">HTML5</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
                <h1 className="service__text">CSS3</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Figma</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
