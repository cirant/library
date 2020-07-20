import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import TagLink from '.'

describe('TagLink component behavior', () => {

  let component;
  const onClick = jest.fn()

  beforeEach(() => {
    component= render(
      <TagLink
        label='Label link text'
        onClick={onClick}/>
    )
  })

  afterEach(() => {
    cleanup()
  })

  test('should be rendered', () => {
    expect(component).toBeTruthy()
  })

  test('should contain proper text', () => {
    expect(component.getByText(/Label link text/)).toBeTruthy()
  })

  test('should function click must be called', () => {
    const componentTest = component.getByTestId('test-taglink')
    fireEvent.click(componentTest);
    expect(onClick).toBeCalled()
  })

})
