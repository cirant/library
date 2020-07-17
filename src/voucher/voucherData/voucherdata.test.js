import React from 'react'
import { render } from '@testing-library/react'
import VoucherData from './'

describe('VoucherData tests', () => {
  test('Should render component', () => {
    const component = render(<VoucherData items={[]} />)
    expect(component).toBeTruthy()
  })

  test('Should render with elements', () => {
    const options = [
      {
        title: 'Label 1',
        items: [
          { label: 'Item lavel 1:', content: 'item content 1' },
          { label: 'Item lavel 2:', content: 'item content 2' }
        ]
      },
      {
        title: 'Label 2',
        items: [
          { label: 'Item lavel 3:', content: 'item content 3' },
          { label: 'Item lavel 4:', content: 'item content 4' },
          { label: 'Item lavel 5:', content: 'item content 5' }
        ]
      }
    ]
    const component = render(<VoucherData items={options} />)
    expect(component).toBeTruthy()
    expect(component.getAllByRole('voucherSection').length).toEqual(2)
    expect(component.getByText(/Label 1/)).toBeTruthy()
    expect(component.getByText(/Item lavel 1/)).toBeTruthy()
    expect(component.getByText(/item content 1/)).toBeTruthy()
    expect(component.getByText(/Item lavel 2/)).toBeTruthy()
    expect(component.getByText(/item content 2/)).toBeTruthy()

    expect(component.getByText(/Label 2/)).toBeTruthy()
    expect(component.getByText(/Item lavel 3/)).toBeTruthy()
    expect(component.getByText(/item content 3/)).toBeTruthy()
    expect(component.getByText(/Item lavel 4/)).toBeTruthy()
    expect(component.getByText(/item content 4/)).toBeTruthy()
    expect(component.getByText(/Item lavel 5/)).toBeTruthy()
    expect(component.getByText(/item content 5/)).toBeTruthy()
    expect(component.getAllByRole('voucherSectionItem').length).toEqual(5)
  })
})
