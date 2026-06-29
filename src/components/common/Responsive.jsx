const tokens = {
  gap: {
    none: "0px",
    xs: "clamp(0.25rem, 1vw, 0.5rem)",
    sm: "clamp(0.5rem, 1.5vw, 0.75rem)",
    md: "clamp(0.75rem, 2vw, 1.25rem)",
    lg: "clamp(1rem, 2.5vw, 2rem)",
    xl: "clamp(1.5rem, 3vw, 3rem)",
  },
  padding: {
    none: "0",
    tight: "0 clamp(0.5rem, 2vw, 1.5rem)",
    base: "0 clamp(1rem, 4vw, 3rem)",
    wide: "0 clamp(2rem, 6vw, 6rem)",
  },
};

const bp = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};