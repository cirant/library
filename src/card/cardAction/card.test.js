import React from "react";
import { render } from '@testing-library/react';
import Card from '.'


describe('Card Component', () => {

  it('should be rendered', () => {
    const component = render(<Card border> hola </Card>);
    expect(component).toBeTruthy();
  });

});
