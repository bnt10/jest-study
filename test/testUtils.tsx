import {ShallowWrapper} from 'enzyme'
import {Component} from 'react'

export const FindByTestAttr = (
  wrapper: ShallowWrapper<{}, {}, Component<{}, {}, any>>,
  val: string
) => {
  return wrapper.find(`[data-test="${val}"]`)
}
