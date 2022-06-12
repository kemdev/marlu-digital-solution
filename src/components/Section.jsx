import React from "react";

export default function Section({
  children,
  styles,
  bgColor = "#fff",
  textColor,
}) {
  console.log("Styles are", styles?.height);
  return (
    <div
      style={{
        padding: "50px",
        height: styles?.height || "50vh",
        backgroundColor: bgColor,
        color: textColor,

        ...styles,
      }}
    >
      {children}
    </div>
  );
}
