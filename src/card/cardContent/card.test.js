import React from "react";
import { render } from '@testing-library/react';
import CardContent from '.'


describe('Card Content behavior', () => {

  test('should be rendered', () => {
    const component = render(<CardContent> </CardContent>);
    expect(component).toBeTruthy();
  });

  test('should be contain node if have a children', () => {
    const component = render(<CardContent> <p>text</p></CardContent>);
    expect(component.getByText(/text/)).toBeTruthy()
  });

  test('should be contain title if it´s defined', () => {
    const component = render(<CardContent title='test'>></CardContent>);
    expect(component.getByText(/test/)).toBeTruthy()
  });

  test('should be contain content if it´s defined', () => {
    const component = render(<CardContent content='test content'>></CardContent>);
    expect(component.getByText(/test content/)).toBeTruthy()
  });

});
