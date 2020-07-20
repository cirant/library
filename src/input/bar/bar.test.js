import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Bar from '.'

describe('Bar behavior', () => {
  it('should be rendered', () => {
    const onChange = jest.fn()
    const component = render(<Bar value='100' onChange={onChange} />)
    const element = component.getByDisplayValue(/100/)

    expect(element.closest('input')).toBeTruthy()
    expect(component).toBeTruthy()
    expect(element).toBeTruthy()

    fireEvent.change(element, { target: { value: 'changed' } })

    expect(onChange).toBeCalled()
  })

  it('should be rendered with optional data', () => {
    const component = render(<Bar value='200' min='10' max='50' step='1' />)

    expect(component.container.querySelector('[min="10"')).toBeTruthy()
    expect(component.container.querySelector('[max="50"')).toBeTruthy()
    expect(component.container.querySelector('[step="1"')).toBeTruthy()
  })

  it('should be disabled', () => {
    const component = render(<Bar value='20' disabled />)
    const element = component.getByDisplayValue(/20/i)
    expect(element.closest('input').disabled).toBeTruthy()
  })
})
