import React from 'react'
import { render } from '@testing-library/react'
import ColumnCardContentActions from './index'
import TestRenderer from 'react-test-renderer'
import Button from '../../../buttons'

describe('ColumnCardContentActions component behavior', () => {
  const onClick = jest.fn()

  test('should be rendered', () => {
    const component = render(<ColumnCardContentActions />)
    expect(component).toBeTruthy()
  })

  test('should be contain button if button array it is declared', () => {
    const testRenderer = TestRenderer.create(
      <ColumnCardContentActions
        buttons={[
          {
            color: 'primary',
            label: 'Button',
            onClick: onClick
          },
          {
            color: 'primary',
            label: 'Button',
            onClick: onClick
          }
        ]}
      />
    )
    const testInstance = testRenderer.root
    expect(testInstance.findAllByType(Button).length).toBe(2)
  })

  test('should be contain node if have a children', () => {
    const component = render(
      <ColumnCardContentActions>
        <p>text</p>
      </ColumnCardContentActions>
    )
    expect(component.getByText(/text/)).toBeTruthy()
  })
})
