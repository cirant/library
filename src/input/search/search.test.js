import React from "react";
import { render, fireEvent } from '@testing-library/react';
import InputSearch from '.'


describe('InputSearch behavior', () => {

  it('should be rendered', () => {
    const onChange = jest.fn();
    const component = render(<InputSearch value="some text" onChange={onChange} />);
    const element = component.getByDisplayValue(/some text/);

    expect(element.closest('input')).toBeTruthy();
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();

    expect(component.getByRole('search-icon')).toBeTruthy();
    expect(component.getByRole('cross-icon')).toBeTruthy();
    expect(component.getByRole('filter-icon')).toBeTruthy();

    fireEvent.change(element, { target: { value: 'changed' } });

    expect(onChange).toBeCalled();
  });

  it('should be rendered with label', () => {
    const component = render(<InputSearch label="label name" />);
    expect(component.getByText(/label name/)).toBeTruthy();
  });

  it('should be disabled', () => {
    const component = render(<InputSearch value="some text" disabled />);
    const element = component.getByDisplayValue(/some text/i);
    expect(element.closest('input').disabled).toBeTruthy();
  });

})
