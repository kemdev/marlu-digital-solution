import * as React from "react";
import { useContext } from "react";
import { styled } from "@mui/material/styles";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#1d1c23",
    color: "#fff",
    maxWidth: 1000,
    width: 450,
    // height: "12rem",
    fontSize: theme.typography.pxToRem(15),
    // border: "1px solid #dadde9",
    borderRadius: "25px",
    padding: "10px",
    "& > div": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "12rem",
    },
    "& > div > div": {
      display: "flex",
      flexDirection: "column",
      textAlign: "start",
      // display: "grid",
      // gridAutoColumns: "1fr",
      // gridTemplateColumns: " repeat(2, 1fr)",
      height: "12rem",
      alignItems: "flex-start",
      justifyContent: "space-around",
    },
  },
}));

export default function HtmlToolTips({ children, title }) {
  return (
    <HtmlTooltip
      style={{ display: "grid", placeContent: "center" }}
      arrow
      title={<React.Fragment>{title}</React.Fragment>}
    >
      <p className="p-0 m-0" style={{ cursor: "pointer" }}>
        {children}
      </p>
    </HtmlTooltip>
  );
}
