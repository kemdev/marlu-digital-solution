import * as React from "react";
import { styled } from "@mui/material/styles";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";




const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 1000,
    width: 450,
    height: "12rem",
    fontSize: theme.typography.pxToRem(15),
    border: "1px solid #dadde9",
    borderRadius: "25px",
    padding: "10px",
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
