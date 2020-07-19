import React from "react";
import { render } from '@testing-library/react';
import PublicFooter from '.';


describe(('PublicFooter behavior'), () => {

    test('should be rendered logo', () => {
        const component = render(<PublicFooter logo={<div>logo</div>}></PublicFooter>);
        expect(component).toBeTruthy();
        expect(component.getAllByText(/logo/i)).toBeTruthy();
    });


})