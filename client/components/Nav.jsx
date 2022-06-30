
import React from 'react'
import { Link } from 'react-router-dom'
const leveils = ['fresh', 'inTraining', 'rookie', 'champion', 'mega', 'ultimate']

function Nav() {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <h3>Pokemon II</h3>
        {leveils.map(leveils =>
          <Link className="btn-slice" href="#"  key={leveils} to={`/level/${leveils}`}><li> 
            <div className="top"><span>{leveils} </span></div>
            <div className="bottom"><span>{leveils} </span></div>
        </li></Link>
        )}
       
      </ul>
    </div>
  )
}

export default Nav