import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    
    //create user using email and password:
    const createUser =(email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signIn with email and password: 
    const signIn =(email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google: 
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // signOut set up:
    const logOut = () => {
        signOut(auth)
    }

    // set an observer to chack user :
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    } ,[])

    const authInfo ={
        createUser,
        signIn,
        logOut,
        googleSignIn,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;