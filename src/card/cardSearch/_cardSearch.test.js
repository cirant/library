import React from 'react'
import { render } from '@testing-library/react'
import Component from '.'

describe('Card Search behavior', () => {
  test('should be rendered', () => {
    const component = render(
      <Component
        onClick={() => null}
        title='some title'
        description='some description'
        routes={['route 1', 'route 4', 'route 3']}
      />
    )
    expect(component).toBeTruthy()
    expect(component.getByText(/some title/)).toBeTruthy()
    expect(component.getByText(/some description/)).toBeTruthy()
    expect(component.getAllByRole('route').length).toEqual(3)
  })
})
