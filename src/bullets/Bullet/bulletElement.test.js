import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SidebarElement from '.'
import BulletElement from '.'


describe('Bullet behavior', () => {

  it('should be render order lisst', () => {
    const props = {
      typeList: 'order',
      key: 1,
      text: 'Order Bullet text a',
    }
    const component = render(<BulletElement  {...props} />)
    const orderlist = component.getAllByTestId(`test-bullet-${props.typeList}`);
    expect(orderlist).toBeTruthy()
  })

  it('should be render unorderlist', () => {
    const props = {
      typeList: 'order',
      key: 1,
      text: 'Order Bullet text a',
    }
    const component = render(<BulletElement  {...props} />)
    const unorderlist = component.getAllByTestId(`test-bullet-${props.typeList}`);
    expect(unorderlist).toBeTruthy()
  })

  it('should be render iconslist', () => {
    const props = {
      typeList: 'icons',
      key: 1,
      text: 'Order Bullet text a',

    }
    const component = render(<BulletElement  {...props} />)
    const unorderlist = component.getAllByTestId(`test-bullet-${props.typeList}`);
    expect(unorderlist).toBeTruthy()
  })

  it('should be rendered active', () => {
    const props = {
      text: 'label A',
      active: true
    }

    const component = render(<SidebarElement {...props} />)
    expect(component).toBeTruthy()
    expect(component.container.querySelector('[data-status="active"]')).toBeTruthy()
  })


})
