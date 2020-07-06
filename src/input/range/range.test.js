import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputRange from '.';

describe('InputRange behavior', () => {
    
    it('should be rendered', () => {
        const onChange = jest.fn();
        const component = render(<InputRange value="10" onChange={onChange}/>);

        expect(component).toBeTruthy();
        expect(component.getByText(/10/));
        fireEvent.change(component.container.querySelector('input[type=range]'));
    });

    it('should be rendered with optional data', () => {
        const component = render(
            <InputRange 
                value="200"
                label="Label Text"
            />
        );
        expect(component.getByText(/Label Text/)).toBeTruthy();
        expect(component.getByText(/200/)).toBeTruthy();
    });

    it('should be rendered with label', () => {
        const component = render(<InputRange label="Label Text" />);
        expect(component.getByText(/Label Text/)).toBeTruthy();
    });

});