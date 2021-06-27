import React, { useEffect, useState } from 'react'
import './ItemRealEstate.scss'

const ItemRealEstate = ({ itemsRealEstate }: any) => {
  const [sizeRealEstates, setRealEstates] = useState('')

  const verifySizeRealEstates = () => {
    if (itemsRealEstate.length === 2) setRealEstates('two')
    if (itemsRealEstate.length > 2) setRealEstates('three')
  }

  useEffect(() => {
    verifySizeRealEstates()
  }, [])

  return (
    <>
      <div className="container-home  w-11/12">
        <div className={`content-image  h-48  ${sizeRealEstates}-image`}>
          {itemsRealEstate.map((estate: any, index: number) => (
            <>
              <img
                className={index > 2 ? 'hidden' : ''}
                src={estate.attributes.gallery_urls[0]}
                alt={estate.attributes.name}
                width="100%"
                height="100%"
              />
              {index === 2 && (
                <h1 className="text-white font-bold mr-6 my-auto z-10">
                  +{itemsRealEstate.length - index}
                </h1>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default ItemRealEstate
