import React from "react";
import { render } from '@testing-library/react';
// import TestRenderer from 'react-test-renderer';
// import TitleSection from "./index";
// // import Icon from "../icons";
// import IconListModel from "../icons/models/icon-list.model";
import VoucherData from './';


describe('Voucher tests', () => {

  test('Should render component', () => {
    const component = render(<VoucherData items={[]} />);
    expect(component).toBeTruthy();
  });

  test('Should render with elements', () => {
    const options = [
      {
        title: 'Label 1',
        items: [
          { label: 'Deudas:', content: '300.000' },
          { label: 'Label Titulo:', content: 'Label Contenido' }
        ]
      },
      {
        title: 'Label 2',
        items: [
          { label: 'Deudas:', content: '300.000' },
          { label: 'Label Titulo:', content: 'Label Contenido' },
          { label: 'Label Titulo:', content: 'Label Contenido' },
        ]
      }
    ]
    const component = render(<VoucherData items={options} />);
    expect(component).toBeTruthy();
    expect(component.getAllByRole('voucherSection').length).toEqual(2);
    expect(component.getByText(/Label 1/)).toBeTruthy();

    expect(component.getByText(/Label 2/)).toBeTruthy();
    expect(component.getAllByRole('voucherSectionItem').length).toEqual(5);
    // console.log('voucherSection ', component.getAllByRole('voucherSectionItem').length)
    // component.debug();
  });

});
