import dataRealEstate from '../../../public/real_estates.json'
import { DataRealEstate } from 'interfaces/realEstates.interface'

export const getRealEstatesService = async () => {
  const { data, included } = dataRealEstate

  return data.map((realEstates: DataRealEstate) => {
    const { attributes } = realEstates
    attributes.real_estates = included.filter((item) => {
      item.attributes.gallery_urls[0] = addImageRandom()
      return attributes.real_estate_ids.includes(+item.id)
    })

    return realEstates
  })
}

const addImageRandom = () => {
  let randomNum = Math.floor(Math.random() * (9 - 1) + 1)
  const path = require(`../../assets/real${randomNum}.jpg`).default
  return path
}
