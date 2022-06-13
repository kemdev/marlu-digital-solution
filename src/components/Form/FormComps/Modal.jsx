import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

import From from './Form'

export default function Modal({toggleGeneralFormShow, centredModal, setCentredModal}) {
 

  return (
    <>
      {/* <MDBBtn onClick={toggleGeneralFormShow}>Vertically centered modal</MDBBtn> */}

      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent style={{backgroundColor: '#1d1c23'}} className="text-light">
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleGeneralFormShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className='general-modal align-self-center'>
             <From />
            </MDBModalBody>
            <MDBModalFooter>
              {/* <MDBBtn color='secondary' onClick={toggleGeneralFormShow}>
                Close
              </MDBBtn> */}
              <MDBBtn>Request Free Consultation</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}