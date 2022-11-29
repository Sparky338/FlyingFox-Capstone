import React, { useState } from 'react';
import { Modal } from './modal';
import DeveloperAbout from './developer-about';
import developerPhoto from "../../images/Developer_Matt_Hutter.jpg"
import './developer-modal.css'

function DeveloperModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='developer-modal-container'>
      <button className='developer-modal-link' onClick={() => setShowModal(true)}>
        <img src={developerPhoto} alt="Developer, Matt Hutter" className="developer-photo" />
        <div className='name-modal-link'>Matt Hutter</div>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeveloperAbout />
        </Modal>
      )}
    </div>
  );
}

export default DeveloperModal;
