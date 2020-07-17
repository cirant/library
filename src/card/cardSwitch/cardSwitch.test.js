import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Component from '.'

describe('cardSwitch behavior', () => {
  it('should be rendered', () => {
    const onClick = jest.fn()
    const component = render(<Component onClick={onClick} />)
    expect(component).toBeTruthy()
    fireEvent.click(component.getByRole('switch'))
    expect(onClick).toBeCalled()
  })

  it('should be rendered with text', () => {
    const component = render(
      <Component
        cardname='martercard'
        title='main title'
        footerTitle='label strong'
        footerText='some text'
      />
    )
    expect(component.getByRole('logocard')).toBeTruthy()
    expect(component.getByText(/main title/)).toBeTruthy()
    expect(component.getByText(/label strong/)).toBeTruthy()
    expect(component.getByText(/some text/)).toBeTruthy()
  })
})
