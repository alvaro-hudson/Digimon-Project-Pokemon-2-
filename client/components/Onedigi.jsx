import React from 'react'

function DisplayOne (props) {

  const {name, img, level} = props.digimon
  
  return (
    <div className='DisplayOne'>
      <img src={img} alt='digimon'/>
      <h1>{name}</h1>
      <p>{level}</p>


    </div>

  )
  
  

}


export default DisplayOne