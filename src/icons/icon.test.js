import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Icon from '.'

describe('Icon behavior', () => {
  it('should be rendered', () => {
    const onClick = jest.fn()
    const component = render(
      <Icon name='line-cloud' onClick={onClick} size={8} />
    )
    expect(component).toBeTruthy()
    expect(component.container.querySelector('[data-size="8"')).toBeTruthy()
    fireEvent.click(component.container.querySelector('i'))
    expect(onClick).toBeCalled()
  })

  it('should be rendered 2', () => {
    const component = render(<Icon name='line-cloud' size={12} />)
    expect(component).toBeTruthy()

    expect(component.container.querySelector('[data-size="1"')).toBeTruthy()
  })
})
