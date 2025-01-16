import React from 'react'
import { useDispatch, useSelector } from 'react-redux';//for Redux
import { useEffect } from 'react';
import { removeFromBasket, getTotals, decreaseFromBasket, addToBasket } from '../Store/basketSlice';

const CartPage = () => {
  const dispatch = useDispatch()


  const cartItems = useSelector((state) => state?.basket?.items);
  

  // const total = useSelector()
  //console.log(cartItems)


  //useEffect(() => {
   //dispatch(getTotals())

  //}, [cart,dispatch]);





  return (

    <div className='flex items-start  justify-between mt-10 px-4 mb-10'>
      <div className='space-y-4 w-2/4 h-77'>

        {cartItems?.map((item) => (
          <div key={item?.id} className="flex items-center justify-between px-2 bg-white rounded shadow-sm py-2">
            <img className="w-24 h-24 object-contain" src={item?.image} />

            <div>
              <h4 className=" text-start">{item?.title}</h4>
              <h4 className="  text-start">{item?.category}</h4>
              <h4 className="  text-start text-red-500 font-bold">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(item?.price)}

              </h4>
            </div>


            <div className=' flex text-sm items-start w-24 max-w-full border-solid border-x-2 border-y-2 border-orange-500 rounded'>
              <button className='border-solid cursor-pointer px-4 py-0.45' onClick={() => dispatch(decreaseFromBasket(item))}>-</button>
              <div className='font-mono px-1 font-bold'>{item?.cartQuantity}</div>
              <button className='border-solid   cursor-pointer px-4 py-0.45 ' onClick={() => dispatch(addToBasket(item))} >+</button>
            </div>

            <div className='cart-product-total-price' >
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(item?.price * item?.cartQuantity)} </div>

            <button
              className='px-2 py-2 bg-orange-600 text-white rounded-sm-mt-2'
              onClick={() => dispatch(removeFromBasket(item))}>

              Remove  from Cart
            </button>
          </div>
        ))}

      </div>

      <div className="bg-white w-1/3  border-gray-400 shadow-md rounded h-40 p-4 text-gray-900 text-start text-sm font-bold space-y-3">
        <p className=''>Преглед на нарачка: ({cartItems?.length})</p>
        <p  >
          Износ на нарачка{" "}
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format()}


        </p>


        <p>Вкупни трошоци за испорака 0</p>
        <p>Акциски заштеди 0</p>
      </div>

    </div>
  )
}

export default CartPage