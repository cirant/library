import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Component from '.';

const action = jest.fn();

const options = [
  {
    icon: 'line-search',
    text: 'Label1',
    action: action
  },
  {
    icon: 'line-search',
    text: 'Label2',
    action: () => null
  }
];

describe('KebabMenu behavior', () => {

  it('should be rendered', () => {
    const component = render(<Component options={options} />);
    fireEvent.click(component.getByRole('menu'));

    options.forEach((opt) => {
      expect(component.getByText(new RegExp(opt.text))).toBeTruthy();
    });

    fireEvent.click(component.getByText(new RegExp(options[0].text)));

    expect(action).toBeCalled();

  });

})
