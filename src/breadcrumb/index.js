import React, { useEffect } from 'react';


const BreadCrumb = ({ paths, ...props }) => {

  useEffect(() => {
    console.log('montando componente');

    return () => {
      console.log('desmontando componente')
    }
  }, [])

  return <div>
    {
      paths.map((path, i) => <div key={`path-${i}`}>{path.name}</div>)
    }
  </div>
}

BreadCrumb.defaultProps = {
  paths: [
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
    }
  ]
};


export default BreadCrumb;