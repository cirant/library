import React from 'react'
import { render } from '@testing-library/react'
import PublicFooter from '.'
import Logo from '.'

describe('PublicFooter behavior', () => {
  test('should be rendered icon', () => {
    const component = render(<PublicFooter logo={<Logo className='w-100' />} />)
    expect(component).toBeTruthy()
  })
})
