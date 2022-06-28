import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App'
import Section2 from './section2'
Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for the App component.
 *
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<Section2 />)

const findTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
  const wrapper = setup()

  const buttonComponent = findTestAttr(wrapper, 'increment-button')
  expect(buttonComponent.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()

  const counterComponent = findTestAttr(wrapper, 'counter-display')
  expect(counterComponent.length).toBe(1)
})

test('counter display starts at 0', () => {
  const wrapper = setup()
  const count = findTestAttr(wrapper, 'count').text()
  expect(count).toBe('0')
})

test('clicking button increments counter display', () => {
  //given
  const wrapper = setup()
  const button = findTestAttr(wrapper, 'increment-button')

  //when
  button.simulate('click')
  const count = findTestAttr(wrapper, 'count').text()
  //then
  expect(count).toBe('1')
})
Install related packages to use TypeScript