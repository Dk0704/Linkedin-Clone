import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import './Login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [pic, setPic] = useState('');
    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();
        if (!name) {
            return alert("Please Enter a full name")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: pic,
                })
                    .then(() => {
                        loginToApp(e);
                        window.location.reload();
                        // dispatch(login({
                        //     email: userAuth.user.email,
                        //     uid: userAuth.user.uid,
                        //     displayName: userAuth.user.displayName,
                        //     photoUrl: userAuth.user.photoURL,
                        // }));
                    });
            }).catch((error => alert(error)));
    };
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                }))
            }).catch(error => alert(error));
    };
    return (
        <>
            <div className='login'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYaK0qQtKWB7-9W6aDA8OUX5i5f75qCZ7yejphn4w1wIati12OO_XiB4652t_oSSeEQw&usqp=CAU" alt='Noimg' />
                <form>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder='Full Name (Required if registering)' type="text" />
                    <input value={pic} onChange={e => setPic(e.target.value)} placeholder='Profile pic URL(Optional)' type="text" />
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />
                    <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="password" />
                    <button type='submit' onClick={loginToApp}>Sign In</button>
                </form>
                <p>Not a member?
                    <span className='login_register' onClick={register}> Registor Now</span>
                </p>
            </div>
        </>
    )
}

export default Login;
