import React, { useContext } from 'react'
import file from "../img/pri.jpg"
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className='logo'>Pandey chat</span>
      <div className='user'>
        <img src={currentUser.photoUrl} alt="" />
        <span>{ currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}
export default Navbar;