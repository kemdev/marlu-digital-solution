import React from "react";

import Modal from "./FormComps/Modal";

import "./Form.scss";

export default function GeneralForm({
  toggleGeneralFormShow,
  centredModal,
  setCentredModal,
  jobShow,
  setJobShow,
  title,
  buttonTitle
}) {
  return (
    <Modal
      toggleGeneralFormShow={toggleGeneralFormShow}
      centredModal={centredModal}
      setCentredModal={setCentredModal}
      jobShow={jobShow}
      setJobShow={setJobShow}
      title={title}
      buttonTitle={buttonTitle}
    />
  );
}
