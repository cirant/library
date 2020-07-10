import React from "react";
import { render, fireEvent, cleanup } from '@testing-library/react';
import Input from '.'


describe('Input behavior', () => {

  it('should be rendered', () => {
    const onChange = jest.fn();
    const onSecurityClick = jest.fn();
    const component = render(<Input value="defaul" onChange={onChange} onSecurityClick={onSecurityClick} />);
    expect(component).toBeTruthy();

    const element = component.getByDisplayValue(/defaul/);
    expect(element.closest('input').type).toEqual('password');

    fireEvent.change(element, { target: { value: '123' } });
    expect(onChange).toBeCalled();

    const icon = component.getByRole('show');
    expect(icon.className.match(/icon-eye-open/)).not.toBeNull();
    fireEvent.click(icon);
    expect(onSecurityClick).toBeCalled();
  });

  it('should be rendered with label', () => {
    const component = render(<Input value="" label="a label" />);
    expect(component).toBeTruthy();
    expect(component.getByText(/a label/)).toBeTruthy();
  });

  it('should be rendered with security false', () => {
    const component = render(<Input value="defaul" security={false} />);
    expect(component).toBeTruthy();

    const element = component.getByDisplayValue(/defaul/);
    expect(element.closest('input').type).toEqual('text');

    const icon = component.getByRole('show');
    expect(icon.className.match(/icon-eye-close/)).not.toBeNull();
  });

})

describe('pregressbar behavior', () => {
  afterEach(cleanup);
  [
    { value: 'invalid', text: '' },
    { value: 'none', text: 'Ninguna' },
    { value: 'low', text: 'Bajo' },
    { value: 'middle', text: 'Medio' },
    { value: 'high', text: 'Alto' }
  ].forEach(element => {
    it(`should validate progress bar ${element.value}`, () => {
      const reg = new RegExp(`Nivel de seguridad: ${element.text}.`);
      const component = render(<Input strength={element.value} />);
      expect(component).toBeTruthy();
      expect(component.getByText(reg)).toBeTruthy();
      const progressBar = component.getByRole('progressBar');
      expect(progressBar.className).toEqual(`progressBar ${element.value}`)
    });
  })
});
