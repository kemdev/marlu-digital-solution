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

export default function App() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Contact US</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
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
              <GoogleMap />
            </MDBModalBody>

            <MDBModalFooter className="justify-content-center">
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <button className="btn" type="submit" style={{background: '#5638be'}}>
                Send
              </button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
