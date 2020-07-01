import React from "react";
import { render } from '@testing-library/react';
import { Button } from '../';
import Message from '.'


describe('ProgressBar behavior', () => {

  it('should be rendered', () => {
    const component = render(<Message type="success" title="a title" description="a description" />);
    expect(component.getByText(/a title/)).toBeTruthy();
    expect(component.getByText(/a description/)).toBeTruthy();
    expect(component.container.querySelector('[data-size="2"')).toBeTruthy();
  });

  it('should be rendered as success', () => {
    const component = render(<Message type="success" title="a success title" description="a success description" />);
    expect(component.getByText(/a success title/)).toBeTruthy();
    expect(component.getByText(/a success description/)).toBeTruthy();
    expect(component.getByRole("message").className == "message success").toBeTruthy();
  });

  it('should be rendered as error', () => {
    const component = render(<Message type="error" title="an error title" description="an error description" />);
    expect(component.getByText(/an error title/)).toBeTruthy();
    expect(component.getByText(/an error description/)).toBeTruthy();
    expect(component.getByRole("message").className == "message error").toBeTruthy();
  });

  it('should be rendered as info', () => {
    const component = render(<Message type="info" title="an info title" description="an info description" />);
    expect(component.getByText(/an info title/)).toBeTruthy();
    expect(component.getByText(/an info description/)).toBeTruthy();
    expect(component.getByRole("message").className == "message info").toBeTruthy();
  });

  it('should be rendered as warning', () => {
    const component = render(<Message type="warning" title="an warning title" description="an warning description" />);
    expect(component.getByText(/an warning title/)).toBeTruthy();
    expect(component.getByText(/an warning description/)).toBeTruthy();
    expect(component.getByRole("message").className == "message warning").toBeTruthy();
  });

  it('should be rendered with an action', () => {
    const component = render(<Message type="warning" title="" description="" action={<Button variant="text" > ir a action </Button>} />);
    expect(component.getByText(/ir a action/)).toBeTruthy();
  });

});