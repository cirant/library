import React from "react";
import { render } from '@testing-library/react';
import CardImage from './index'


describe('Card Component', () => {

  test('should be rendered', () => {
    const component = render(<CardImage/>);
    expect(component).toBeTruthy();
  });

  test('should be rendered', () => {
    const component = render(<CardImage/>);
    expect(component).toBeTruthy();
  });

});
