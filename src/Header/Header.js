import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import pp from './pp.png'
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';


function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () =>{
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
        {/* <h1>this is the header</h1> */}
        <div className="header_left">
           
            <img src="https://www.fpsa.org/wp-content/uploads/linkedin-logo-copy.png" alt="" />
            <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar={true} title="Me" onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header
