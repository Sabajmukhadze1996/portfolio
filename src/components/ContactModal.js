import React, { useState, useContext } from "react";
import { Translation } from "./TranslationContextProvider";
import "../css/contactmodal.css";
import { VscClose } from "react-icons/vsc";
import { ImLocation2 } from "react-icons/im";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import sound from "../mp-3/mixkit-on-or-off-light-switch-tap-2585.wav";
import ContactUs from "./Email";
import Fade from "react-reveal"

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "640px",
  maxWidth: "97%",
  borderRadius: "7px",
  maxHeight: "100vh",
  backgroundColor: "#0f0f16f0",
  overflowY: "auto",
  px: 1.6,
  boxShadow: "0px 0px 2px #777",
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px #110f18f9",
    webkitBoxShadow: "inset 0 0 6px #110f18f9",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#110f18f9",
    borderRadius: "3px",
  },
  "@media (max-width: 445px)": {
    px: 0.3,
  },
};

const ContactModal = () => {
  const { content } = useContext(Translation);

  // const [hasClicked, setHasClicked] = useState(false);

  // function play() {
  //   new Audio(sound).play();
  // }

  // function handleClick() {
  //   if (!hasClicked) {
  //     setHasClicked(true);
  //     play();
  //   }
  //   play();
  // }

  const [openContactModal, setOpenContactModal] = useState(false);
  const handleCloseContactModal = () => setOpenContactModal(false);

  return (
  
    <div className="contact-btn-div">
      <div className="contact-btn-div-for">
        <button
          className="contact-btn"
          id="contactBtn"
          onClick={() => {
            // handleClick();
            setOpenContactModal(true);
          }}
          type="button"
        >
          <MdContactPhone size={20} fill="orange" style={{position: "relative", top: "-0.5px", width: "50px"}}/>
          {content.contact}
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Modal
          open={openContactModal}
          onClose={handleCloseContactModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          id="contact-main-modal"
        >
          <Box sx={style} className="user-info-modal">
            <div className="d-flex justify-content-between pt-4 pb-2 px-3 align-items-center">
              <h4 className="modal-title text-white" id="exampleModalLabel">
                {content.contact_second}
              </h4>
              <VscClose
                className="close-x"
                color="#fff"
                size={38}
                onClick={handleCloseContactModal}
              />
            </div>
            <div className="modal-body">
              <Fade top>
              <ul className="list-group">
                <li
                  id="contact-items"
                  className="d-flex align-items-center pt-3 pb-3"
                >
                  <ImLocation2 size={20} color="crimson" />
                  &nbsp;&nbsp;Tbilisi, Georgia
                </li>
                <li
                  id="contact-items"
                  className="d-flex align-items-center pt-3 pb-3  "
                >
                  <BsTelephoneForwardFill color="green" size={19} />
                  &nbsp;&nbsp; +995 599 07 84 51
                </li>
                <li
                  id="contact-items"
                  className="d-flex align-items-center pt-3 pb-3 "
                >
                  <MdMarkEmailUnread size={22} color="orange" />{" "}
                  &nbsp;&nbsp;sabajmukhadze23@gmail.com
                </li>
              </ul>
              </Fade>
            </div>
            <ContactUs />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ContactModal;
