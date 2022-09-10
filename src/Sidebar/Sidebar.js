import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar_recentitem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000" alt="" />
            <Avatar src={user.photoURL} className='sidebar_avatar'/>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you?</p>
                <p className="sidebar_number">2,344</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on Post</p>
                <p className="sidebar_number">2,344</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('Programming')}
            {recentItem('Software')}
            {recentItem('Developer')}
            {recentItem('React.js')}
            {recentItem('Redux')}
        </div>
    </div>
  )
}

export default Sidebar
