import React from 'react'
import { render } from '@testing-library/react'
import Loading from '.'

describe('Loading behavior', () => {
  it('should be rendered', () => {
    const component = render(<Loading />)
    expect(component).toBeTruthy()
    expect(
      component.container.querySelector('[data-theme="light"')
    ).toBeTruthy()
  })

  it('should be rendered as dark', () => {
    const component = render(<Loading dark />)
    expect(component).toBeTruthy()
    expect(component.container.querySelector('[data-theme="dark"')).toBeTruthy()
  })
})
