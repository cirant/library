import React from "react";
import { render } from '@testing-library/react';
import Header from '.'


describe('Header behavior', () => {

  it('should be rendered', () => {
    const component = render(<Header></Header>);
    expect(component).toBeTruthy();
    expect(component.getByText(/acceso/i)).toBeTruthy();
  });

  it('should be rendered logo', () => {
    const component = render(<Header logo={<div>logo</div>}></Header>);
    expect(component).toBeTruthy();
    expect(component.getAllByText(/logo/i)).toBeTruthy();
  });

  it('should be rendered logout component', () => {
    const component = render(<Header logOut={<div>logOut</div>}></Header>);
    expect(component).toBeTruthy();
    expect(component.getByText(/logOut/i)).toBeTruthy();
  });

  it('should be rendered with userData', () => {
    const userData = {
      name: 'user test',
      date: new Date()
    }
    const component = render(<Header userData={userData}></Header>);
    expect(component).toBeTruthy();
    const reg = new RegExp(userData.name)
    expect(component.getByText(reg)).toBeTruthy();
  });

});
