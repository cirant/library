import React from 'react'
import { render } from '@testing-library/react'
import NotificationBadge from './index'

describe('Notification Badge tests', () => {
  test('should be rendered', () => {
    const component = render(<NotificationBadge />)
    expect(component).toBeTruthy()
  })

  test('should component contain expect label', () => {
    const expectResult = '999'

    const component = render(<NotificationBadge content={999} />)
    expect(component.getByText(/999/).textContent).toBe(expectResult)
  })
})
