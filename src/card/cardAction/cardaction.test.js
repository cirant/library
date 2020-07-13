import React from 'react'
import { render } from '@testing-library/react'
import CardActions from '.'
import TestRenderer from 'react-test-renderer'
import Button from '../../buttons'


describe('Card Action behavior', () => {

  const onClick = jest.fn()

  test('should be rendered', () => {
    const component = render(<CardActions></CardActions>)
    expect(component).toBeTruthy()
  })

  test('should be contain button if button array it is declared', () => {

    const testRenderer = TestRenderer.create(
      <CardActions
        buttons={
          [
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
          ]}>

      </CardActions>)
    const testInstance = testRenderer.root
    expect(testInstance.findAllByType(Button).length).toBe(2)

  })

  test('should be contain node if have a children', () => {

    const component = render(<CardActions><p>text</p></CardActions>)
    expect(component.getByText(/text/)).toBeTruthy()

  })


})
