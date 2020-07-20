import React from 'react'
import { render } from '@testing-library/react'
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
    const component = render(
      <Component
        buttons={[
          <button key='1'>button 1</button>,
          <button key='2'>button 2</button>
        ]}
      />
    )

    expect(component.getByText(/button 1/)).toBeTruthy()
    expect(component.getByText(/button 2/)).toBeTruthy()
  })

  it('should be rendered image', () => {
    const component = render(<Component image={<div>h</div>} />)
    expect(component.getByText('h')).toBeTruthy()
  })
})
