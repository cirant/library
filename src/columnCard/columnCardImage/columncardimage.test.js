import React from "react";
import { render } from '@testing-library/react';
import ColumnCardImage from './index'

describe('ColumnCardImage Component behavior', () => {

  test('should be rendered', () => {
    const component = render(<ColumnCardImage/>);
    expect(component).toBeTruthy();
  });

  test('should be rendered image div', () => {
    const component = render(<ColumnCardImage/>);
    expect(component.getByTestId('data-test-column-card-image')).toBeTruthy();
  });

});
