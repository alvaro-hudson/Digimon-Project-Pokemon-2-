import * as React from 'react'
import { useParams } from 'react-router-dom'
import { getAllByLevel } from '../apis/apiClient'
import { DisplayOne } from './Onedigi'

const useDigimonByLevel = (level) => {
  const [{ loading, failed, data, message }, setDigimons] = useState({ loading: true })

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
    return 'Loading...'
  }

  if (failed) {
    return `Fuck shit: ${message}`
  }

  return data.map(digimon => <DisplayOne digimon={digimon}/>)
}

export default Digimon
