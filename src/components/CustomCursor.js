import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ top: e.pageY, left: e.pageX });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="cursor" style={cursorPosition}></div>;
};

export default Cursor;
