import React from 'react'
import ItemRealEstate from 'components/item-real-estate/ItemRealEstate'

const CardRealEstate = ({ realEstates }: any) => {
  return (
    <>
      <ItemRealEstate itemsRealEstate={realEstates.attributes.real_estates} />
      <p className="title-card-real-estate">{realEstates.attributes.name}</p>
      <p className="subtitle-card-real-estate">
        {realEstates.attributes.real_estates.length}{' '}
        {realEstates.attributes.real_estates.length === 1
          ? 'propiedad guardada'
          : 'propiedades guardadas'}
      </p>
    </>
  )
}

export default CardRealEstate
