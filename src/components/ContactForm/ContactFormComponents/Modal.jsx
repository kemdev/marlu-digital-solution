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
import { MDBTextArea, MDBInput, MDBFile } from "mdb-react-ui-kit";

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
            <MDBModalBody style={{textAlign: "-webkit-center"}}>
              {!sent ? (
                <div style={{ width: "23rem" }} className="form-container align-self-center">
                  <MDBInput
                    label="Full Name"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    className="mb-2 text-light"
                  />
                  <MDBInput
                    label="Email Address"
                    id="formControlDefault"
                    type="text"
                    size="lg"
                    className="mb-2"
                  />

                  <MDBInput
                    label="Phone Number"
                    id="formControlSm"
                    type="text"
                    size="lg"
                    className="mb-2"
                  />
                  <div className="my-4">
                    <MDBTextArea
                      label="Message"
                      id="textAreaExample"
                      rows={4}
                      className="my-2"
                    />
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
