import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux';
import { addToBasket } from "../Store/basketSlice";




const Products = () => {

  const [products, setProducts] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((json) => setProducts(json));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  console.log(products);


  const handleAddItem = (value) => {
    console.log(value)
   dispatch(addToBasket(value))
  };



  const handleProductId = (value) => {
    navigate(`/products/${value}`);
  };


  console.log(location)


  return (


    <div className="flex gap-5 flex-wrap p-4 max-w-6xl mx-auto ">
      {products?.map((product) => (
        <div
          key={product?.id}
         
          className="border transition-all duration-90 hover:scale-110 shadow-lg cursor-pointer bg-white  flex flex-col items-center border-gray-200 rounded-lg w-58 p-1.5 h-72">
          
          <div className="flex flex-col items-center justify-center" 
             onClick={() => handleProductId(product?.id)}>
            <img className="w-20 h-20 object-contain" src={product?.image} />
            <h4 className=" truncate w-48 text-center">{product?.title}</h4>
          </div>
          <p className="text-gray-600 h-20 text-xs overflow-y-auto ">{product?.category}</p> 

          <div className="flex items-center  text-yellow-400">
            {Array(Math?.round(product?.rating?.rate))
              ?.fill(1)
              ?.map((_, i) => (
                <StarIcon key={i} className="h-6  text-yellow-400" />
              ))}
          </div>

          <span className="italic text-sm font-bold text-red-500">
            {new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(product?.price)}
          </span>

          <button className='  mt-16 justify-center bg-orange-500 text-white rounded-md ' onClick ={()=>handleAddItem (product)}>Add to Cart</button>

        </div>







      ))}
    </div>







  )
}

export default Products