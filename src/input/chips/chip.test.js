import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Chip from '.'


describe('Chip behavior', () => {

  it('should be rendered', () => {
    const onClose = jest.fn();
    const component = render(<Chip
      value="chip"
      onClose={onClose}
    />);
    expect(component).toBeTruthy();
    expect(component.getByText(/chip/)).toBeTruthy();
    fireEvent.click(component.container.querySelector('i'));
    expect(onClose).toBeCalled();
  });

  it('should be rendered as variant', () => {
    const onClose = jest.fn();
    const component = render(<Chip
      value="chip"
      variant={true}
      onClose={onClose}
    />);
    expect(component).toBeTruthy();
    const hasVariant = component.getByText(/chip/).closest('div').className.match(/variant/);
    expect(hasVariant).not.toBeNull();
    expect(component.getByText(/chip/)).toBeTruthy();
    fireEvent.click(component.container.querySelector('i'));
    expect(onClose).toBeCalled();
  });

  it('should be rendered as disabled', () => {
    const component = render(<Chip
      value="chip"
      variant={true}
      onClose={() => null}
      disabled
    />);
    expect(component).toBeTruthy();
    const isDisabled = component.getByText(/chip/).closest('div').className.match(/disabled/);
    expect(isDisabled).not.toBeNull();
    expect(component.getByText(/chip/)).toBeTruthy();
  });

  it('should be pressed', () => {
    const component = render(<Chip
      value="chip"
      onClose={() => null}
    />);
    expect(component).toBeTruthy();
    fireEvent.mouseDown(component.container.querySelector('i'));
    const isPressed = component.getByText(/chip/).closest('div').className.match(/pressed/);
    expect(isPressed).not.toBeNull();
    fireEvent.mouseUp(component.container.querySelector('i'));
    const classes = component.getByText(/chip/).closest('div').className.trim();
    expect(classes).toEqual('chip');
  });

});
