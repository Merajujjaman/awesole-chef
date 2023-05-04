import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)

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
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;