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
    global = Object.assign(global, { innerWidth: 1000 });
    const component = render(<div style={{ maxWidth: "1000px" }}>
      <Component items={paths} />
    </div>);

    expect(component).toBeTruthy();
    component.debug();
  })


})
