import React from "react";
import { render } from '@testing-library/react';
import Component from "./";


describe('VoucherDataResume tests', () => {
  test('Should render component', () => {
    const component = render(<Component label="example" content="a content" />);
    expect(component.getByText('example')).toBeTruthy();
    expect(component.getByText('a content')).toBeTruthy();
  });

  test('Should render component with number', () => {
    const component = render(<Component label="example" number="300000" />);
    expect(component.getByText('300,000')).toBeTruthy();
  });

  test('Should render component with number as currency', () => {
    const component = render(<Component content="hola" number="10000000" currency />);
    expect(component.getByText('CLP 10,000,000')).toBeTruthy();
  });

  test('Should validate flex prop', () => {
    const component = render(<Component role="mainComponent" flex="3" />);
    expect(component.getByRole('mainComponent').style._values.flex).toEqual('3');
  });

});