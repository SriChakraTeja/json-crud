import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path='/products/:id' element= {<ProductDetails />} />
      </Routes>
    </main>
  )
}

export default App
