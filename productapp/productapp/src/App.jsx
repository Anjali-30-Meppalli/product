import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import {  Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     {/* <Product/> */}
     {/*<Dashboard />*/}
     <Routes>
          <Route path='/dash' element={<Dashboard/>}/>
          <Route path='/add-product' element={<Product/>}/>
     </Routes>
    </>
  )
}

export default App
