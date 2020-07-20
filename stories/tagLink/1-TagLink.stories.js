import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/react'
import { select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { TagLink } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'

const propsDescriptions = {
  label: {
    propType: 'string',
    description: 'Add the label to the component'
  },
  onClick: {
    propType: 'function',
    description:
      'This function will be called when the component is clicked'
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

export const TagLinkComponent = () => (
  <TagLink
    label={text('text','Label link text')}
    onClick={action('tagLink Clicked')}
  />
)

export default {
  title: 'Tag Link',
  decorators: [withKnobs, withInfo],
  component: TagLink,
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
        import { TagLink } from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <TagLink />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
