import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path='/create-product' element={<CreateProduct/>} />
        <Route path='/products/:id' element= {<ProductDetails />} />
      </Routes>
    </main>
  )
}

export default App
