import React from "react";

import Modal from "./FormComps/Modal";

import './Form.scss'

export default function GeneralForm({
  toggleGeneralFormShow,
  centredModal,
  setCentredModal,
}) {
  return (
    <Modal
      toggleGeneralFormShow={toggleGeneralFormShow}
      centredModal={centredModal}
      setCentredModal={setCentredModal}
    />
  );
}
