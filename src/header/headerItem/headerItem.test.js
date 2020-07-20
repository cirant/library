import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import HeaderItem from '.'

describe('HeaderItem behavior', () => {
  it('should be rendered', () => {
    const onClick = jest.fn()
    const component = render(<HeaderItem onClick={onClick}> text </HeaderItem>)
    expect(component).toBeTruthy()

    const element = component.getByText(/text/)

    expect(element).toBeTruthy()

    fireEvent.click(element)
    expect(onClick).toBeCalled()
  })

  it('should be rendered with icon', () => {
    const component = render(<HeaderItem icon='cloud'> text </HeaderItem>)
    expect(component).toBeTruthy()
    expect(component.container.querySelector('[data-size="2"')).toBeTruthy()
  })
})
