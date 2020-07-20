import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Component from './'

describe('Modal Info behavior', () => {
  it('should be rendered text', () => {
    const component = render(
      <Component title='title' description='description' />
    )
    expect(component.getByText('title')).toBeTruthy()
    expect(component.getByText('description')).toBeTruthy()
  })

  it('should be rendered button', () => {
    const onClick = jest.fn()
    const component = render(
      <Component
        button={{
          text: 'button',
          action: onClick
        }}
      />
    )

    const button = component.getByText(/button/)
    fireEvent.click(button)
    expect(button).toBeTruthy()
    expect(onClick).toBeCalled()
  })
})
