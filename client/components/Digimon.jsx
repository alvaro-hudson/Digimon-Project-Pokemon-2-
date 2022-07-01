import * as React from 'react'
import { useParams } from 'react-router-dom'
import { getAllByLevel } from '../apis/apiClient'
// import { DisplayOne } from './Onedigi' // <---- this is wrong
import DisplayOne from './Onedigi'
import { Link } from 'react-router-dom'

const useDigimonByLevel = (level) => {
  const [{ loading, failed, data, message }, setDigimons] = React.useState({ loading: true })

  React.useEffect(() => {
    setDigimons({ loading: true })

    getAllByLevel(level)
      .then((data) => {
        setDigimons({ loading: false, data })
      })
      .catch((err) => {
        setDigimons({
          loading: false,
          failed: true,
          message: "Something's fucked",
        })
      })
  }, [level]) 

  return { loading, failed, data, message }
}

const Digimon = () => {
  const { level } = useParams()
  const { loading, failed, data, message } = useDigimonByLevel(level)

  if (loading) {
    return 'Loadinggggg.......'
  }
  if (failed) {
    return `Fuck shit: ${message}`
  }

  return (
    <div>

     {data.map(digimon => <DisplayOne digimon={digimon}/>)}
     <Link to={'/'}><button>Home</button></Link>
     </div>
  )

}

export default Digimon
