import React from 'react';

const ProfileModal = ({ photoURL, displayName, onClose }) => {
  return (
    <div className="profile-modal">
      <div className="modal-content">
        <img src={photoURL} alt={displayName} />
        <span className='name-color'>{displayName}</span>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileModal;
