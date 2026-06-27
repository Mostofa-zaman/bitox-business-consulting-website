"use client";

import { useState } from "react";

const ButtonThree = ({
  frontText = "",
  backText,
  paddingTop = 15,
  paddingBottom = 15,
  paddingLeft = 25,
  paddingRight = 25,
  backgroundColor = "#02090F",
  textColor = "#FFFFFF",
  fontSize = 16,
  fontWeight = "bold",
  lineHeight = 20,
  borderRadius = 6,
  borderWidth,
  borderColor,
  onClick,
  externalHovered,
}) => {
  const [internalHovered, setInternalHovered] = useState(false);

  const hovered =
    externalHovered !== undefined
      ? externalHovered
      : internalHovered;

  const resolvedBackText = backText ?? frontText;

  const sizerText =
    frontText.length >= resolvedBackText.length
      ? frontText
      : resolvedBackText;

  const hasBorder = !!borderWidth;

  const resolvedBg = hasBorder ? "transparent" : backgroundColor;

  const resolvedBorder = hasBorder
    ? `${borderWidth}px solid ${borderColor ?? "#02090F"}`
    : "none";

  const style = {
    wrapper: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      backgroundColor: resolvedBg,
      border: resolvedBorder,
      borderRadius: `${borderRadius}px`,
      paddingTop: `${paddingTop}px`,
      paddingBottom: `${paddingBottom}px`,
      paddingLeft: `${paddingLeft}px`,
      paddingRight: `${paddingRight}px`,
      cursor: "pointer",
      outline: "none",
    },

    textBase: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      whiteSpace: "nowrap",
      color: textColor,
      fontSize: `${fontSize}px`,
      fontWeight,
      lineHeight: `${lineHeight}px`,
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
      whiteSpace: "nowrap",
      color: "transparent",
      fontSize: `${fontSize}px`,
      fontWeight,
      lineHeight: `${lineHeight}px`,
      userSelect: "none",
    },
  };

  return (
    <button
      type="button"
      style={style.wrapper}
      onMouseEnter={() => setInternalHovered(true)}
      onMouseLeave={() => setInternalHovered(false)}
      onClick={onClick}
    >
      <span style={style.sizer}>{sizerText}</span>

      <span style={{ ...style.textBase, ...style.front }}>
        {frontText}
      </span>

      <span style={{ ...style.textBase, ...style.back }}>
        {resolvedBackText}
      </span>
    </button>
  );
};

export default ButtonThree;