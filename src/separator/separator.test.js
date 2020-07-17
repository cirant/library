import React from 'react'
import { render } from '@testing-library/react'
import Separator from '.'

describe('Separator behavior', () => {
  it('should be rendered', () => {
    const component = render(<Separator />)
    expect(component).toBeTruthy()
    expect(
      component.container.querySelector('[data-direction="horizontal"')
    ).toBeTruthy()
  })

  it('should be rendered with vertical', () => {
    const component = render(<Separator vertical />)
    expect(component).toBeTruthy()
    expect(
      component.container.querySelector('[data-direction="vertical"')
    ).toBeTruthy()
  })
})
