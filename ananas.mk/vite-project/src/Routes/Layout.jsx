import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import HeaderComponent from '../Components/HeaderComponent'
import { useEffect } from 'react'
import LoginPage from './LoginPage'
import Navbar from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import AuthProvider from '../Store/AuthProvider'
//import { AuthContext } from '../Store/AuthProvider'
//import { useContext, useState } from 'react'
import RouteGuard from './RouteGuard'

const Layout = () => {

    //const { isLoggedIn, isLoading } = useContext(AuthContext);

    //const username = localStorage.getItem("username");
    //const navigate = useNavigate();


    //useEffect(() => {

        //if (!username) {
            //navigate("/login");
       // }

  //  }, [username])



    //if (!isLoggedIn) {
       // navigate ("/login") 
     // }
    
  

    return (
        <div className='bg-gray-100'>
            <AuthProvider>
              <RouteGuard> <HeaderComponent /></RouteGuard>  
                <Navbar />

                <Outlet />
                <Footer />
            </AuthProvider>
        </div>
    )
}

export default Layout