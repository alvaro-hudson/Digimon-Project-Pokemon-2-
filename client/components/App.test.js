import nock from 'nock'
import {getAllByName }from '../apis/apiClient'
import { expect } from '@jest/globals'

describe('getAllByName', () => {
  test('returns correct name',  () => {
    const digimonName = 'Yuramon' 
    const digibody = {
      name: 'Yuramon',
      img: 'https://digimon.shadowsmith.com/img/yuramon.jpg',
      level: 'Fresh',
      
    }

    const scope = nock('https://digimon-api.herokuapp.com/api/digimon')
    .get(`/name/${digimonName}`)
    .reply(200,digibody)

    return getAllByName(digimonName)
      .then((result) => {
        expect(result).toEqual(digibody)
        expect(scope.isDone()).toBe(true)
      })
  })
})




