import React from "react";
import { render } from '@testing-library/react';
import CardImage from './index'


describe('CardImage Component behavior', () => {

  test('should be rendered', () => {
    const component = render(<CardImage imgUrl=''/>);
    expect(component).toBeTruthy();
  });

  test('should component contain img', () => {
    const component = render(<CardImage imgUrl=''/>);
    expect(component.container.querySelector('img')).toBeTruthy();
  });

});
