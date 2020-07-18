import React from 'react';
import { cleanup, render } from '@testing-library/react'
import InputCoordinate from './';

describe('InputCoordinate tests', () => {
    let component;
  
    beforeEach(() => {
      component = render(<InputCoordinate />)
    })
  
    afterEach(() => {
      cleanup()
    })
  
    test('should be rendered component', () => {
      const assistText=[
        {type: 'assist', text: 'Texto de asistencia'},
        {type: 'success', text: 'Texto éxito'},
        {type: 'error', text: 'Texto error'}
      ];
      
        const component = render(<InputCoordinate assistText={assistText} />);

        expect(component).toBeTruthy();
        expect(component.getByText(/Texto de asistencia/)).toBeTruthy();
        expect(component.getByText(/Texto éxito/)).toBeTruthy();
        expect(component.getByText(/Texto error/)).toBeTruthy();
    })
  
    test('should component content a div container', () => {
      const element = component.container.querySelector('.container')
      expect(element).toBeTruthy()
    })
  })