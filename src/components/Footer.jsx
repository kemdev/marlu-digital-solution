import React from "react";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "#1d1c23", color: "#fff" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-light" href="https://marlu.tech">
          marlu.tech
        </a>
        <a className="ms-4" href="https://github.com/kemdev/marlu-digital-solution" target="_blank">
          <MDBIcon fab icon="github" />
        </a>
        <a className="mx-4"  href="https://github.com/kemdev/marlu-digital-solution" target="_blank">
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a className=""  href="https://github.com/kemdev/marlu-digital-solution" target="_blank">
          <MDBIcon fab icon="instagram" />
        </a>
      </div>
    </MDBFooter>
  );
}
