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

function Grid({
  as: Tag = "div",
  children,
  min = "260px",
  cols,
  gap = "md",
  padding = "none",
  align,
  className = "",
  style = {},
}) {
  const uid = useId().replace(/:/g, "");

  const gapVal = tokens.gap[gap] ?? gap;
  const paddingVal = tokens.padding[padding] ?? padding;

  // Responsive Columns
  if (cols && typeof cols === "object") {
    const id = `rg-${uid}`;

    const baseCol = cols.base ?? 1;
    const smCol = cols.sm;
    const mdCol = cols.md;
    const lgCol = cols.lg;
    const xlCol = cols.xl;
    const xxlCol = cols["2xl"];

    const css = `
      #${id} {
        grid-template-columns: repeat(${baseCol}, 1fr);
      }

      ${
        smCol
          ? `@media (min-width:${bp.sm}px){
              #${id}{
                grid-template-columns: repeat(${smCol},1fr);
              }
            }`
          : ""
      }

      ${
        mdCol
          ? `@media (min-width:${bp.md}px){
              #${id}{
                grid-template-columns: repeat(${mdCol},1fr);
              }
            }`
          : ""
      }

      ${
        lgCol
          ? `@media (min-width:${bp.lg}px){
              #${id}{
                grid-template-columns: repeat(${lgCol},1fr);
              }
            }`
          : ""
      }

      ${
        xlCol
          ? `@media (min-width:${bp.xl}px){
              #${id}{
                grid-template-columns: repeat(${xlCol},1fr);
              }
            }`
          : ""
      }

      ${
        xxlCol
          ? `@media (min-width:${bp["2xl"]}px){
              #${id}{
                grid-template-columns: repeat(${xxlCol},1fr);
              }
            }`
          : ""
      }
    `;

    return (
      <>
        <style>{css}</style>

        <Tag
          id={id}
          className={`grid w-full ${className}`}
          style={{
            gap: gapVal,
            padding: paddingVal,
            alignItems: align,
            boxSizing: "border-box",
            ...style,
          }}
        >
          {children}
        </Tag>
      </>
    );
  }

  // ── MODE 3: custom string → "443px_1fr"
  if (cols && typeof cols === "string") {
    const templateColumns = cols.replaceAll("_", " ");
    const id  = `rg-${uid}`;
    const css = `
      #${id} { grid-template-columns: 1fr; }
      @media(min-width:${bp.md}px) { #${id} { grid-template-columns: ${templateColumns}; } }
    `;

    return (
      <>
        <style>{css}</style>
        <Tag
          id={id}
          className={`grid w-full ${className}`}
          style={{
            gap: gapVal,
            padding: paddingVal,
            alignItems: align,
            boxSizing: "border-box",
            ...style,
          }}
        >
          {children}
        </Tag>
      </>
    );
  }
  // Auto-fit Grid
  return (
    <Tag
      className={`grid w-full ${className}`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}, 100%), 1fr))`,
        gap: gapVal,
        padding: paddingVal,
        alignItems: align,
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export default Grid;