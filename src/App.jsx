import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import PNF from './pages/PNF'
import Footer from './components/Footer'
import AnimatedCursor from 'react-animated-cursor'

function App() {
 

  return (
    <>
    {/* <AnimatedCursor color='16,16,28'/> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/:id/view' element={<View/>}/>
      <Route path='/*' element={<PNF/>} />
     </Routes>
     <Footer/>

    </>
  )
}

export default App
