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
        <div
          className="row"
          style={{ backgroundImage: "linear-gradient(90deg, #0bf83e, #ef0963)" }}
        >
          <Skill name={"Linux"} />
          <Skill name={"Ubuntu"} />
        </div>

        <div className="row">
          <Skill name={"RESTful Architecture"} />
          <Skill name={"NodeJS"} />
          <Skill name={"ExpressJS"} />
          <Skill name={"ReactJS"} />
          <Skill name={"Redux"} />
        </div>
        <div className="row">
          <Skill name={"HTML5"} />
          <Skill name={"CSS3"} />
          <Skill name={"Javascript"} />
          <Skill name={"EcmaScript"} />
          <Skill name={"SCSS"} />
          <Skill name={"Figma"} />
        </div>
        <div className="row">
          <Skill name={"MongoDB"} />
          <Skill name={"SQL/PLsql"} />
          <Skill name={"CI/CD"} />
          <Skill name={"npm"} />
          <Skill name={"Git"} />
          <Skill name={"Docker"} />
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
