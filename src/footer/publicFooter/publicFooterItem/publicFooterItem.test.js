import React from "react";
import { render } from '@testing-library/react';
import PublicFooterItem from '.';


describe(('PublicFooterItem behavior'), () => {

      test('should be rendered component', () => {
        
        const subItems = [
            { link: 'link 1', text: 'Text 1' },
            { link: 'link 2', text: 'Text 2' },
            { link: 'link 3', text: 'Text 3' },
        ];
        
        const component = render(<PublicFooterItem subItems={subItems} ></PublicFooterItem>);
  
        expect(component).toBeTruthy();
        expect(component.getByText(/Text 1/)).toBeTruthy();
        expect(component.getByText(/Text 2/)).toBeTruthy();
        expect(component.getByText(/Text 3/)).toBeTruthy();
      })

})