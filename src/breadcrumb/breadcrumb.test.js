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
    {
      name: 'hola soy una ruta 5',
      route: 'https://www.google.com'
    },
    {
      name: 'hola soy una ruta 5',
      route: 'https://www.google.com'
    }
  ]

  it('should be rendered', () => {
    const component = render(<Component items={paths} />);
    expect(component).toBeTruthy();
    component.debug();
  })


})
