import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputDate from '.';

describe('InputDate behavior', () => {
    
    it('should be rendered', () => {
        const onClick = jest.fn();
        const component = render(<InputDate
          onClick={onClick}
          placeholder='DD/MM/AAAA'
        />);
        expect(component).toBeTruthy();
        //expect(component.container.querySelector('[format="dd-MM-yyyy"')).toBeTruthy();
        fireEvent.click(component.container.querySelector('.nice-dates-popover'));
      });

      it('should be rendered with optional data', () => {
        const component = render(
            <InputDate 
                format="dd-MM-yyyy"
                minimumDate='2020,6,19'
                maximumDate='2020,11,31'
            />
        );
        expect(component.getByText(/dd-MM-yyyy/)).toBeTruthy();
        expect(component.getByText(/2020,6,19/)).toBeTruthy();
        expect(component.getByText(/2020,11,31/)).toBeTruthy();
    });

});


