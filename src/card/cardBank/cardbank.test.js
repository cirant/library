import React from 'react'
import { cleanup, render } from '@testing-library/react'
import CardBank from './index'
import Button from '../../buttons/'
import TestRenderer from 'react-test-renderer'

describe('CardBank Component behavior', () => {
  let component
  const onClickTest = jest.fn()

  beforeEach(() => {
    component = render(
      <CardBank
        title='Mastercard Debito'
        cardNumber='N°**** ***2345'
        buttons={[
          {
            label: 'Label text link',
            prefix: 'arrow-left',
            onClick: onClickTest
          },
          {
            label: 'Label text link',
            prefix: 'arrow-left',
            onClick: onClickTest
          }
        ]}
        cardType='debit'
      />
    )
  })

  afterEach(() => {
    cleanup()
  })

  test('should be rendered', () => {
    expect(component).toBeTruthy()
  })

  test('should content title card if it is defined', () => {
    expect(component.getByText(/2345/)).toBeTruthy()
  })

  test('should card gold must be render if cardType is gold', () => {
    const componentTest = render(
      <CardBank
        title='Mastercard Debito'
        cardNumber='N°**** ***2345'
        buttons={[
          {
            label: 'Label text link',
            prefix: 'arrow-left',
            onClick: onClickTest
          },
          {
            label: 'Label text link',
            prefix: 'arrow-left',
            onClick: onClickTest
          }
        ]}
        cardType='gold'
      />
    )
    expect(componentTest.getByRole('cardbank-prefix-gold')).toBeTruthy()
    expect(componentTest.getByRole('cardbank-suffix-gold')).toBeTruthy()
  })

  test('should card international must be render if cardType is international', () => {
    const componentTest = render(
      <CardBank
        title='Mastercard Debito'
        cardNumber='N°**** ***2345'
        buttons={[
          {
            label: 'Label text link',
            prefix: 'arrow-left',
            onClick: onClickTest
          },
          {
            label: 'Label text link',
            prefix: 'arrow-left',
            onClick: onClickTest
          }
        ]}
        cardType='international'
      />
    )
    expect(
      componentTest.getByRole('cardbank-prefix-international')
    ).toBeTruthy()
    expect(
      componentTest.getByRole('cardbank-suffix-international')
    ).toBeTruthy()
  })

  test('should component contain 2 button component', () => {
    const testRenderer = TestRenderer.create(
      <CardBank
        title='Mastercard Debito'
        cardNumber='N°**** ***2345'
        buttons={[
          {
            label: 'Label text link',
            prefix: 'arrow-left',
            onClick: onClickTest
          },
          {
            label: 'Label text link',
            prefix: 'arrow-left',
            onClick: onClickTest
          }
        ]}
        cardType='debit'
      />
    )
    const testInstance = testRenderer.root

    expect(testInstance.findAllByType(Button).length).toBe(2)
  })
})
