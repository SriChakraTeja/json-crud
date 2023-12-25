import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <main>
      <center>
        <Routes>
          <Route path="/" element = {<Home/>}/>
        </Routes>
      </center>
    </main>
  )
}

export default App
