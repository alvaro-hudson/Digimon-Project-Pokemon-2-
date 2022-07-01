import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useParams } from 'react-router-dom'
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
        <Routes>
          <route path 
        </Routes>
      </div>
      <Routes>
        <Route path="/Digimon/:level" element={<Digimon />} />
      </Routes>
    </>
  )
}

export default App
