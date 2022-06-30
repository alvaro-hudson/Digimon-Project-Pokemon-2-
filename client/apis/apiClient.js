import request from 'superagent'

const rootUrl = 'https://digimon-api.herokuapp.com/api/digimon/'
// Shape [{name, img, level}, {...}, ...]

export function getAllDigimon() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function getAllByName(name) {
  return request.get(rootUrl + 'name/' + name).then((res) => {
    return res.body
  })
}

export function getAllByLevel(level) {
  return request.get(rootUrl + 'level/' + level).then((res) => {
    return res.body
  })
}
