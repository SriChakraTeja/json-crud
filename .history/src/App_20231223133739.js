import React from 'react'
import { Router, Routes } from 'express'

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
