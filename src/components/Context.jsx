import React, { createContext, useState } from "react";

export const MarluContext = createContext();

const colorPalette = {
  defaultColor: "#0f0f0f",
  textColor: "#fff",
  violet: "#10092f",
  purpleHart: "#5638be",
  mediumPurple: "#a661d7",
};

export default function MarloProvider({ children }) {
  const [defaultBackgroundColor, setDefaultBackgroundColor] = useState(
    colorPalette.defaultColor
  );

  const [isApplyJob, setIsApplyJob] = useState(false)

  return (
    <MarluContext.Provider
      value={{
        defaultBackgroundColor,
        setDefaultBackgroundColor,
        colorPalette,
        isApplyJob, setIsApplyJob
      }}
    >
      {children}
    </MarluContext.Provider>
  );
}
