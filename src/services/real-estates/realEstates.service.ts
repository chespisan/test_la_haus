import dataRealEstate from '../../../public/real_estates.json'
import { DataRealEstate } from '../../interfaces/realEstates.interface'

export const getRealEstatesService = async () => {
  const { data, included } = dataRealEstate

  return data.map((realEstates: DataRealEstate) => {
    const { attributes } = realEstates
    attributes.real_estates = included.filter((item) =>
      attributes.real_estate_ids.includes(+item.id),
    )
    return realEstates
  })
}
