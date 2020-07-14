import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputDate from '.';

describe('InputDate behavior', () => {
    
    it('should be rendered', () => {
        const onClick = jest.fn();
        const component = render(<InputDate
          onClick={onClick}
        />);
        expect(component).toBeTruthy();
        expect(component.container.querySelector('[type="text"')).toBeTruthy();
        fireEvent.click(component.container.querySelector('.nice-dates-popover'));
    });

    it('should be rendered with optional data', () => {
      const component = render(
          <InputDate 
            format="dd/MM/yyyy"
            minimumDate="2020/6/1"
            maximumDate="2020/6/31"
          />
      );
      expect(component).toBeTruthy();
    });

    it('should be rendered with label', () => {
      const component = render(<InputDate label="label name" />);
      expect(component.getByText(/label name/)).toBeTruthy();
    });
});