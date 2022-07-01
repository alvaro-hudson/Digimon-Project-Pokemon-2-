
import React from 'react'
import { Link } from 'react-router-dom'
const leveils = ['fresh', 'inTraining', 'rookie', 'champion', 'mega', 'ultimate']

function Nav() {
  return (
    <div>
    
      <ul>
        <h3>Pokemon II</h3>
        {leveils.map(leveils =>
          <Link key={leveils} to={`/level/${leveils}`} > <div><button className="glow-on-hover" type="button">{leveils}</button></div></Link>
        )}
       
      </ul>

      {/* <img className="images" src="../images/thanos.webp"></img>
      <img className="fortnite images"  src="../images/fortnite.jpg"></img>
      <img className="images" src="../images/ijggelypuff.jpg"></img>
      <img className="images" src="../images/bulby.jpeg"></img> */}

    </div>
  )
}

export default Nav