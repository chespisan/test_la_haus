import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import CardRealEstate from '../../../components/card-real-estate/CardRealEstate'

describe('Test Component', () => {
  let wrapper: ShallowWrapper
  const realEstates = {
    id: 45657,
    attributes: {
      name: 'real estate',
      real_estates: [
        {
          id: 45657,
          attributes: {
            name: 'real estate',
            gallery_urls: ['https://url.png'],
            real_estates: [
              {
                name: 'item1',
                gallery_urls: ['https://url.png'],
              },
            ],
          },
        },
      ],
    },
  }

  beforeEach(() => {
    wrapper = shallow(<CardRealEstate realEstates={realEstates} />)
  })

  test('Testing RealEstate empty properties', () => {
    const realEstates = {
      id: 45657,
      attributes: {
        name: 'real estate',
        real_estates: [],
      },
    }
    shallow(<CardRealEstate realEstates={realEstates} />)
  })

  test('Testing render component Card real Estate', () => {
    const cardRealEstateComponent = wrapper.find('ItemRealEstate').length
    expect(cardRealEstateComponent).toBe(1)
  })
})
