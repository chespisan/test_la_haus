import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Header from '../../../components/header/Header'

describe('Test component', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  test('Testing render component Header', () => {
    const headerComponent = wrapper.find('.header').length
    expect(headerComponent).toBe(1)
  })

  test('Testing method handleShowMenu', () => {
    const button = wrapper.find('.button-menu')
    button.simulate('click')
    expect(button.length).toBe(1)
  })
})
