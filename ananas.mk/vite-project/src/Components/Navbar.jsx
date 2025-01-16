import React from 'react'
//import './Navbar.css'

const Navbar = () => {
    return (


        <div className="bg-orange-400 text-white place-content-center flex p-4">

            <div className="">
                <ul className="list-none, flex , justify-center, m-0,p-10">
                    <li className=' mr-12   '>
                        <a className="text-white   no-underline " href="/">Почетна</a>
                    </li>
                    <li className='mr-12'    >
                        <a className='text-white   no-underline ' href="/products">Продукти</a>
                    </li>
                    <li className='mr-12'>
                        <a className="text-white   no-underline " href="/about">За нас</a>
                    </li>

                    <li className='mr-12'>
                        <a className='text-white   no-underline' href="/contact">Контактирај не</a>
                    </li>


                    <li className='mr-12'>
                        <a className='text-white   no-underline' href="/promotions">Промоции</a>
                    </li>
                </ul>
            </div>

        </div>
    );
};



export default Navbar