import React from 'react'

function DisplayOne (props) {

  const {name, img, level} = props.digimon
  
  return (
    <div className='DisplayOne'>
     
      <h1>{name}</h1>
      
      <img src={img} alt='digimon' />
   


    </div>

  )
  
  

}


export default DisplayOne