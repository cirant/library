import React from 'react'
import { render } from '@testing-library/react'
import Component from './'

describe('VoucherColumn tests', () => {
  test('Should render component', () => {
    const items = [
      { title: 'Label title 1', content: 'Label content 1' },
      { title: 'Label title 2', content: 'Label content 2' },
      { title: 'Label title 3', content: 'Label content 3' }
    ]

    const component = render(<Component items={items} />)

    expect(component.getByText(/Label title 1/)).toBeTruthy()
    expect(component.getByText(/Label content 1/)).toBeTruthy()

    expect(component.getByText(/Label title 2/)).toBeTruthy()
    expect(component.getByText(/Label content 2/)).toBeTruthy()

    expect(component.getByText(/Label title 3/)).toBeTruthy()
    expect(component.getByText(/Label content 3/)).toBeTruthy()
  })
})
