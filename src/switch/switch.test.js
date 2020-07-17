import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Switch from '.'

describe('Switch behavior', () => {
  it('should be rendered', () => {
    const onClick = jest.fn()
    const component = render(<Switch status onClick={onClick} />)
    fireEvent.click(component.container.querySelector('[data-status="on"]'))
    expect(component.container.querySelector('[data-status="on"]')).toBeTruthy()
    expect(component).toBeTruthy()
    expect(onClick).toBeCalled()
  })

  it('should be turned off', () => {
    const component = render(<Switch status={false} />)
    expect(
      component.container.querySelector('[data-status="off"]')
    ).toBeTruthy()
    expect(component).toBeTruthy()
  })
})
