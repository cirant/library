import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Input from '.'

describe('Input behavior', () => {
  it('should be rendered', () => {
    const onChange = jest.fn()
    const component = render(<Input value={12} onChange={onChange} />)
    const element = component.getByDisplayValue(/12/)
    expect(element.closest('input')).toBeTruthy()
    expect(component).toBeTruthy()
    expect(element).toBeTruthy()
    fireEvent.change(element, { target: { value: '123' } })
    expect(onChange).toBeCalled()
  })

  it('should be block enter strings', () => {
    const onChange = jest.fn()
    const component = render(<Input value={0} onChange={onChange} />)
    const element = component.getByDisplayValue(/0/)
    expect(element.closest('input')).toBeTruthy()
    expect(component).toBeTruthy()
    expect(element).toBeTruthy()
    fireEvent.change(element, { target: { value: '123f' } })
    expect(onChange).not.toBeCalled()
  })

  it('should check buttons actions', () => {
    const onChange = jest.fn()
    const component = render(<Input value={0} onChange={onChange} />)
    fireEvent.click(component.getByRole('minus-btn'))
    fireEvent.click(component.getByRole('plus-btn'))
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  it('should be disabled', () => {
    const component = render(<Input value='0' disabled />)
    const element = component.getByDisplayValue(/0/i)
    expect(element.closest('input').disabled).toBeTruthy()
  })
})
