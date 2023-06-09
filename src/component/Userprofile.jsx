import React, { useState } from 'react'
import ProductList from './ProductList'

function Userprofile({cart ,setcart,product,setproduct,state, setstate}) {
  
  return (
    <div>
    <br></br>
    <ProductList cart={cart} setcart={setcart} product={product} setproduct={setproduct} state={state} setstate={setstate}/>
    </div>
  )
}

export default Userprofile