import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputPhone from '.'
import contiesList from './_contiesList'

describe('Input behavior', () => {
  it('should be rendered', () => {
    const onChange = jest.fn()
    const component = render(
      <InputPhone value='234' onChange={onChange} onCodeChange={() => null} />
    )
    expect(component).toBeTruthy()
    expect(component.getByText(/\+56/)).toBeTruthy()

    const element = component.getByDisplayValue(/234/)
    expect(element.closest('input')).toBeTruthy()
    fireEvent.change(element, { target: { value: '12' } })
    expect(onChange).toBeCalled()
  })

  it('should be allow numbers', () => {
    const onChange = jest.fn()
    const component = render(
      <InputPhone value='123' onChange={onChange} onCodeChange={() => null} />
    )
    const element = component.getByDisplayValue(/123/)
    fireEvent.change(element, { target: { value: '12f' } })
    expect(onChange).not.toBeCalled()
  })

  it('should be rendered with optional data', () => {
    const component = render(
      <InputPhone
        value={2}
        label='label name'
        maxLength='10'
        assistText='example text'
        onChange={() => null}
        onCodeChange={() => null}
      />
    )
    expect(component.getByText(/label name/)).toBeTruthy()
    expect(component.getByText(/example text/)).toBeTruthy()
  })

  it('should be show as disabled', () => {
    const component = render(
      <InputPhone
        value={123}
        disabled
        onChange={() => null}
        onCodeChange={() => null}
      />
    )
    const element = component.getByDisplayValue(/123/i)
    fireEvent.click(component.getByText(/\+56/))
    expect(element.closest('input').disabled).toBeTruthy()
  })

  it('should be render a code value', () => {
    const component = render(
      <InputPhone
        value=''
        onChange={() => null}
        onCodeChange={() => null}
        code={2}
      />
    )
    expect(component.getByText(/\+2/)).toBeTruthy()
  })

  it('should be change code value', () => {
    const onCodeChange = jest.fn()
    const component = render(
      <InputPhone
        value={123}
        onChange={() => null}
        onCodeChange={onCodeChange}
        code={2}
      />
    )
    fireEvent.click(component.getByText(/\+2/))
    expect(component.getAllByRole('region').length).toEqual(contiesList.length)
    const option = component.getByText(/Celular/)
    fireEvent.click(option.closest('div'))
    expect(onCodeChange).toBeCalled()
  })

  it('should have success state', () => {
    const component = render(
      <InputPhone
        value={123}
        onChange={() => null}
        onCodeChange={() => null}
        success
        assistText={[
          {
            type: 'success',
            text: 'success text'
          }
        ]}
      />
    )

    expect(component.getByTestId('successIcon')).toBeTruthy()
    expect(component.getByText(/success text/)).toBeTruthy()
  })

  it('should have error state', () => {
    const component = render(
      <InputPhone
        value={1}
        onChange={() => null}
        onCodeChange={() => null}
        error
        success // in this case error has priority
        assistText={[
          {
            type: 'error',
            text: 'error text'
          }
        ]}
      />
    )

    expect(component.getByTestId('errorIcon')).toBeTruthy()
    expect(component.getByText(/error text/)).toBeTruthy()
  })

  it('should have multiple assistTexts', () => {
    const component = render(
      <InputPhone
        value={1}
        onChange={() => null}
        onCodeChange={() => null}
        error
        success // in this case error has priority
        assistText={[
          {
            type: 'error',
            text: 'error text'
          },
          {
            type: 'error',
            text: 'error text'
          },
          {
            type: 'success',
            text: 'success text'
          },
          {
            type: 'assist',
            text: 'defaul text'
          }
        ]}
      />
    )

    expect(component.getAllByTestId('errorIcon').length).toEqual(2)
    expect(component.getAllByText(/error text/).length).toEqual(2)
    expect(component.getByTestId('successIcon')).toBeTruthy()
    expect(component.getByText(/success text/)).toBeTruthy()
    expect(component.getByText(/defaul text/)).toBeTruthy()
  })
})
