import React from 'react'
import  { getAllByLevel } from '../apis/apiClient' 

function showDigimon ({ level }) {

const [digimon, setDigimon] = useState([])

useEffect(() => {
  getAllByLevel(level)
    .then(digimon => {
      setDigimon(digimon)
    })
}, [])

return (



  <Route path='/Digis/fresh' element={ <Digimon level={'fresh'} />} />

)

}