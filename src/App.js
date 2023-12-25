import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import CreateProducts from './components/CreateProducts'
import UpdateProduct from './components/UpdateProduct'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path='/create-products' element={<CreateProducts/>} />
        <Route path='/products/:id' element= {<ProductDetails />} />
        <Route path='/products/edit/:id' element= {<UpdateProduct />} />
      </Routes>
    </main>
  )
}

export default App
