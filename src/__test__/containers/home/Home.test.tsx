import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import Home from '../../../containers/home/Home'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}))

describe('Test Container', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f())
    wrapper = shallow(<Home />)
  })

  test('Testing container home', () => {
    const divHome = wrapper.find('.container-home').length
    expect(divHome).toBe(1)
  })
})
