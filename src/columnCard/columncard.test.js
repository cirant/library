import React from 'react'
import { render } from '@testing-library/react'
import ColumnCard from '.'

describe('ColumnCard Component behavior', () => {

  it('should be rendered', () => {
    const component = render(<ColumnCard border> test </ColumnCard>)
    expect(component).toBeTruthy()
  })
})
