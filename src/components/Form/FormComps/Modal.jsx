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

export default function Modal({toggleGeneralFormShow, centredModal, setCentredModal, jobShow, setJobShow, title, buttonTitle}) {
  



  return (
    <>
      {/* <MDBBtn onClick={toggleGeneralFormShow}>Vertically centered modal</MDBBtn> */}

      <MDBModal tabIndex='-1' show={centredModal || jobShow} setShow={setCentredModal || setJobShow}>
        <MDBModalDialog centered>
          <MDBModalContent style={{backgroundColor: '#1d1c23'}} className="text-light">
            <MDBModalHeader>
              <MDBModalTitle>{jobShow ? title : 'Reqeust a free Consultation'}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleGeneralFormShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className='general-modal align-self-center'>
             <From jobShow={jobShow} title={title} />

              <MDBBtn className='my-4'>{buttonTitle || 'Request Free Consultation'}</MDBBtn>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}