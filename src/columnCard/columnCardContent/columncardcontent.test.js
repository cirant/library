import React from 'react'
import { render } from '@testing-library/react'
import ColumnCardContent from '.'

describe('ColumnCardContent component behavior', () => {
  test('should be rendered', () => {
    const component = render(<ColumnCardContent> </ColumnCardContent>)
    expect(component).toBeTruthy()
  })

  test('should be contain title if have a title property defined ', () => {
    const component = render(
      <ColumnCardContent title='title'>
        <p>text</p>
      </ColumnCardContent>
    )
    expect(component.getByText(/title/)).toBeTruthy()
  })

  test('should be contain content if have a content property defined', () => {
    const component = render(<ColumnCardContent content='content' />)
    expect(component.getByText(/content/)).toBeTruthy()
  })
})
