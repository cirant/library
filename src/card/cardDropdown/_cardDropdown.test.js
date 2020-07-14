import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Component from '.'


describe('CardDropdown behavior', () => {

  it('should be rendered', () => {
    const onClick = jest.fn();
    const component = render(<Component onClick={onClick} />)
    expect(component).toBeTruthy();
    fireEvent.click(component.getByRole('action'));
    expect(onClick).toBeCalled();
  });

  it('should be rendered with text', () => {
    const component = render(<Component
      opened={true}
      title='Label'
      description='description'
    >
      some content
    </Component>)
    expect(component.getByText(/some content/)).toBeTruthy();
    expect(component.getByText('Label')).toBeTruthy();
    expect(component.getByText('description')).toBeTruthy();
  });

  it('should be disabled', () => {
    const onClick = jest.fn();
    const component = render(<Component disabled onClick={onClick} />)
    expect(component).toBeTruthy();
    fireEvent.click(component.getByRole('action'));
    expect(onClick).not.toBeCalled();
  });

  it('should be rendered in dark mode', () => {
    const component = render(<Component dark />)
    expect(component.getByRole('dropdown').className).toEqual('dropdown dark');
  });


});
