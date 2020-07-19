import React from "react";
import { render } from '@testing-library/react';
import CardImage from './index'


describe('CardImage Component behavior', () => {

  test('should be rendered', () => {
    const component = render(<CardImage imgUrl=''/>);
    expect(component).toBeTruthy();
    expect(component.container.querySelector('img')).toBeTruthy();
  });

  test('should component contain the img url and alt propers texts', () => {
    const component = render(<CardImage imgUrl='image.png' alt='description for image'/>);
    expect(component.container.querySelector("img[src='image.png']")).toBeTruthy()
    expect(component.container.querySelector("img[alt='description for image']")).toBeTruthy()

  });

});
