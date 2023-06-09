import { useState } from "react";
import React from 'react'

function LeftNav(props) {
  const [count, setcount] = useState(0);
  const{state}=props;
  
  
  console.log(state);
  const handeldecriment=(e)=>{
    
        }
        const handelincriment=(e)=>{
            setcount(count+1);
    
        }
  return (

    <div className='leftnav'>
    { 
      state.map((item,index) =>{

        return(
          
          <div key={index} >
          <img src={item.img}></img>
           <h3>{item.title}</h3>

           
           <div className='Quntiti'>
        <button onClick={()=>{setcount(count-1);}}>-</button>
        <div>{count}</div>
        <button onClick={()=>{setcount(count+1);}}>+</button>
    </div>
    <p>{item.price}</p>
          </div>
        )
      })
    }
    
    </div>

  )
}

export default LeftNav