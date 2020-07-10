import React from "react";
import { render, fireEvent } from '@testing-library/react';
import HeaderProfileItem from '.'


describe('HeaderProfileItem behavior', () => {

  it('should be rendered', () => {
    const today = new Date();
    const onClick = jest.fn();
    const component = render(<HeaderProfileItem
      onClick={onClick}
      name='user name'
      date={today}
    />);
    expect(component).toBeTruthy();
    const name = component.getByText(/user name/);
    const dateText = component.getByText(/acceso/i);
    const circleText = component.getByText(/us/i);

    expect(name).toBeTruthy();
    expect(dateText).toBeTruthy();
    expect(circleText).toBeTruthy();

    fireEvent.click(name);
    expect(onClick).toBeCalled();
  });

});
