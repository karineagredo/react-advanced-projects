import React, { useEffect } from 'react';

const Modal = ({ closeModal, modalMessage }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });
  return (
    <>
      <div>{modalMessage}</div>
    </>
  );
};

export default Modal;
