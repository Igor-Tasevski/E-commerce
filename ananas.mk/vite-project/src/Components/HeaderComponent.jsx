import React from 'react'
import { EnvelopeIcon, PhoneArrowDownLeftIcon, ShoppingBagIcon, MagnifyingGlassIcon, HeartIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useContext, useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from '../Store/AuthProvider'
import { useSelector } from 'react-redux';



const HeaderComponent = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);

    const cartItems = useSelector((state) => state?.basket?.items);//Redux

    //console.log(cartItems);

   //const {TotalQuantity}=useSelector((state) => state?.basket?.items)

    const navigate = useNavigate();


    //const logout = () => {
    //localStorage.removeItem("username")
    //localStorage.removeItem("password")
    //navigate("/login");
    //}
    {/*
    
    const logout = () => {
        localStorage.removeItem("token-info")
        navigate("/login");



    };

    */}

    return (

        <header className='bg-gray-300'>
            <div className='flex items-center justify-between px-10 py-5'>
                <div className='flex items-center space-x-4'>
                    <span className='flex items-start  hover:text-orange-400 cursor-pointer transition ease-out duration-300 font-light text-xs'>
                        <EnvelopeIcon className='h-4 w-4 text-gray-600' />     Пиши ни

                    </span>



                    <span className='flex items-start hover:text-orange-400 cursor-pointer transition ease-out duration-300 font-light text-xs'>
                        <PhoneArrowDownLeftIcon className='h-4 w-4 text-gray-600' />0800-44400

                    </span>

                </div>

                <span className='flex items-start hover:text-orange-400 cursor-pointer transition ease-out duration-300 font-light text-xs '>
                    <ShoppingBagIcon className='h-4 w-4 text-gray-600' />Статус на нарачка

                </span>
            </div>


            <div className="p-4 flex items-center justify-between bg-white">

                <div className="flex items-center space-x-4 w-2/3 flex-1">
                    <img
                        src="https://ananas.mk/_next/static/media/ananas-logo-icon.e438d94d.svg"
                        alt="ananas logo"
                    />


                    <div className="flex items-center p-4 space-x-2 bg-gray-100 rounded-full w-1/3">
                        <input id="one"
                            className="bg-transparent outline-none flex-1"
                            placeholder="Внеси термин за пребарување"
                        />
                        <MagnifyingGlassIcon className="h-8 w-8 p-2 rounded-full text-white bg-orange-500" />
                    </div>


                </div>


                <div className="flex items-center space-x-3">

                    <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
                        <HeartIcon className="h-4 w-4 text-gray-600" /> листа на желби
                    </span>

                    <span className="flex items-start hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">
                        <UserIcon className="h-4 w-4 text-gray-600" /> <button onClick={logout} >Одјави се</button>

                    </span>

                    <span onClick={() => navigate("/cart")} className="flex items-center hover:text-orange-500 cursor-pointer transition ease-out duration-200 font-light text-xs">

                        <span className="bg-orange-600 px-2 py-1 rounded-full text-white">
                            {cartItems?.length}</span>
                        <ShoppingCartIcon className="h-4 w-4 text-gray-600" />   Кошничка

                    </span>

                </div>

            </div>
        </header>


    )



}





export default HeaderComponent