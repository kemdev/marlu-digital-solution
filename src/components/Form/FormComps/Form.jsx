import React, { useState } from "react";
import { MDBTextArea, MDBInput, MDBFile } from "mdb-react-ui-kit";

export default function Form({ isApplyJob, setIsApplyJob }) {
  return (
    <div  className="form-container">
      {/* <MDBInputGroup className='mb-3' size='sm' textBefore='Small'>
        <input className='form-control' type='text' />
      </MDBInputGroup>

      <MDBInputGroup className='mb-3' textBefore='Default'>
        <input className='form-control' type='text' />
      </MDBInputGroup>

      <MDBInputGroup className='mb-3' size='lg' textBefore='Large'>
        <input className='form-control' type='text' />
      </MDBInputGroup>
      <MDBFile label='Default file input example' id='customFile' /> */}
      <div style={{ width: "23rem"  }}>
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
        {isApplyJob && (
          <div className="upload-file">
            <MDBFile
              label="Upload Your  Resume"
              id="customFile"
              className="mt-2"
            />
          </div>
        )}
      </div>
    </div>
  );
}
