import React from "react";
import { render, fireEvent } from '@testing-library/react';
import InputSelect from '.'


describe('InputSelect behavior', () => {

  it('should be rendered', () => {
    const onSelected = jest.fn();
    const options = [
      {
        prefix: 'line-user',
        text: 'placeholder',
        value: '',
        disabled: true
      },
      {
        prefix: 'line-user',
        text: 'option 1',
        value: '1'
      }
    ]
    const component = render(<InputSelect assistText="some text" onSelected={onSelected} options={options} />);
    const element = component.getByText(/placeholder/);
    expect(component.getByText(/some text/)).toBeTruthy();
    expect(element).toBeTruthy();
    fireEvent.click(component.getByRole('dropdown'));
    const option = component.getByText(/option 1/);
    expect(option).toBeTruthy();
    fireEvent.click(option.closest('div'));

    expect(onSelected).toBeCalled();
  });

  it('should be rendered with an option selected', () => {
    const options = [
      {
        prefix: 'line-user',
        text: 'option 1',
        value: '1'
      },
      {
        prefix: 'line-user',
        text: 'option 1',
        value: '2'
      }
    ]
    const component = render(<InputSelect label="some label" current="1" options={options} />);
    expect(component.getByText(/option 1/)).toBeTruthy();
    expect(component.getByText(/some label/)).toBeTruthy();
  });

  it('should be rendered with disabled disabled', () => {
    const options = [
      {
        prefix: 'line-user',
        text: 'option 1',
        value: '1'
      },
      {
        prefix: 'line-user',
        text: 'option 2',
        value: '2'
      }
    ]
    const component = render(<InputSelect current="1" disabled options={options} />);
    expect(component.getByRole('select').className).toEqual('inputContainer disabled');
    fireEvent.click(component.getByRole('dropdown'));
  });

  it('should be rendered with an invalid value', () => {
    const options = [
      {
        prefix: 'line-user',
        text: 'option 1',
        value: '1'
      }
    ]
    const component = render(<InputSelect current="3" options={options} />);
    expect(component.getByRole('empty')).toBeTruthy();
  });

})
