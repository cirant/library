import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from '.'

describe('Button behavior', () => {
  it('should be rendered', () => {
    const onClick = jest.fn()
    const component = render(
      <Button color='primary' onClick={onClick}>
        {' '}
        a button{' '}
      </Button>
    )
    fireEvent.click(component.getByText(/a button/))
    expect(component).toBeTruthy()
    expect(onClick).toBeCalled()
  })

  it('should be disabled', () => {
    const onClick = jest.fn()
    const component = render(
      <Button color='primary' onClick={onClick} disabled>
        {' '}
        a button{' '}
      </Button>
    )
    fireEvent.click(component.getByText(/a button/))
    expect(component).toBeTruthy()
    expect(onClick).not.toBeCalled()
  })

  it('should be render prefix', () => {
    const component = render(
      <Button color='primary' prefix='home'>
        {' '}
        a button{' '}
      </Button>
    )
    expect(component.container.querySelector('[data-size="2"')).toBeTruthy()
  })

  it('should be render suffix', () => {
    const component = render(
      <Button color='primary' suffix='home'>
        {' '}
        a button{' '}
      </Button>
    )
    expect(component.container.querySelector('[data-size="2"')).toBeTruthy()
  })

  it('should be render variant text', () => {
    const component = render(
      <Button color='primary' variant='text'>
        {' '}
        a button{' '}
      </Button>
    )
    expect(component.getByText(/a button/)).toBeTruthy()
  })

  it('should be render variant text with icon ', () => {
    const component = render(
      <Button color='primary' variant='text' prefix='home'>
        {' '}
        a button{' '}
      </Button>
    )
    expect(component.getByText(/a button/)).toBeTruthy()
  })
})
