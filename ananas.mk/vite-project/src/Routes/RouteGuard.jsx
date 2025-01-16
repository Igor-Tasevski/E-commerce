import React from 'react'
import { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Store/AuthProvider'


const RouteGuard = ({children} ) => {

    const navigate = useNavigate();

    const { isLoggedIn, isLoading } = useContext(AuthContext);
   console.log(isLoggedIn)
    //useEffect(() => {

        //if (!isLoggedIn) {
           // navigate("/login");
      // }

    //}, [isLoggedIn])
      
   if (!isLoggedIn) {
     navigate ("/login") 
} 


  return (
 <div>{children}</div>
  )
}

export default RouteGuard