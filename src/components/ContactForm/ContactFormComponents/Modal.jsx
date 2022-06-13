import React, { useState } from "react";
import GoogleMap from "./GoogleMap";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

import "../contactform.scss";

export default function Modal({
  basicModal,
  setBasicModal,
  toggleShow,
  sent,
  setSent,
}) {
  return (
    <>
      {/* <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn> */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog centered>
          <MDBModalContent style={{ backgroundColor: "#1d1c23" }}>
            <MDBModalHeader>
              <MDBModalTitle className="text-light">Contact US</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {!sent ? (
                <div className="contactus-container">
                  <div className="contact-form">
                    <div className="input class">
                      <input
                        type="text"
                        className="input"
                        placeholder="Your Name"
                      />
                      <input
                        type="email"
                        className="input"
                        placeholder="Your Email"
                      />
                      <input type="tel" className="input" placeholder="Phone" />
                      <input
                        type="text"
                        className="input"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <textarea
                        name="textarea"
                        className="input"
                        placeholder="Message"
                        col="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                </div>
              ) : (
                <p
                  className=" text-light p-5 rounded"
                  style={{ backgroundColor: "green" }}
                >
                  Thank you, your message has been sent
                </p>
              )}
              <GoogleMap />
            </MDBModalBody>

            <MDBModalFooter className="justify-content-center">
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              {!sent && (
                <button
                  className="btn"
                  type="submit"
                  style={{ background: "#5638be" }}
                  onClick={(e) => setSent(true)}
                >
                  Send
                </button>
              )}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
