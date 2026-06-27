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