import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Icon } from '../../dist'
import '../../dist/index.css'

const propsDescriptions = {
  name: {
    propType: 'string',
    description: 'Must be a valid icon name'
  },
  size: {
    propType: 'string | number',
    description: 'Integer between 1 and 8'
  },
  className: {
    propType: 'string',
    description: 'Any string which could be used as class'
  }
}

const Red = (props) => (
  <span style={{ color: 'red' }} {...props}>
    *
  </span>
)

const TableComponent = ({ propDefinitions, ...propsx }) => {
  const propsMixeds = propDefinitions.map((el) => ({
    ...el,
    ...propsDescriptions[el.property]
  }))

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {
      console.log(defaultValue)

      return (
        <tr key={property}>
          <td>
            {property}
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
    <table
      style={{
        width: '100%'
      }}
      {...propsx}
    >
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

const size = [1, 2, 3, 4, 5, 6, 7, 8]
export const Normal = () => (
  <Icon name={text('Name', 'line-cloud')} size={select('Size', size, 8)} />
)

export default {
  title: 'Icon',
  decorators: [withKnobs, withInfo],
  component: Icon,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 40px 0px',
          textAlign: 'center'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'design-system-coopeuch/dist/index.css';
        import { Icon }from 'design-system-coopeuch';
        ~~~

        the basicest component form is: 

        ~~~js
        <Icon name="home" />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
