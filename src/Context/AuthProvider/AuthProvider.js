import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/firebase.init.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext()

const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)



    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const createUser =(email,password)=>{
          return createUserWithEmailAndPassword(auth,email,password)
    }


  const signIn =(email,password)=>{

    return signInWithEmailAndPassword(auth,email,password);
  }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('auth state changed', currentUser);
            setUser(currentUser)
        });
         
           return ()=>{
            unsubscribe();
           }
    }, [])


   

    const authInfo = { user, providerLogin,logOut,createUser,signIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;