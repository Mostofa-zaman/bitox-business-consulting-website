"use client";

import { useState } from "react";

const ButtonTwo = ({
  frontText = "",
  backText = "Let's Talk.",
  paddingLeft = 25,
  paddingRight = 25,
  className = "",
}) => {
  const [hovered, setHovered] = useState(false);

  const resolvedBackText = backText || frontText;
  const style = {
    wrapper: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#02090F",
      paddingTop: "15px",
      paddingBottom: "15px",
      paddingLeft: `${paddingLeft}px`,
      paddingRight: `${paddingRight}px`,
      cursor: "pointer",
      border: "none",
      outline: "none",
      borderRadius: "6px",
    },
    textBase: {
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "20px",
      color: "#FFFFFF",
      position: "absolute",
      whiteSpace: "nowrap",
      transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s",
      userSelect: "none",
    },
    front: {
      transform: hovered ? "translateY(-100%)" : "translateY(0%)",
      opacity: hovered ? 0 : 1,
    },
    back: {
      transform: hovered ? "translateY(0%)" : "translateY(100%)",
      opacity: hovered ? 1 : 0,
    },
    sizer: {
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "20px",
      color: "transparent",
      userSelect: "none",
      whiteSpace: "nowrap",
    },
  };
  return (
    <button
      className={className}
      style={{
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? resolvedBackText : frontText}
    </button>
  );
};

export default ButtonTwo;