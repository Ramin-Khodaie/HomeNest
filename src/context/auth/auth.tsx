import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from '.';

// Create the context
const authContext = createContext({} as AuthContext);

// Create a provider component
export const AuthProvider = ({children}: {children: any}) => {
  const [user, setUser] = useState<{token: string} | null>(null);

  return (
    <authContext.Provider value={{user, setUser}}>
      {children}
    </authContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(authContext);
};
