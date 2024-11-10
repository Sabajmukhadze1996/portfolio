import React, { useState, useEffect, useContext } from "react";
import { Translation } from "./TranslationContextProvider";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
// import sound from "../mp-3/mixkit-mouse-hard-clicking-1111.wav";

import geoFlag from "../images/ge.jpg";
import engFlag from "../images/eng.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "transparent",
  boxShadow: 24,
  p: 2,
  outline: "none",
  borderRadius: "7px",
  // "@media (max-width: 585px)": {
  //   width: "100%",
  // },
};

const TranslationComp = () => {
  const { lang, setLang } = useContext(Translation);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState(0);

  // function play() {
  //   new Audio(sound).play();
  // }

  useEffect(() => {
    // play();
  }, [value]);

  return (
    <div style={{ marginTop: 8, display: "flex", flexWrap: "nowrap" }}>
      <select
        style={{
          width: 50,
          paddingBottom: 4,
          height: 28,
          outline: "none",
          background: "#fff",
          borderRadius: 10,
          position: "relative",
          right: 3,
        }}
        value={lang}
        onChange={(e) => {
          setLang(e.target.value);
          handleOpen();
          setValue(value + 1);
          setTimeout(() => {
            handleClose();
          }, 1000);
        }}
      >
        <option style={{ borderRadius: 100, background: "#fff" }}>en</option>
        <option style={{ borderRadius: 100, background: "#fff" }}>geo</option>
      </select>

      <span style={{ marginLeft: "10px" }}>
        {lang === "en" ? (
          <img
            loading="lazy"
            decoding="async"
            style={{ width: "32px", height: "21px" }}
            src={engFlag}
          />
        ) : (
          <img
            loading="lazy"
            decoding="async"
            style={{ width: "32px", height: "20px" }}
            src={geoFlag}
          />
        )}
      </span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CircularProgress
            style={{ color: "#ffffff" }}
            size={60}
            thickness={4}
          />
        </Box>
      </Modal>
    </div>
  );
};
export default TranslationComp;
