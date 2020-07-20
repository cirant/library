import React from 'react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { text, select, boolean } from '@storybook/addon-knobs'
import { Message } from '../../dist'
import '../../dist/index.css'
import propsDescriptions from './_commonsProps'

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

export default {
  title: 'Message',
  decorators: [withInfo],
  component: Message,
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
        import { Message }from 'design-system-coopeuch';
        ~~~

        the basicest component form is: 

        ~~~js
        <Message  type="info"/>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}

export const element = () => (
  <Message
    type={select('type', ['error', 'success', 'info', 'warning'], 'info')}
    title={text('title', 'a simple title')}
    closer={boolean('closer', true,) ? action('closer action') : null}
    description={text('description', '')}
  />
)
element.story = {
  name: 'Message component'
}
