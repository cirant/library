import React from 'react'
import { render } from '@testing-library/react'
import Component from './'

const items = {
  title: 'Label title',
  bullets: [
    {
      text: 'Order Bullet a',
      prefixType: 'info',
      contentType: 'success'
    },
    {
      text: 'Order Bullet b',
      prefixType: 'info',
      contentType: 'success'
    },
    {
      text: 'Order Bullet c',
      prefixType: 'info',
      contentType: 'success'
    }
  ]
}

describe('VoucherFooter tests', () => {
  test('Should render component unorder', () => {
    const component = render(
      <Component items={{ ...items, typeList: 'unorder' }} />
    )
    expect(component.getByText(items.title)).toBeTruthy()
    items.bullets.forEach((bullet) => {
      expect(component.getByText(bullet.text)).toBeTruthy()
    })
    expect(component.getAllByTestId('test-bullet-unorder').length).toEqual(
      items.bullets.length
    )
  })

  test('Should render component order', () => {
    const component = render(
      <Component items={{ ...items, typeList: 'order' }} />
    )
    items.bullets.forEach((bullet, index) => {
      expect(component.getByText(new RegExp(index + 1))).toBeTruthy()
      expect(component.getByText(bullet.text)).toBeTruthy()
    })
    expect(component.getAllByTestId('test-bullet-order').length).toEqual(
      items.bullets.length
    )
  })

  test('Should render component with breakColumn prop', () => {
    const component = render(
      <Component breakColumn='1' items={{ ...items, typeList: 'order' }} />
    )
    expect(component.getAllByText(/1/).length).toEqual(3)
  })
})
