import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import ItemRealEstate from '../../../components/item-real-estate/ItemRealEstate'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}))

describe('Test component', () => {
  let wrapper: ShallowWrapper
  const itemsRealEstate = [
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
  ]

  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f())
  })

  test('Testing render component ItemRealEstate', () => {
    wrapper = shallow(<ItemRealEstate itemsRealEstate={itemsRealEstate} />)
    const itemRealEstateComponent = wrapper.find('.container-item-real-estate')
      .length
    expect(itemRealEstateComponent).toBe(1)
  })

  test('Testing itemsRealEstate more properties', () => {
    const itemsRealEstates = [
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
    ]

    const wrapper = shallow(
      <ItemRealEstate itemsRealEstate={itemsRealEstates} />,
    )
  })
})
