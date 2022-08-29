
import React from 'react'
import { Link } from 'react-router-dom'
const levils = ['fresh', 'inTraining', 'rookie', 'champion', 'mega', 'ultimate']
  
// < Route path = "/Digimon/:level" element = {< Digimon />} />


function Nav() {
  return (
    <div className="buttons">
    
      <div className="buttonlist">
        <h3>Select level:</h3>
        {levils.map(leveils =>
          <Link key={leveils} to={`/Digimon/${leveils}`} >
            <button className="glow-on-hover" type="button">{leveils}</button>
            <br></br></Link>
        )}
       
      </div>

      {/* <img className="images" src="../images/thanos.webp"></img>
      <img className="fortnite images"  src="../images/fortnite.jpg"></img>
      <img className="images" src="../images/ijggelypuff.jpg"></img>
      <img className="images" src="../images/bulby.jpeg"></img> */}

    </div>
  )
}

export default Nav