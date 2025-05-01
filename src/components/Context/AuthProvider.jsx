import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {


    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo={
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
      {      children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
