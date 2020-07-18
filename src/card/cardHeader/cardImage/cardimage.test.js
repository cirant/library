import React from "react";
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer'
import CardImage from './index'


describe('Card Component', () => {

  test('should be rendered', () => {
    const component = render(<CardImage imgUrl=''/>);
    expect(component).toBeTruthy();
  });

  test('should component contain img', () => {
    const component = render(<CardImage imgUrl=''/>);
    expect(component.container.querySelector('img')).toBeTruthy();

  });

});
