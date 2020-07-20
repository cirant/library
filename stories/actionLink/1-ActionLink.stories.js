import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/react'
import { select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { ActionLink } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'
import list from '../icons/list'

const propsDescriptions = {
  icon: {
    propType: 'string',
    description: 'Add an icon to the action link component'
  },
  label: {
    propType: 'string',
    description: 'Label of the action link component'
  },
  onClick: {
    propType: 'function',
    description:
      'This function will be called when the action component link is pressed'
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

export const ActionLinkComponent = () => (
  <ActionLink
    icon={select('icon', list,'line-cloud')}
    label={text('text','Cloud')}
    onClick= {action('clicked')}
  />
)

export default {
  title: 'Action Link',
  decorators: [withKnobs, withInfo],
  component: ActionLink,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 40px 0px'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'design-system-coopeuch/dist/index.css';
        import { ActionLink } from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <ActionLink />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
