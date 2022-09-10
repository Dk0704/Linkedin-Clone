import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed/Feed';
import { auth } from './firebase';
import Header from './Header/Header';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">
      <Header />
      {!user ?
        (<Login />) : (
          <div className="main_body">
            <Sidebar />
            <Feed />
            <Widgets/>
          </div>
        )}
    </div>
  );
}

export default App;
