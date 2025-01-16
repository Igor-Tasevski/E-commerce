import React from 'react'
import { createContext,useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [jwt, setJwt] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
      const storedJwt = localStorage.getItem("jwt");
      
        if (storedJwt) {
          setIsLoggedIn(true);
          setJwt(storedJwt);
        }
        setIsLoading(false);
      }, []);
    
      function login(token) {
        setIsLoggedIn(true);
        setJwt(token);
        localStorage.setItem("jwt", token);
        navigate ("/")
      }
    
      function logout() {
        setIsLoggedIn(false);
        setJwt(null);
        localStorage.removeItem("jwt");
        navigate("/login")
      }
    
      const authValue = {
        isLoggedIn,
        isLoading,
        login,
        logout,
      };








  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider