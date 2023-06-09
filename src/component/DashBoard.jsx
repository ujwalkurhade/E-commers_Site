import React, { useEffect,useState } from 'react'
import LeftNav from './LeftNav'
import UpNav from './UpNav'
import Userprofile from './Userprofile'
import data from '../data.json'

function DashBoard({user,setuser}) {
  // console.log(props)

const [cart, setcart] = useState(0)
const [state, setstate] = useState([])

const [product, setproduct] = useState([]);
console.log(product);
useEffect(() =>{
    setproduct(data.data);
    
},[])

  return (
    <>
    {/* <div className='dashboard'>
    div
      <LeftNav user={user} setuser={setuser}/>
      <div className='main'>
        <UpNav user={user} setuser={setuser}/>
        <Userprofile user={user} setuser={setuser}/>
      </div>
    </div>
    <Footer user={user} setuser={setuser}/> */}
    

    
<div className='dashboard'>
  <UpNav cart={cart} setcart={setcart} state={state} setstate={setstate}/>
  <div className='main'>

    <LeftNav product={product} setproduct={setproduct} state={state} setstate={setstate}/>
    <Userprofile cart={cart} setcart={setcart} product={product} setproduct={setproduct} state={state} setstate={setstate}/>
  
  </div>
</div>

    </>
  )
}

export default DashBoard