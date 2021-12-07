import '../styles/auth.scss';
import { useContext, useState } from 'react';

import { AuthContext } from '../App';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import googleIconImg from '../assets/google-icon.svg';
import { useNavigate } from 'react-router';
import { auth } from '../services/firebase';

export function Login() {

    const { user, SignInWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate();


    function handleCreateAuth() {

        if (!user) {
            SignInWithGoogle();
        }
        navigate('/home')
        // signInWithPopup(auth, provider)
        //     .then((result) => {

        //     })
    }


    return (
        <div className="container">
            <div className="login-container">
                <h2>Challenger Leagues</h2>
                <p>Aqui Você encontra as mais diversas ligas de qualquer time ou torcida.</p>
                <div className="separator">Que tal Logar e saber mais ? </div>
                <button onClick={handleCreateAuth} className="create-room">
                    <img src={googleIconImg} alt="Logo do google" />
                    Sign with Google account
                </button>
            </div>
        </div>
    )
}