import React from 'react'
import { render } from '@testing-library/react'
import Component from './'



describe('Bullet behavior', () => {

  const paths = [
    {
      name: 'hola soy una ruta 1',
      route: 'https://www.google.com'
    },
    {
      name: 'hola soy una ruta 2',
      route: 'https://www.google.com'
    },
    {
      name: 'hola soy una ruta 3',
      route: 'https://www.google.com'
    },
    {
      name: 'hola soy una ruta 4',
      route: 'https://www.google.com'
    },
    {
      name: 'hola soy una ruta 5',
      route: 'https://www.google.com'
    },
  ]

  it('should be rendered width a width of 1280', () => {

    const component = render(<Component paths={paths} />);

    paths.forEach((el) => {
      expect(component.getByText(new RegExp(el.name))).toBeTruthy();
    });

    expect(component.getByText('...')).toBeTruthy();
    expect(component).toBeTruthy();
  })

})
