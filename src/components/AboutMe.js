import React, { useContext } from "react";
import { Translation } from "./TranslationContextProvider";
import "../css/aboutme.css";
import { BsPersonBoundingBox } from "react-icons/bs";
import tbilisiImg from "../images/coding.jpg";
import javascript_cert from "../images/javascript-cert.png";
import responsive_design from "../images/responsive-design.png";
import GTU_IMG from "../images/gpi.png";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import Fade from "react-reveal";


const AboutMe = () => {
  const { content } = useContext(Translation);

  return (
    <div className="main-about-me">
      <Fade>
        <div className="person-logo-div">
          <span>
            <BsPersonBoundingBox size={33} id="person-logo" color="#dc2626" />
          </span>
        </div>
        <div className="person-line-div">
          <h1
            id="georgia-tbilisi-title"
            style={{
              color: "#fff5ee",
              margin: "0.5rem",
              fontSize: "1.55rem",
              letterSpacing: "1px",
              fontWeight: "200",
              textAlign: "center",
              width: 320,
            }}
          >
            Coding Career..
          </h1>
          <div className="person-line"></div>
        </div>

        <div className="img-line-cont">
          <div className="img-line"></div>
        </div>

        <div className="tbilisi-img-container px-2">
          <Fade top>
          <img
            src={tbilisiImg}
            loading="lazy"
            decoding="async"
            alt="tbilisi-at-night"
          />
          </Fade>
        </div>
        <div style={{ paddingInline: "1rem" }}>
          <Fade left>
          <div className="about-me-text">
            <p>
              <span id="d">D</span>uring the pandemic of coronavirus, almost all
              of us found ourselves stuck at home. It was a challenging time for
              many, as job opportunities became scarce. However, I saw this
              period as an opportunity to pursue my long-standing interest in
              programming. Before the pandemic, my hectic schedule left me with
              little time to dedicate to learning programming. I was aware that
              mastering the art of programming requires a significant investment
              of time and effort. Yet, the circumstances of the pandemic
              provided me with the chance to finally start this journey. I
              firmly believe that you don't necessarily need formal education
              from a university or college to become a professional in the
              field. What matters most is a commitment to continuous learning
              and self-improvement.
            </p>
          </div>
            </Fade>
        </div>


        {/* <div style={{ paddingInline: "1rem" }}>
          <div className="about-me-text">
            <p>
              <span id="d">W</span>ith this belief in mind, I decided to embark
              on a self-taught journey into the world of Full-Stack development.
              My main focus as a self-taught Full-Stack developer is attention
              to detail, a trait that I consider essential for any programmer.
              I've always been curious about how games and websites are created,
              and I'm excited to apply my newfound knowledge and skills in this
              domain. My ultimate goal is to gain practical experience in the
              field and engage in daily learning to foster personal growth. The
              pandemic may have brought challenges, but it also provided me with
              an invaluable opportunity to pursue my passion and work towards a
              fulfilling career in programming.
            </p>
          </div>
        </div> */}

        <div style={{ paddingInline: "1rem" }}>
          <div className=" my-5">
            <Fade right>
            <div className="about-me-text">
              <p>
                <span id="d">{content.i}</span> {content.start_learning_text}
              </p>
            </div>
            </Fade>
          </div>
        </div>

        <div className="certification-title px-2">
          <p>
            {content.external_links} <br />{" "}
            <BsFillArrowDownCircleFill color="#fff5ee" size={23} />
          </p>
        </div>
        <div className="cards-main-container">
          <a
            href="https://www.freecodecamp.org/certification/fcc6669bd89-570b-476d-9d21-4cd5ea0aef2b/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noreferrer"
          >
            <Fade top>
            <img
              loading="lazy"
              decoding="async"
              src={javascript_cert}
              className="cert-img"
              alt="javascript-algorithms"
            />
          </Fade>
          </a>
          <a
            href="https://www.freecodecamp.org/certification/fcc6669bd89-570b-476d-9d21-4cd5ea0aef2b/responsive-web-design"
            target="_blank"
            rel="noreferrer"
          >
            <Fade bottom>
            <img
              loading="lazy"
              decoding="async"
              src={responsive_design}
              className="cert-img"
              alt="responsive-design"
            />
            </Fade>
          </a>
        </div>
        <div className="education-title px-2">
          <p>
            {content.education} <br /> <BsBook color="#fff5ee" size={23} />
          </p>
        </div>
        <h5 className="text-center education-text mt-3">
          {content.georgian_technical_university}
        </h5>
        <li className="text-center education-text">
          {content.bachelors_degree_in_architecture}.
        </li>

        <div style={{ paddingInline: "1rem" }}>
          <div className="education-outer-div">
            <div className="education-div">
              <div className="card">
                <Fade top>

                <img
                  loading="lazy"
                  decoding="async"
                  src={GTU_IMG}
                  className="gtu-img-about-me card-img-top"
                  alt="Georgina Technical University"
                />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AboutMe;
