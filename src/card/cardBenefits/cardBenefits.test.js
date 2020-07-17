import React from "react";
import { render } from '@testing-library/react';
import Component from '.'


describe('CardCheckbox behavior', () => {

  it('should be rendered', () => {
    const component = render(<Component />)
    expect(component).toBeTruthy();
  });

  it('should be rendered', () => {
    const component = render(<Component logo="f" />)
    expect(component.getByText('f')).toBeTruthy();
  });

  it('should be rendered with text', () => {
    const component = render(<Component
      topText="text top"
      title="Title"
      description="description"
    />)
    expect(component.getByText(/text top/)).toBeTruthy();
    expect(component.getByText('Title')).toBeTruthy();
    expect(component.getByText('description')).toBeTruthy();
  });

});
