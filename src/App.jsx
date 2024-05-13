import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CustomTabPanel } from '../Component/CustomTabPanel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   < CustomTabPanel />
    </>
  )
}

export default App
