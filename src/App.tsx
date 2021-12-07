import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { createContext, useState, useEffect } from 'react';
import { auth, provider } from './services/firebase';
import { signInWithPopup } from '@firebase/auth';
import { About } from "./components/About";
import { Contact } from "./components/Contact";



type AuthContextType = {
  user: User | undefined;
  SignInWithGoogle: () => void;
}

type User = {
  id: string;
  name: string;
  avatar: string;
}

export const AuthContext = createContext({} as AuthContextType);


export function App() {

  const [user, setUser] = useState<User>();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        const { displayName, photoURL, uid } = user
  
  
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Gooogle Account.');
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])

  function SignInWithGoogle() {
    
    signInWithPopup(auth, provider).then(result => {
      if (result.user) {
        const { displayName, photoURL, uid } = result.user
  
  
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Gooogle Account.');
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }
    })

    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;
    // // The signed-in user info.
    // const user = result.user;
  }
  return (
    <BrowserRouter>
     <AuthContext.Provider value={{ user, SignInWithGoogle }}>
       <Routes>
        <Route path="/"  element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      </AuthContext.Provider>

    </BrowserRouter>
  )
}

