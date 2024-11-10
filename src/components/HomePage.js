import React, { useContext } from "react";
import { Translation } from "./TranslationContextProvider";
import "../css/homepage.css";
import sabaImg from "../images/saba.jpg";
import basLogo from "../images/bas.png";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { FaLaptop } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoLogoVue } from "react-icons/io5";

import ContactModal from "./ContactModal";
import Fade from "react-reveal";

const HomePage = () => {
  const { content } = useContext(Translation);

  return (
    <div className="main-homepage-container">
      <div className="react-logo-div">
        <Fade>
          <span className="frameworks-container">
            <IoLogoVue className="frameworks-logo" color="#42b883" />
            <HiArrowNarrowRight className="frameworks-arrow" color="#999" />
            <FaReact color="#61DAFB" className="frameworks-logo" />
            <HiArrowNarrowRight className="frameworks-arrow" color="#999" />
            <SiNextdotjs
              className="frameworks-logo"
              style={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                boxShadow: "0px 0px 0px 1px #61DAFB",
              }}
              color="#000A99"
            />
            <HiArrowNarrowRight className="frameworks-arrow" color="#999" />
            <GrNode className="frameworks-logo" color="#68A063" />
          </span>
        </Fade>
      </div>
      <div className="line-div">
        <div className="line"></div>
      </div>

      <div className="homepage-main-card-div">
        <Fade>
          <img src={sabaImg} alt="my-img" />
        </Fade>

        <Fade bottom>
          <p>
            <FaLaptop id="home-page-welcome-text-logo" fill="orange" />
            "Full-Stack Web & Mobile developer with expertise in Front-End
            frameworks like Vue.js, React.js, Next.js, React-Native, and
            Back-End technologies including Node.js, with experience across both
            web and mobile platforms."
          </p>
        </Fade>
      </div>
      <div className="contact-line-div">
        <div className="contact-line"></div>
      </div>

      <div className="interestedInContainer">
        <Fade left>
          <h2>Interested in Working Together ?</h2>
        </Fade>
        <Fade top>
          <ContactModal />
        </Fade>
      </div>

      <div className="contact-btn-border-div">
        <span className="contact-btn-border"></span>
      </div>
    </div>
  );
};

export default HomePage;
