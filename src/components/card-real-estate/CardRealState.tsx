import React from 'react'
import ItemRealEstate from '../item-real-estate/ItemRealEstate'

const CardRealState = ({ realEstates }: any) => {
  return (
    <>
      <ItemRealEstate itemsRealEstate={realEstates.attributes.real_estates} />
      <h1 className="ml-5 my-2 text-lg  text-left">
        {realEstates.attributes.name}
      </h1>
      <p className="ml-5 my-2 text-sm  text-green-gray text-left">
        {realEstates.attributes.real_estates.length}{' '}
        {realEstates.attributes.real_estates.length === 1
          ? 'propiedad guardada'
          : 'propiedades guardadas'}
      </p>
    </>
  )
}

export default CardRealState
