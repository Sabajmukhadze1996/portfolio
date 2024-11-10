import React, { useState, useContext, useEffect } from "react";
import { Translation } from "./TranslationContextProvider";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import andzaLogo from "../images/andza.jpg";

// import sound from "../mp-3/mixkit-single-classic-click-1116.wav";

const Navbar = () => {
  const [bar, setBar] = useState(false);
  const [value, setValue] = useState(0);
  const [activeLink, setActiveLink] = useState("active");

  // function play() {
  //   new Audio(sound).play();
  // }

  // useEffect(() => {
  //   play();
  // }, [value]);

  function changeBarSettings() {
    if (!bar) {
      setBar(true);
    } else {
      setBar(false);
    }
  }

  function scrollTop() {
    return window.scrollTo(0, 0);
  }

  const { content, lang } = useContext(Translation);

  const navigate = useNavigate();

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top`}
      style={{ background: scrolling ? "#090f1fa6" : "transparent" }}
    >
      <div className="container-fluid">
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavLink
            onClick={() => {
              scrollTop();
              setActiveLink("active");
              // setValue(value + 1);
            }}
            to="/"
            className="navbar-brand"
          >
            {/* <img id="my-logo" src={andzaLogo} alt="My Logo" /> */}
          </NavLink>
          <h1 id="self-title">
            Portfolio<span style={{ color: "#00ffffc6" }}>'</span>
          </h1>
        </div>
        <button
          onClick={changeBarSettings}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {bar ? (
            <MdClear className="navbar-toggler-icon" />
          ) : (
            <AiOutlineBars className="navbar-toggler-icon" />
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink
              to="/"
              onClick={() => {
                scrollTop();
                navigate("/");
                setBar(false);
                // setValue(value + 1);
              }}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              className={activeLink}
            >
              {/* About Me */}
              Home
            </NavLink>
            <NavLink
              to="/work-experience"
              onClick={() => {
                scrollTop();
                navigate("/work-experience");
                setBar(false);
                // setValue(value + 1);
                setActiveLink("");
              }}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              Work Experience
            </NavLink>

            <NavLink
              to="/personal-projects"
              onClick={() => {
                scrollTop();
                navigate("/personal-projects");
                setBar(false);
                // setValue(value + 1);
                setActiveLink("");
              }}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              Personal Projects
            </NavLink>

            <NavLink
              to="/my-skills"
              onClick={() => {
                scrollTop();
                navigate("/my-skills");
                setBar(false);
                // setValue(value + 1);
                setActiveLink("");
              }}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              Tech Skills
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
