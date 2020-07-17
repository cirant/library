import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { BreadCrumb } from '../../dist';


const propsDescriptions = {
  paths: {
    propType: 'array',
    description: 'An array of object to create the component'
  },
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>

const TableComponent = ({ propDefinitions, ...propsx }) => {
  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }))

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {
      console.log(defaultValue)

      return (
        <tr key={property}>
          <td>{property}
            {required && <Red />}
          </td>
          <td>{propType}</td>
          <td>{defaultValue !== undefined ? `${defaultValue}` : ' - '}</td>
          <td>{description}</td>
        </tr>
      )
    }
  )

  return (
    <table style={{
      width: '100%'
    }} {...propsx} >
      <thead>
        <tr style={{ textAlign: 'left' }}>
          <th>name</th>
          <th>type</th>
          <th>default</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  )
}

const colors = ['primary', 'secondary']

export const breadCrumb = () => (
  <BreadCrumb
    paths={[
      {
        name: 'ruta 1',
        route: 'https://www.google.com'
      },
      {
        name: 'ruta 2',
        route: 'https://www.google.com'
      }
    ]} />
)

export default {
  title: 'BreadCrumb',
  decorators: [withInfo],
  component: BreadCrumb,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          alignSelf: 'start',
          padding: '0px 40px 0px',
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'design-system-coopeuch/dist/index.css';
        import { BreadCrumb } from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <BreadCrumb
        paths={[
          {
            name: 'text a',
            route: 'error'
          },
          {
            name: 'text b',
            route: 'success'
          },
        ]}>
        </BreadCrumb>
        ~~~

        the paths value should be an array of objects like the shown below

        ~~~js
        {
          name: 'ruta 1',
          route: 'https://www.google.com'
        }
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
