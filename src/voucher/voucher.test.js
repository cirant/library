import React from "react";
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Voucher from './';
import Card from '../card'
import Stamp from '../stamp'


describe('Voucher tests', () => {

  test('Should rendered', () => {
    const componentTitle = render(<Voucher stampdirection='top'/>)
    expect(componentTitle).toBeTruthy()
  })

  test('Should contain stampdirection bottom', () => {
    const componentTitle = render(<Voucher stampdirection='bottom'/>)
    expect(componentTitle.container.querySelector("[data-placement='bottom']")).toBeTruthy()
  })

  test('Should contain stampdirection top', () => {
    const componentTitle = render(<Voucher stampdirection='top'/>)
    expect(componentTitle.container.querySelector("[data-placement='top']")).toBeTruthy()
  })

  test('should contain component card componenet', () => {

    const testRenderer = TestRenderer.create(<Voucher stampdirection='top'/>)
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(Card)).toBeTruthy();

  });

  test('should contain component Stamp', () => {

    const testRenderer = TestRenderer.create(<Voucher stampdirection='top'/>)
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(Stamp)).toBeTruthy();

  });

});
