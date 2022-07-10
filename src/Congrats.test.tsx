import {shallow, ShallowWrapper} from 'enzyme'

import {FindByTestAttr} from '../test/testUtils'
import Congrats from './section3/Congrats'
import {Component} from 'react'

interface setupProps {
  success?: boolean
}
const setup = (
  props: setupProps = {}
): ShallowWrapper<{}, {}, Component<{}, {}, any>> => {
  return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const component = FindByTestAttr(wrapper, 'component-congrats')

  expect(component.length).toBe(1)
})

test('renders no text when  `success prop is false', () => {
  const wrapper = setup({success: false})
  const component = FindByTestAttr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})

test('renders non-empty congrats message when `success props is true', () => {
  const wrapper = setup({success: true})
  const component = FindByTestAttr(wrapper, 'component-message')
  expect(component.text()).toBe('congrats')
})
