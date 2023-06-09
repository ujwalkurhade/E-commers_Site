import React, { useEffect,useState } from 'react'
import Product from './Product'


function ProductList({cart,setcart,product,setproduct,state,setstate}) {
  
  return (
    
    <div className='ProductList'>
        {
            
            product.map((item)=>(
                <Product key={item.id} id={item.id} tital={item?.title}  img={item?.img} price={item?.price} cart={cart} setcart={setcart} state={state} setstate={setstate}/>
            ))
        }
    </div>
  )
    }
export default ProductList