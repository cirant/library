import React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { EmptyState } from '../../dist'
import '../../dist/index.css'

const propsDescriptions = {
  title: {
    propType: 'string',
    description: 'Main text to be shown'
  },
  description: {
    propType: 'string',
    description: 'Secondary text to be shown below title'
  },
  button: {
    propType: 'object',
    description:
      'An object with button configuration, check for more details in basic implementation'
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

export const element = () => (
  <EmptyState
    title={text('title', 'Some title', 'main')}
    description={text('description', 'Some description', 'main')}
    button={{
      text: text('text', 'label text', 'button'),
      action: action('button clicked')
    }}
  />
)

export default {
  title: 'EmptyState',
  decorators: [withInfo],
  component: EmptyState,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignSelf: 'start',
          padding: '0px 40px 0px'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'design-system-coopeuch/dist/index.css';
        import { EmptyState } from 'design-system-coopeuch';
        ~~~
        the basicest component form is:
        ~~~js
        <EmptyState 
          title="some text"
          button={{
            title: 'label text',
            action: () => {} // function will be triggered on button click
          }}
         />
        ~~~
        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
