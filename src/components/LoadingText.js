import React, { useState } from "react";
// import LinearProgress from "@mui/material/LinearProgress";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import introImage1 from "../images/into-img-1.jpg";
// import introImage2 from "../images/intro-img-2.jpg";
// import introImage3 from "../images/intro-img-3.jpg";
// import gtaIntro from "../mp-3/gta-intro.mp3";
import { FaReact } from "react-icons/fa";

import Button from "@mui/material/Button";

import "../css/loadingtext.css";
import { CircularProgress } from "@mui/material";

const LoadingText = ({ disableLoading }) => {
  // const [progress, setProgress] = useState(10);
  // const [imageIndex, setImageIndex] = useState(1);
  // const [introClick, setIntroClick] = useState(false);
  // const [disableIntroBtn, setDisableIntroBtn] = useState(false);

  // const startLoadingPhase = () => {
  //   setIntroClick(true);
  //   setDisableIntroBtn(true);

  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 10 : prevProgress + 10
  //     );
  //   }, 600);

  //   const imageTimer = setInterval(() => {
  //     setImageIndex((prevIndex) =>
  //       prevIndex === 1 ? 2 : prevIndex === 2 ? 3 : 1
  //     );
  //   }, 1000);

  //   setTimeout(() => {
  //     clearInterval(timer);
  //     clearInterval(imageTimer);
  //     disableLoading();
  //   }, 5000);
  // };

  // const playIntroSound = () => new Audio(gtaIntro).play();

  // const getImageSource = () => {
  //   if (imageIndex === 1) {
  //     return introImage1;
  //   } else if (imageIndex === 2) {
  //     return introImage2;
  //   } else {
  //     return introImage3;
  //   }
  // };

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     minHeight: "100vh",
    //     maxWidth: "700px",
    //     margin: "0 auto",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   {!introClick && (
    //     <div id="loading-text-main-content-container">
    //       <FaReact size={67} id="intro-react-logo" color="#61DAFB" />

    //       <div>
    // <h3
    //   id="loading-text-main-content-text"
    //   style={{
    //     fontSize: "2.5rem",
    //     fontWeight: "300",
    //     letterSpacing: "0.5px",
    //     color: "#fff",
    //   }}
    //   className="pb-4"
    // >
    //   Welcome to Saba's Portfolio..
    // </h3>
    // <Button
    //   variant="outlined"
    //   style={{
    //     paddingInline: "1.6rem",
    //     paddingBlock: "0.4rem",
    //     fontSize: "1.6rem",
    //     display: disableIntroBtn ? "none" : "block",
    //   }}
    //   onClick={() => {
    //     // playIntroSound();
    //     startLoadingPhase();
    //   }}
    // >
    //           Loading
    //         </Button>
    // <div style={{position: "relative", top: 4, left: 60,  width: 50, height: 50}} className="spinner-border text-primary" role="status">
    //   <span className="visually-hidden">Loading...</span>
    // </div>
    //       </div>
    //     </div>
    //   )}

    //   {introClick && (
    //     <Box sx={{ width: "87%" }}>
    //       <Box
    //         sx={{
    //           display: "flex",
    //           justifyContent: "center",
    //           marginBottom: "1rem",
    //         }}
    //       >
    //         <img
    //           src={getImageSource()}
    //           alt="Image"
    //           className="img-fluid"
    //           style={{
    //             marginBottom: "1rem",
    //             width: "290px",
    //             height: "270px",
    //             borderRadius: "4px",
    //             border: "1px solid #fff",
    //             padding: "0.7rem",
    //           }}
    //         />
    //       </Box>
    //       <LinearProgress
    //         style={{ paddingBlock: "0.3rem" }}
    //         variant="determinate"
    //         value={progress}
    //       />
    //       <Box
    //         sx={{
    //           minWidth: 35,
    //           display: "flex",
    //           justifyContent: "center",
    //           marginTop: "1rem",
    //         }}
    //       >
    //         <Typography
    //           style={{ fontSize: "1.5rem", textAlign: "center" }}
    //           variant="body2"
    //           color="lightblue"
    //         >
    //           Welcome to Saba's Portfolio
    //           <br />
    //           {`${Math.round(progress)}%`}
    //         </Typography>
    //       </Box>
    //     </Box>
    //   )}
    // </Box>

    <div id="main-loading-container">
      <div id="loading-content-container">
        <FaReact  id="intro-react-logo" color="#61DAFB" />
        <p id="loading-text-main-content-text">Welcome to <br /> Saba's Portfolio...</p>
        <div id="loading-bottom-text-container">
          <div id="loading-btn-container">Loading...</div>
          <div
            id="main-loading-spinner"
            className="spinner-border text-primary"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingText;
