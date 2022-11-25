import React, { useState } from 'react';
import { Modal } from './modal';
// import SignupForm from './SignupForm';
// import './SignupForm.css';

function DeveloperModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='developer-modal-container'>
      <button className='developer-modal-link' onClick={() => setShowModal(true)}>Matt Hutter</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <SignupForm /> */}
        </Modal>
      )}
    </div>
  );
}

export default DeveloperModal;
