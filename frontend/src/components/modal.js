import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    display: 'flex',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement(document.getElementById('root'));

export default function BlankModal({isOpen, children}) {

  return (
    <div>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Loading..."
      >
        {children}
      </Modal>
    </div>
  );
}