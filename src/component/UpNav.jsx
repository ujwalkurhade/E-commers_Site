import React from 'react'

function UpNav({cart,setcart}) {
  
  return (
    <div className='uppnav'>
    <h3>SHOOP ME..</h3>
    <div>
    <input type="text"  />
    <button >🔍</button>
    </div>
    <p>{cart}🛒 </p>
    </div>
  )
}

export default UpNav