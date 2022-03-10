import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import initializeFirebaseApp from "../firebase/firebase.initialize"


export  const authContext = createContext()
    initializeFirebaseApp()
const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <authContext.Provider value={allContext}>
        {children}
    </authContext.Provider>
    );
};

export default AuthProvider;