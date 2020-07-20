import React from 'react'
import { cleanup, render } from '@testing-library/react'
import TestRenderer from 'react-test-renderer'
import ActionLink from './index'
import Icon from '../icons'

describe('ActionLink Component behavior', () => {

  let component

  beforeEach(() => {
    component = render(
      <ActionLink icon='line-unlock' label='Lock' />
    )
  })

  afterEach(() => {
    cleanup()
  })

  test('should be rendered', () => {
    expect(component).toBeTruthy()
  })

  test('should component contain icon component', () => {
    const testRenderer = TestRenderer.create(
      <ActionLink icon='line-unlock' label='Lock' />
    )
    const testInstance = testRenderer.root

    expect(testInstance.findByType(Icon)).toBeTruthy()
  })

  test('should component contain expect label', () => {
    expect(component.getByText(/Lock/)).toBeTruthy()
  })

})
