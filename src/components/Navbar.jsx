import React, { useContext, useState } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import ProfileModal from './ProfileModal';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='navbar'>
      <span className="logo">B Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt=""  className='one' onClick={openModal}/>
        <span>{currentUser.displayName}</span>
        <button className='four' onClick={()=>signOut(auth)}>Logout</button>
        {showModal && (
          <ProfileModal
            photoURL={currentUser.photoURL}
            displayName={currentUser.displayName}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar;