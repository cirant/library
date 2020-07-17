import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Checkbox from '.'

describe('Checkbox behavior', () => {
  it('should be rendered inactive', () => {
    const onClick = jest.fn()
    const component = render(<Checkbox onChange={onClick} checked={false} />)
    expect(component).toBeTruthy()
    const element = component.getByTestId('checkbox')
    expect(element.checked).toBeFalsy()

    const icon = component.getByTestId('checked-inactive')
    expect(icon).toBeTruthy()

    fireEvent.click(element)
    expect(onClick).toBeCalled()
  })

  it('should be rendered active', () => {
    const component = render(<Checkbox checked />)
    expect(component).toBeTruthy()

    const element = component.getByTestId('checkbox')
    expect(element.checked).toBeTruthy()

    const icon = component.getByTestId('checked-active')
    expect(icon).toBeTruthy()
  })

  it('should be rendered variant active', () => {
    const component = render(<Checkbox checked variant />)
    expect(component).toBeTruthy()

    const element = component.getByTestId('checkbox')
    expect(element.checked).toBeTruthy()

    const icon = component.getByTestId('checked-variant-active')
    expect(icon).toBeTruthy()
  })

  it('should be rendered variant inactive', () => {
    const component = render(<Checkbox checked={false} variant />)
    expect(component).toBeTruthy()

    const element = component.getByTestId('checkbox')
    expect(element.checked).toBeFalsy()

    const icon = component.getByTestId('checked-variant-inactive')
    expect(icon).toBeTruthy()
  })

  it('should be disabled and without click', () => {
    const component = render(<Checkbox disabled checked={false} />)

    expect(component).toBeTruthy()
    const element = component.getByTestId('checkbox')
    expect(element.disabled).toBeTruthy()
  })
})
