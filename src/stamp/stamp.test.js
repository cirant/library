import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Stamp from './index'

describe('Stamp tests', () => {
  let component

  beforeEach(() => {
    component = render(<Stamp />)
  })

  afterEach(() => {
    cleanup()
  })

  test('should be rendered', () => {
    expect(component).toBeTruthy()
  })

  test('should component content a svg', () => {
    const element = component.container.querySelector('svg')
    expect(element).toBeTruthy()
  })
})
