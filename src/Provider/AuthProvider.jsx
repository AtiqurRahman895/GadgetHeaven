import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext= createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const creatUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile=(displayName,photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })
    }

    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribeUser= onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

          });

        return()=>{
            unsubscribeUser()
            
        }
    },[])



    const value={
        user,
        setUser,
        creatUser,
        updateUserProfile,
        loginUser,
        logoutUser,
        loading,
        setLoading,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;