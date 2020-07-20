import React from 'react'
import { render } from '@testing-library/react'
import VoucherTitle from './'
import TestRenderer from 'react-test-renderer'
import Button from '../../buttons'

const items = [
  [
    {
      label: 'Plazo',
      icon: 'line-write',
      action: () => console.log('plazo'),
      flex: 1
    },
    {
      label: 'Descargar',
      icon: 'line-download',
      action: () => console.log('descargar')
    }
  ]
]

describe('Voucher title tests', () => {
  test('Should rendered', () => {
    const componentTitle = render(
      <VoucherTitle title='Type some text' items={items} />
    )
    expect(componentTitle).toBeTruthy()
  })

  test('Should rendered correct title', () => {
    const componentTitle = render(
      <VoucherTitle title='Type some text' items={items} />
    )
    expect(
      componentTitle.container.querySelector('h4[data-testid="test-title"]')
        .innerHTML
    ).toBe('Type some text')
  })

  test('should component contain 2 buttons component', () => {
    const testRenderer = TestRenderer.create(
      <VoucherTitle title='Type some text' items={items} />
    )
    const testInstance = testRenderer.root

    expect(testInstance.findAllByType(Button).length).toBe(2)
  })
})
