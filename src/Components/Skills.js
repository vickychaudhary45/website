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
          <Skill name={"Reactjs"} />
          <Skill name={"React-Redux"} />
          <Skill name={"React-Router-Dom"} />
          <Skill name={"Javascript"} />
          <Skill name={"HTML"} />
          <Skill name={"CSS"} />
          <Skill name={"Figma"} />
        </div>
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <>
      <div className="col__3">
        <div className="service__box pointer">
          <div className="service__meta">
            <h1 className="service__text">{props.name}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
