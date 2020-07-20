import React from 'react'
import { render } from '@testing-library/react'
import PublicFooterColumn from '.'

describe('PublicFooterColumn behavior', () => {
  test('should be rendered', () => {
    const component = render(<PublicFooterColumn> </PublicFooterColumn>)
    expect(component).toBeTruthy()
  })

  test('should be contain title if have a title property defined ', () => {
    const component = render(
      <PublicFooterColumn title='title'>
        <p>text</p>
      </PublicFooterColumn>
    )
    expect(component.getByText(/title/)).toBeTruthy()
  })
})
