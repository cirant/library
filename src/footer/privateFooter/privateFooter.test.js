import React from 'react'
import { render } from '@testing-library/react'
import PrivateFooter from '.'

describe('PrivateFooter behavior', () => {
  it('should be rendered basic component', () => {
    const component = render(<PrivateFooter />)
    expect(component).toBeTruthy()
  })

  test('should be rendered component with items', () => {
    const items = [
      { link: 'link 1', text: 'Text 1' },
      { link: 'link 2', text: 'Text 2' },
      { link: 'link 3', text: 'Text 3' }
    ]

    const component = render(<PrivateFooter items={items} />)

    expect(component).toBeTruthy()
    expect(component.getByText(/Text 1/)).toBeTruthy()
    expect(component.getByText(/Text 2/)).toBeTruthy()
    expect(component.getByText(/Text 3/)).toBeTruthy()
  })
})
