import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Radio from '.'

describe('Radio behavior', () => {
  it('should be rendered inactive', () => {
    const onClick = jest.fn()
    const component = render(<Radio onChange={onClick} checked={false} />)
    expect(component).toBeTruthy()
    const element = component.getByTestId('radio')
    expect(element.checked).toBeFalsy()

    fireEvent.click(element)
    expect(onClick).toBeCalled()
  })

  it('should be rendered active', () => {
    const component = render(<Radio checked />)
    expect(component).toBeTruthy()

    const element = component.getByTestId('radio')
    expect(element.checked).toBeTruthy()
  })

  it('should be disabled and without click', () => {
    const component = render(<Radio disabled checked={false} />)

    expect(component).toBeTruthy()
    const element = component.getByTestId('radio')
    expect(element.disabled).toBeTruthy()
  })
})
