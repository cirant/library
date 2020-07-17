import React from 'react'
import { render } from '@testing-library/react'
import Logo from '.'

describe('Logo Component', () => {
  it('should be rendered', () => {
    const component = render(<Logo />)
    expect(component).toBeTruthy()
  })
})
