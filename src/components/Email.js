import React, { useRef, useState, useEffect, useContext } from "react";
import { Translation } from "./TranslationContextProvider";
import emailjs from "@emailjs/browser";
import { BsArrow90DegDown } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import Fade from "react-reveal"


import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../css/email.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "480px",
  width: "95%",
  height: "280px",
  bgcolor: "#FFFFFF",
  boxShadow: "0px 0px 2px #00ff00",
  outline: "none",
  borderRadius: "7px",
  padding: "0px",
  paddingTop: "0.6rem",
  backgroundColor: "#110f18f6",
};

const ContactUs = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const handleCloseSuccessModal = () =>
    setTimeout(() => {
      setSuccessModal(false);
    }, 2000);

  useEffect(() => {
    const emailInput = form.current.elements.user_email;
    emailInput.addEventListener("input", handleEmailValidation);

    return () => {
      emailInput.removeEventListener("input", handleEmailValidation);
    };
  }, []);

  const handleEmailValidation = () => {
    const emailInput = form.current.elements.user_email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput.value) {
      setErrorMessage("");
    } else if (!emailRegex.test(emailInput.value)) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage("");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const nameInput = form.current.elements.user_name;
    const emailInput = form.current.elements.user_email;
    const messageInput = form.current.elements.message;

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
    }, 2000);
  };

  const { content } = useContext(Translation);

  return (
      <Fade bottom>
    <div id="thru-email-contact-container" className="pb-3">
      <h5 className="text-center mt-4 mb-4 direct-text-title">
        Email Me
        <BsArrow90DegDown className="contact-modal-right-arrow" />
      </h5>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="user_name">{content.Enter_Your_Name}</label>
          <input
            maxLength={100}
            name="user_name"
            id="user_name"
            type="text"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">{content.Enter_Your_Email}</label>
          <input
            maxLength={100}
            name="user_email"
            id="user_email"
            type="email"
            className="form-input"
            required
          />
          {errorMessage && (
            <p className="error-message small text-danger">
              {content.email_valid_error}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">{content.message}</label>
          <textarea
            maxLength={10000}
            name="message"
            id="message"
            className="form-textarea"
            required
          ></textarea>
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="form-submit close-btn">
            {content?.send_message}
          </button>
        </div>
      </form>

      <Modal
        open={successModal}
        onClose={handleCloseSuccessModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="user-info-modal pt-5">
          <div className="text-center mt-2 mb-4">
            <IoMdCheckmark size={50} color="#00ff00" />
          </div>
          <h5 className="text-center px-2 text-white">
            {content.success_message}!
          </h5>
          <p className="text-center mt-4 text-white">{content.thank_you}!</p>
        </Box>
      </Modal>
    </div>
      </Fade>
  );
};

export default ContactUs;
