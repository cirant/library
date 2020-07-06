import React from "react";
import { render } from '@testing-library/react';
import Component from './';

const items = [
  [
    {
      label: 'label 1',
      content: 'content 1',
      output: 'content 1', // just for test
      flex: 1
    },
    {
      label: 'label 2',
      number: 45000,
      output: 'CLP 45,000', // just for test
      currency: true
    },
  ],
  [
    {
      label: 'label 3',
      number: 15000,
      output: '15,000', // just for test
    },
    {
      label: 'label 4',
      content: '400000',
      output: '400000', // just for test
    },
  ],
];

describe('VoucherResumeContainer tests', () => {

  test('Should rendered', () => {
    const component = render(<Component items={items} />);
    expect(component).toBeTruthy();
    items.forEach(attr => {
      attr.forEach(element => {
        expect(component.getByText(element.label)).toBeTruthy();
        expect(component.getByText(element.output)).toBeTruthy();
      })
    })
  });
});
