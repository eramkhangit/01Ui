import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicTabs,{ CustomTabPanel } from './Component/CustomTabPanel'
import  {FullWidthTabs,TabPanel} from './Component/TabPanel'
import ScrollableTabsButtonForce from './Component/ScrollableBtn'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   < BasicTabs  />
   <br />
   < FullWidthTabs />
   <ScrollableTabsButtonForce />
    </>
  )
}

export default App
