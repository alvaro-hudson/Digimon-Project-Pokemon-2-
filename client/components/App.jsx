import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useParams } from 'react-router-dom'
import Nav from './Nav'
import Digimon from './Digimon'

// import { fetchFruits } from '../actions'

function App() {
 

  return (
    <>
      <div className="app">
        <h1>Pokemon 2 Electric Boogaloo:</h1>

         <Nav/> 
      </div>
      <Routes>
        <Route path="/Digimon/:level" element={<Digimon />} />
      </Routes>
    </>
  )
}

export default App
