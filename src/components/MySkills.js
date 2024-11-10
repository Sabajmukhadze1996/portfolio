import React, { useContext } from "react";
import { Translation } from "./TranslationContextProvider";
import "../css/myskills.css";
import { GoGear } from "react-icons/go";

import html_css from "../images/html-css.png";
import javascript from "../images/javascript.png";
import bootstrap from "../images/bootstrap.png";
import typescript from "../images/typescript.png";
import sass from "../images/sass.png";
import node from "../images/node.png";
import git from "../images/git.png";
import react_img from "../images/react.png";
import react_native from "../images/react-native.png";
import next_img from "../images/next.png";
import mongo_img from "../images/mongo.png";
import express_img from "../images/express.png";
import rest_img from "../images/rest.png";
import mysql_img from "../images/mysql.png";
import aws_img from "../images/aws.png";
import vue_logo from "../images/vue.png";
import Fade from "react-reveal";

const MySkills = () => {
  const { content } = useContext(Translation);

  return (
    <>
      <div className="my-skills-main-container">
        <Fade>
          <div className="gear-logo-div">
            <span>
              <GoGear size={94} id="gear-logo" color="#68A063" />
            </span>
          </div>
          <div className="gear-line-div">
            <div className="gear-line"></div>
          </div>
          <div className="skills-text-div">
            <h4 id="my-skills-title">
              <span>{"<>"}</span>&nbsp;Front-End <br /> Development&nbsp;
              <span>{"</>"}</span>
            </h4>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-3 skills-cards-main-container">
            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={html_css}
                  className="card-img-top"
                  alt="html and css"
                />
                <div className="card-body">
                  <h5 className="card-title">HTML5 & CSS3</h5>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={javascript}
                  className="card-img-top"
                  alt="JavaScript"
                />
                <div className="card-body">
                  <h5 className="card-title">JavaScript</h5>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={react_img}
                  className="card-img-top"
                  alt="React.js"
                />
                <div className="card-body">
                  <h5 className="card-title">React.js</h5>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={next_img}
                  className="card-img-top"
                  alt="Next.js"
                />
                <div className="card-body">
                  <h5 className="card-title">Next.js</h5>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={react_native}
                  style={{ width: 95, height: 95, borderRadius: 100 }}
                  className="card-img-top"
                  alt="React-Native"
                />
                <div className="card-body">
                  <h5 className="card-title">React-Native</h5>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={vue_logo}
                  style={{ width: 95, height: 95, borderRadius: 100 }}
                  className="card-img-top"
                  alt="React-Native"
                />
                <div className="card-body">
                  <h5 className="card-title">Vue.js</h5>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={bootstrap}
                  className="card-img-top"
                  alt="BootsTrap"
                />
                <div className="card-body">
                  <h5 className="card-title">Bootstrap</h5>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={sass}
                  className="card-img-top"
                  alt="Sass"
                />
                <div className="card-body">
                  <h5 className="card-title">Sass</h5>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={typescript}
                  className="card-img-top"
                  alt="TypeScript"
                />
                <div className="card-body">
                  <h5 className="card-title">TypeScript</h5>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div className="my-skills-main-container" style={{ marginTop: "-110px" }}>
        <Fade>
          <div className="skills-text-div">
            <h4 id="my-skills-title">
              <span>{"<>"}</span>&nbsp;Back-End <br /> Development&nbsp;
              <span>{"</>"}</span>
            </h4>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-3 skills-cards-main-container">
            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={node}
                  className="card-img-top"
                  alt="Node.js"
                />
                <div className="card-body">
                  <h5 className="card-title">Node.js</h5>
                  <hr />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={express_img}
                  className="card-img-top"
                  alt="Express.js"
                />
                <div className="card-body">
                  <h5 className="card-title">Express.js</h5>
                  <hr />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={rest_img}
                  className="card-img-top"
                  alt="REST_API"
                />
                <div className="card-body">
                  <h5 className="card-title">Building REST APIs</h5>
                  <hr />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={mongo_img}
                  className="card-img-top"
                  alt="mongoDB"
                />
                <div className="card-body">
                  <h5 className="card-title">mongoDB</h5>
                  <hr />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={mysql_img}
                  className="card-img-top"
                  alt="mySQL"
                />
                <div className="card-body">
                  <h5 className="card-title">MySQL</h5>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={aws_img}
                  className="card-img-top"
                  alt="AWS"
                  style={{ borderRadius: "50%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">AWS</h5>
                  <hr />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card skills-card">
                <img
                  loading="lazy"
                  decoding="async"
                  src={git}
                  className="card-img-top"
                  alt="GIT"
                />
                <div className="card-body">
                  <h5 className="card-title">Git</h5>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default MySkills;
