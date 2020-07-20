import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { select, boolean, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Icon, SidebarElement } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'

const propsDescriptions = {
  text: {
    propType: 'string',
    description: 'the text which is going to be shown'
  },
  icon: {
    propType: 'element',
    description: (
      <p>
        it should be an{' '}
        <a href='/?path=/story/icon--normal' target='_blank'>
          icon
        </a>{' '}
        component ({`<Icon />`}) to a better behavior
      </p>
    )
  },
  open: {
    propType: 'bool',
    description: 'This control if the children or sublevel is going to be shown'
  },
  notification: {
    propType: 'bool',
    description: 'this show an red circle in the row'
  },
  active: {
    propType: 'bool',
    description: 'Set as active and show a red text'
  },
  level: {
    propType: 'number',
    description:
      'this prop define the level of a component 1 for the main element, 2 for a child and 3 for a grandchild'
  },
  sublevel: {
    propType: 'Array',
    description: 'An object array of this self element'
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

export const SimpleRow = () => (
  <SidebarElement
    text={text('text', 'label A', 'level 1')}
    notification={boolean('notification', false, 'level 1')}
    active={boolean('active', false, 'level 1')}
    icon={<Icon name={text('icon', 'line-cloud', 'level 1')} size='1' />}
    level={select('level', ['1', '2', '3'], '1', 'level 1')}
  />
)

export default {
  title: 'Sidebar',
  decorators: [withKnobs, withInfo],
  component: SidebarElement,
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
        import { SidebarElement }from 'design-system-coopeuch';
        ~~~

        the basicest component form is: 

        ~~~js
        <SidebarElement text="some value" />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
