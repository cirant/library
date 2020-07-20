import React from 'react'
import { render } from '@testing-library/react'
import Component from '.'

describe('Search result behavior', () => {
  test('should be rendered', () => {
    const component = render(<Component target='some seach' />)
    expect(component.getByText(/some seach/)).toBeTruthy()
  })
})
