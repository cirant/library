import React from 'react'
import { render, cleanup } from '@testing-library/react'
import BulletElement from '.'


describe('Bullet behavior', () => {

  afterEach(() => {
    cleanup();
  })

  it('should be render order list', () => {
    const props = {
      typeList: 'order',
      key: 1,
      text: 'Order Bullet text a',
    }
    const component = render(<BulletElement  {...props} />)
    const orderList = component.getAllByTestId(`test-bullet-${props.typeList}`);
    expect(orderList).toBeTruthy()
  })

  it('should be render unorderlist', () => {
    const props = {
      typeList: 'unorder',
      key: 1,
      text: 'Order Bullet text a',
      disabled: true
    }
    const component = render(<BulletElement  {...props} />)
    const unOrderList = component.getAllByTestId(`test-bullet-${props.typeList}`);
    expect(unOrderList).toBeTruthy()
  })

  it('should be render iconslist', () => {
    const props = {
      typeList: 'icons',
      key: 1,
      text: 'Order Bullet text a',

    }
    const component = render(<BulletElement tpyeList="icons"  {...props} />)
    const iconList = component.getAllByTestId(`test-bullet-${props.typeList}`);
    expect(iconList).toBeTruthy()
  })

  it('should prefix bullet must render when it is a order list', () => {
    const props = {
      typeList: 'order',
      count: 0,
      text: 'Order Bullet text a',
    }
    const component = render(<BulletElement tpyeList={`${props.typeList}`} {...props} />)
    const prefixContainer = component.getAllByTestId(`test-prefix-bullet-${props.typeList}`);
    expect(prefixContainer).toBeTruthy();
  })

  it('should prefix bullet must render its a unorder list', () => {
    const props = {
      typeList: 'unorder',
      text: 'Order Bullet text a',
      type: 'warning'
    }
    const component = render(<BulletElement tpyeList={`${props.typeList}`} {...props} />)
    const prefixContainer = component.getAllByTestId(`test-prefix-bullet-${props.typeList}`);
    expect(prefixContainer).toBeTruthy();
  })

  it('should prefix bullet must render its a icons list', () => {
    const props = {
      typeList: 'icons',
      text: 'Icon Bullet text a',
      prefixType: 'info',
      contentType: 'info',
      icon: 'line-write',
    }
    const component = render(<BulletElement tpyeList={`${props.typeList}`} {...props} />)
    const prefixContainer = component.getAllByTestId(`test-prefix-bullet-${props.typeList}`);
    expect(prefixContainer).toBeTruthy();
  })

  it('should order list contain number', () => {
    const props = {
      typeList: 'order',
      count: 0,
      text: 'Order Bullet text a',
    }
    const component = render(<BulletElement tpyeList="order"  {...props} />)
    const prefixContainer = component.getByTestId("test-bullet-order").closest('div').className.match(/bulletElement/);
    expect(prefixContainer).toBeTruthy();
  })

  it('should order list contain text', () => {
    const props = {
      typeList: 'order',
      count: 0,
      text: 'Order Bullet text a',
    }
    const component = render(<BulletElement tpyeList="order"  {...props} />)
    const p = component.container.querySelector("p")
    expect(component.getByText(/Order Bullet text a/)).toBeTruthy();
  })




})
