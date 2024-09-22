import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from '.';

// Create the context
const authContext = createContext({} as AuthContext);

// Create a provider component
export const AuthProvider = ({children}: {children: any}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <authContext.Provider value={{isSignedIn, onSignIn}}>
      {children}
    </authContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(authContext);
};
