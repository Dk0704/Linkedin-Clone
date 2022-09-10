import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const [input, setInput] = useState(['']);
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(()=>{
        db.collection("posts")
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>
            setPosts(
                snapshot.docs.map((doc)=>({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        )
    },[])
    const sendPost=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL ? user.photoURL : '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
    }

  return (
    <div className='feed'>
        <div className="feed_incont">
            <div className='temp'>
            <div className="feed_input">
                <CreateIcon />
                <form >
                    <input value={input} onChange={e=> setInput(e.target.value)}  type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed_inOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='lightblue'/>
                <InputOption Icon={SubscriptionsIcon} title='Vedio' color='orange'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='gray'/>
                <InputOption Icon={ViewDayIcon} title='Write Article' color='lightgreen'/>
            </div>
            </div>
            {/* Posts */}
            <FlipMove>
            {posts.map(({id, data: {name, description, message, photoUrl}})=>(
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}/>
            ))}
            </FlipMove>
            
        </div>
      
    </div>
  )
}

export default Feed
