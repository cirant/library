import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Bullets from './index'

describe('Bullet behavior', () => {

  const commonItems = [
    {
      text: 'Order Bullet text a',
      type: 'info'
    },
    {
      text: 'Order Bullet text b',
      type: 'info'
    }
  ];

  afterEach(() => {
    cleanup()
  })

  it('should be rendered', () => {
    const component = render(<Bullets typeList="order" items={[]}/>)
    expect(component).toBeTruthy()
  })

  it('should be rendered order list', () => {
    const component = render(<Bullets typeList="order" items={commonItems}/>)
    const orderBulletList = component.getAllByTestId('test-bullet-order')
    expect(orderBulletList).toBeTruthy()
  })

  it('should be rendered unorder list', () => {
    const component = render(<Bullets typeList="unorder" items={commonItems}/>)
    const unorderBulletList = component.getAllByTestId('test-bullet-unorder')
    expect(unorderBulletList).toBeTruthy()
  })

  it('should be rendered icons list', () => {
    const component = render(<Bullets typeList="icons" items={commonItems}/>)
    const unorderBulletList = component.getAllByTestId('test-bullet-icons')
    expect(unorderBulletList).toBeTruthy()
  })

  it('should be rendered icons list', () => {
    const component = render(<Bullets typeList="icons" items={[
      {
        text: 'Order Bullet text a',
        type: 'info'

      },
      {
        text: 'Order Bullet text b',
        type: 'info'
      }
    ]}/>)

    const unorderBulletList = component.getAllByTestId('test-bullet-icons')
    expect(unorderBulletList).toBeTruthy()
  })


})
