import React, { useState } from 'react'

function Product({tital,img ,price,cart,id, setcart,state,setstate}) {
    
//     const handeldecriment=(e)=>{
// setcount(count-1);
//     }
//     const handelincriment=(e)=>{
//         setcount(count+1);

//     }
    const handlecart =()=>{
        
      console.log(state);
      setcart(cart+1);
        setstate([...state,
          {
          id:`{id}`,
          title:`${tital}`,
          price:`${price}`,
          img:`${img}`
        },
      ]);
    };
  return (
    <div className='productcard'  >
    <div  key={id} >
    <img src={img}></img>
    <h1>{tital}</h1>
    <h3>{price}</h3>
    </div>
    <button onClick={handlecart}>Add cart</button>
    
    </div>

  )
}

export default Product