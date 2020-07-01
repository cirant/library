import React from "react";
import { render } from '@testing-library/react';
import ProgressBar from '.'


describe('ProgressBar behavior', () => {

  it('should be rendered', () => {
    const component = render(<ProgressBar label="label" progress={25} />);
    expect(component.getByText(/label/)).toBeTruthy();
    expect(component.container.querySelector('[data-progress="25"')).toBeTruthy();
  });

  it('should show multi label', () => {
    const header = [
      {
        label: 'label',
        text: 'subtext'
      },
      {
        label: 'label',
        text: 'subtext'
      }
    ]
    const component = render(<ProgressBar label={header} progress={95} />);
    expect(component.getAllByText(/label/).length).toEqual(2);
    expect(component.getAllByText(/subtext/).length).toEqual(2);
  });

  it('should show percent', () => {
    const component = render(<ProgressBar percent progress={75} />);
    expect(component.getByText(/75%/)).toBeTruthy();
    expect(component.container.querySelector('[data-progress="75"')).toBeTruthy();
    expect(component.getByRole('helper').className).toEqual('bellowContent start');
  });

  it('should show assistText', () => {
    const component = render(<ProgressBar assistText="assist text" progress={75} />);
    expect(component.getByText(/assist text/)).toBeTruthy();
    expect(component.container.querySelector('[data-progress="75"')).toBeTruthy();
  });

  it('should show assistText to the right', () => {
    const component = render(<ProgressBar assistText="assist text" helperAlign="end" progress={75} />);
    expect(component.getByText(/assist text/)).toBeTruthy();
    expect(component.getByRole('helper').className).toEqual('bellowContent end');
  });

  it('should show assistText and percent', () => {
    const component = render(<ProgressBar assistText="assist text 2" percent helperAlign="end" progress={100} />);
    expect(component.getByText(/assist text 2/)).toBeTruthy();
    expect(component.getByRole('helper').className).toEqual('bellowContent between');
    expect(component.getByText(/100%/).closest('div').className).toEqual('full');
  });

  it('should show assistText and percent reverse', () => {
    const component = render(<ProgressBar assistText="assist text 2" percent reverse helperAlign="end" progress={100} />);
    expect(component.getByText(/assist text 2/)).toBeTruthy();
    expect(component.getByRole('helper').className).toEqual('bellowContent between reverse');
    expect(component.getByText(/100%/).closest('div').className).toEqual('full');
  });

  it('should show full progress', () => {
    const component = render(<ProgressBar percent progress={100} />);
    expect(component.getByText(/100%/).closest('div').className).toEqual('full');
  });

})
