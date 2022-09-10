import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './HeaderOption.css'

function HeaderOption({avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser);
  return (
    <div className='headerOption' onClick={onClick}>
      {Icon && <Icon className='headerOption_icon' />}
      {avatar && <Avatar className='headerOption_icon' src={user? user.photoURL : ''} />}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
