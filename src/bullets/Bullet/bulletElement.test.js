import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SidebarElement from '.'
import BulletElement from '.'


describe('Bullet behavior', () => {

  it('should be rendereds', () => {
    const props = {
      typeList: 'order',
      key: 1,
      items: [
        {
          text: 'Order Bullet text a',
          type: 'info'
        },
        {
          text: 'Order Bullet text b',
          type: 'info'
        }
      ]
    }
    const component = render(<BulletElement  {...props} />)
    expect(component).toBeTruthy()
    /*const element = component.getByText(/label A/)
    fireEvent.click(element)
    expect(onClick).toBeCalled()
    expect(element).toBeTruthy()
    expect(component.getAllByRole(/notification/)).toBeTruthy()
    expect(component.container.querySelector('[data-status=""]')).toBeTruthy()*/
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

  it('should be rendered with children opened', () => {
    const props = {
      text: 'label A',
      open: true,
      sublevel: [
        {
          text: 'label B'
        },
        {
          text: 'label B'
        }
      ]
    }

    const component = render(<SidebarElement {...props} />)
    expect(component.getAllByRole('component').length).toEqual(3)
  })

  it('should be rendered with children closed', () => {
    const props = {
      text: 'label A',
      open: false,
      sublevel: [
        {
          text: 'label B'

        }
      ]
    }

    const component = render(<SidebarElement {...props} />)
    expect(component.getAllByRole('component').length).toEqual(1)
  })

  it('should be rendered third level', () => {
    const props = {
      text: 'label A',
      open: true,
      sublevel: [
        {
          text: 'label B',
          open: true,
          sublevel: [
            {
              text: 'label C'
            }
          ]
        }
      ]
    }

    const component = render(<SidebarElement {...props} />)
    expect(component.getAllByRole('component').length).toEqual(3)
    expect(component.container.querySelector('[data-size="1"')).toBeTruthy()
  })

})
