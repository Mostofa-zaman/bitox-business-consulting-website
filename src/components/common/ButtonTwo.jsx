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

  const sizerText =
    frontText.length >= resolvedBackText.length
      ? frontText
      : resolvedBackText;

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
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "20px",
      color: "#FFFFFF",
      whiteSpace: "nowrap",
      transition: "all 0.3s ease",
      userSelect: "none",
    },

    front: {
      transform: hovered
        ? "translate(-50%, -180%)"
        : "translate(-50%, -50%)",
      opacity: hovered ? 0 : 1,
    },

    back: {
      transform: hovered
        ? "translate(-50%, -50%)"
        : "translate(-50%, 80%)",
      opacity: hovered ? 1 : 0,
    },

    sizer: {
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "20px",
      color: "transparent",
      whiteSpace: "nowrap",
      userSelect: "none",
    },
  };

  return (
    <button
      type="button"
      className={className}
      style={style.wrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Keeps button width fixed */}
      <span style={style.sizer}>{sizerText}</span>

      {/* Front Text */}
      <span style={{ ...style.textBase, ...style.front }}>
        {frontText}
      </span>

      {/* Back Text */}
      <span style={{ ...style.textBase, ...style.back }}>
        {resolvedBackText}
      </span>
    </button>
  );
};

export default ButtonTwo;