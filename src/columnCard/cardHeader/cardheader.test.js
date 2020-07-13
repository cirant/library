import React from "react";
import { render } from '@testing-library/react';
import CardHeader from '.'
import CardActions from '../columnCardContent/columnCardContentAction'


describe('Card Header behavior', () => {

  test('should be rendered', () => {
    const component = render(<CardHeader> </CardHeader>);
    expect(component).toBeTruthy();
  });

  test('should be contain node if have a children', () => {

    const component = render(<CardHeader><p>text</p></CardHeader>)
    expect(component.getByText(/text/)).toBeTruthy()

  })

});
