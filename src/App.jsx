import { useState } from 'react'
import './App.css'
import DashBoard from './component/DashBoard'
import './index.css'

function App() {
  const [user, setuser] = useState("Ujwal")

  return (
    <>
      <DashBoard user={user} setuser={setuser}/>
    </>
  )
}

export default App
