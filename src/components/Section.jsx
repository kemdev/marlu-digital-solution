import React from "react";

export default function Section({
  children,
  styles,
  bgColor = "#fff",
  textColor,
}) {

  return (
    <div
      style={{
        padding: "50px",
        height: styles?.height || "100%",
        backgroundColor: bgColor,
        color: textColor,

        ...styles,
      }}
    >
      {children}
    </div>
  );
}
