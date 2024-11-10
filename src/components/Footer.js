import React, { useContext } from "react";
import { Translation } from "./TranslationContextProvider";
import "../css/footer.css";
import { SiLinkedin } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

const Footer = () => {
  const { content } = useContext(Translation);

  return (
    <footer>
      <div className="d-flex justify-content-center gap-5">
        <a
          href="https://www.linkedin.com/in/saba-jmukhadze-54067a23b/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin id="footer-link-linkedin" size={20} />
        </a>
        <a
          href="https://github.com/sabajmukhadze1996"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithubInverted id="footer-link-github" size={20} />
        </a>
      </div>
      <div className="rights-reserved-div">
        <span>{content.all_rights_reserved}</span>
      </div>
      <div  className="copyright-div d-flex justify-content-center">
        <span>Copyright &copy; <span style={{color: "cyan"}}>2024</span></span>
      </div>
    </footer>
  );
};

export default Footer;