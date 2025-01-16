import React from 'react'
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/outline'



const ProductsByIDPage = () => {

  const location = useLocation()
  const params = useParams();
  const [product, setProduct] = useState(null);
  //console.log(params)
  //console.log(location)





  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`https://fakestoreapi.com/products/${params?.id}`)
          .then((res) => res.json())
          .then((json) => setProduct(json));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  console.log(params);




  return (






    <div className='flex gap-5 flex-wrap p-3 '>


      <div



        //key={product?.id}
        //onClick={() => handleProductId(product?.id)}
        className="border  shadow-lg cursor-pointer bg-white relative flex flex-col items-center border-gray-200 rounded-lg w-68 p-10 "
      >
        <img className="w-20 h-20 object-contain" src={product?.image} />
        <h4 className=" w-28 text-center">{product?.title}</h4>
        <p className="text-gray-600 h-17 text-xs overflow-y-auto ">{product?.category}</p>




      </div>
    </div>


  );



}

export default ProductsByIDPage