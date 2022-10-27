import React, {createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import app from '../../Firebase/FirebaseConfig';

import { GithubAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';

//googleAuthProvider
export const MyContext = createContext();
const auth = getAuth(app)

const Authcontext = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


//Sign up new users
const createUserEmailAndPassword = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}


//SignIn user
const signInUser =(email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
}


//googleAuthProvider
const providerLogin =(provider) => {
    return signInWithPopup(auth, provider)
}

//github-auth-provider
const gitSignIn = (provider) => {
    return signInWithPopup(auth, provider)
}

//Get the currently signed-in user

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
    });
    return () => {
        unsubscribe();
    }
},[])

//Update a user's profile
const updateKoroTomarProfile = (profile) => {
    return updateProfile(auth.currentUser,profile)
}

//logOut
const logOut =() => {
    return signOut(auth)
}

const info = {user,
    providerLogin,
    createUserEmailAndPassword,
    signInUser,
    updateKoroTomarProfile,
    logOut,
    loading,
    gitSignIn,
    setUser
}
    return (
        <div>
            <MyContext.Provider value={info}>
                {children}
            </MyContext.Provider>
        </div>
    );
};

export default Authcontext;