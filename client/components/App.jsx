import React, { useEffect } from 'react'
import Nav from './Nav'

// import { fetchFruits } from '../actions'

function App() {
 

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
         <Nav/>
        </ul>
      </div>
    </>
  )
}

export default App
