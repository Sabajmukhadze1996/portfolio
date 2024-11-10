import React from "react";
import "../css/personal-projects.css";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GrNode } from "react-icons/gr";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import weather_app from "../images/weather.png";
import trader_ticket from "../images/trade-ticket.png";
import eCommerce from "../images/comm.png";
import bazarGe from "../images/bazarge.png";
import personalImg from "../images/personalpr.png";
import yourselfgeImg from "../images/yourself.png";
import carPartsImg from "../images/car-parts.png";

import Fade from "react-reveal";


const PersonalProjects = () => {
    return (
        <div className="my-projects-main-container">
        <Fade>
          {/* <div className="gear-logo-div">
            <span className="frameworks-container">
              <FaReact size={52} id="react-logo" color="#61DAFB" />
              <HiArrowNarrowRight size={24} id="nodejs-logo" color="#999" />
              <SiNextdotjs
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "100%",
                  boxShadow: "0px 0px 0px 1px #61DAFB",
                }}
                size={51}
                color="#000A99"
              />
              <HiArrowNarrowRight size={24} id="nodejs-logo" color="#999" />
              <GrNode size={51} id="nodejs-logo" color="#68A063" />
            </span>
          </div> */}

<div style={{paddingLeft: "2rem", paddingRight: "1.3rem"}}>
       <img id="personalImage" src={personalImg} alt="pers" />

      </div>


          <div className="projects-line-div">
            <div className="projects-line"></div>
          </div>
   
  
          <h1 className="full-stack-title">
            Full-Stack Projects (React.js & Next.js & Node.js)
          </h1>
  
          <div className="full-stack-projects-container">


          <div
              className="card"
              id="new-project-container"
              style={{
                maxWidth: "40rem",
                backgroundColor: "transparent",
                margin: "0 auto",
                marginTop: "3rem",
              }}
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://car-parts-georgia.vercel.app/home"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={carPartsImg}
                  className="card-img-top "
                  alt="e-commerce"
                />
                <div className="full-stack-card-body">
                  <h5
                    className="card-title"
                    style={{ color: "#fff", letterSpacing: "0.8px" }}
                  >
                   Car Parts Georgia
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "#fff",
                      letterSpacing: "0.8px",
                      lineHeight: "1.8rem",
                    }}
                  >
                 <li>Implemented advanced data fetching using Angular services and RxJS
observables for optimized Front-End data handling.
Integrated industry best practices for optimizing REST API performance</li>
                  </p>
                  <button
                    id="new-project-btn"
                    className="mt-4 btn btn-success"
                    style={{
                        width: "170px",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                     View the Project
                  </button>
                </div>
              </a>
            </div>





          <div
              className="card"
              id="new-project-container"
              style={{
                maxWidth: "40rem",
                backgroundColor: "transparent",
                margin: "0 auto",
                marginTop: "3rem",
              }}
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://yourselfge.vercel.app/"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={yourselfgeImg}
                  className="card-img-top "
                  alt="e-commerce"
                />
                <div className="full-stack-card-body">
                  <h5
                    className="card-title"
                    style={{ color: "#fff", letterSpacing: "0.8px" }}
                  >
                    yourself.ge (startup)
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "#fff",
                      letterSpacing: "0.8px",
                      lineHeight: "1.8rem",
                    }}
                  >
                 <li>Utilize JWT authentication to fortify security measures and proactively safeguard against XSS attacks, guaranteeing robust protection for your application.</li>
                  </p>
                  <button
                    id="new-project-btn"
                    className="mt-4 btn btn-success"
                    style={{
                        width: "170px",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                     View the Project
                  </button>
                </div>
              </a>
            </div>


























          
  
            <div
              className="card"
              id="new-project-container"
              style={{
                maxWidth: "40rem",
                backgroundColor: "transparent",
                margin: "0 auto",
                marginTop: "3rem",
              }}
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://bazarge.vercel.app/"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={bazarGe}
                  className="card-img-top "
                  alt="e-commerce"
                />
                <div className="full-stack-card-body">
                  <h5
                    className="card-title"
                    style={{ color: "#fff", letterSpacing: "0.8px" }}
                  >
                    Georgian "NewBazar" Platform
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "#fff",
                      letterSpacing: "0.8px",
                      lineHeight: "1.8rem",
                    }}
                  >
                 <li>Currently in progress, I'm expanding the app's features, with secure registration, login, and easy item posting already available.</li>
                  </p>
                  <button
                    id="new-project-btn"
                    className="mt-4 btn btn-success"
                    style={{
                        width: "170px",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                     View the Project
                  </button>
                </div>
              </a>
            </div>
  
            <div
              className="card"
              id="new-project-container"
              style={{
                maxWidth: "40rem",
                backgroundColor: "transparent",
                margin: "0 auto",
                marginTop: "3rem",
              }}
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://sabajmukhadze1996.github.io/e-commerce"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={eCommerce}
                  className="card-img-top "
                  alt="e-commerce"
                />
                <div className="full-stack-card-body">
                  <h5
                    className="card-title"
                    style={{ color: "#fff", letterSpacing: "0.8px" }}
                  >
                  Geo E-Commerce
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "#fff",
                      letterSpacing: "0.8px",
                      lineHeight: "1.8rem",
                    }}
                  >
                  <li>Crafted with React.js, incorporating Material-UI and Redux Toolkit has enabled advanced state management in this project.</li>
                  </p>
                  <button
                    id="new-project-btn"
                    className="mt-4 btn btn-success"
                    style={{
                        width: "170px",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                      View the Project
                  </button>
                </div>
              </a>
            </div>


            <div
              className="card"
              id="new-project-container"
              style={{
                maxWidth: "40rem",
                backgroundColor: "transparent",
                margin: "0 auto",
                marginTop: "3rem",
              }}
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://sabajmukhadze1996.github.io/trade-ticket/"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={trader_ticket}
                  className="card-img-top "
                  alt="e-commerce"
                />
                <div className="full-stack-card-body">
                  <h5
                    className="card-title"
                    style={{ color: "#fff", letterSpacing: "0.8px" }}
                  >
                  Trade-Ticket
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "#fff",
                      letterSpacing: "0.8px",
                      lineHeight: "1.8rem",
                    }}
                  >
                <li>Elevating the UI, I implemented Tailwind CSS to refine its design, amplifying appeal, and ensuring a more intuitive and welcoming user experience.</li>
                  </p>
                  <button
                    id="new-project-btn"
                    className="mt-4 btn btn-success"
                    style={{
                      width: "170px",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    View the Project
                  </button>
                </div>
              </a>
            </div>







            <div
              className="card"
              id="new-project-container"
              style={{
                maxWidth: "40rem",
                backgroundColor: "transparent",
                margin: "0 auto",
                marginTop: "3rem",
              }}
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://sabajmukhadze1996.github.io/weather-app/"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={weather_app}
                  className="card-img-top "
                  alt="e-commerce"
                />
                <div className="full-stack-card-body">
                  <h5
                    className="card-title"
                    style={{ color: "#fff", letterSpacing: "0.8px" }}
                  >
                  Weather App
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "#fff",
                      letterSpacing: "0.8px",
                      lineHeight: "1.8rem",
                    }}
                  >
                <li>To further elevate user experience, implement translation functionality within the app, thus making it more user-friendly and accessible.</li>
                  </p>
                  <button
                    id="new-project-btn"
                    className="mt-4 btn btn-success"
                    style={{
                      width: "170px",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    View the Project
                  </button>
                </div>
              </a>
            </div>




          </div>
  
          
          
        </Fade>
      </div>
    )
}

export default PersonalProjects;