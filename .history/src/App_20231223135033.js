import React from 'react'
import { Router,Route } from 'react-router-dom'

const App = () => {
  return (
    <main>
      <Router>
        <Route path="/" element = {<Home/>}/>
      </Router>
    </main>
  )
}

export default App
