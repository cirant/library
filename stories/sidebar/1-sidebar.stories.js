import React from 'react'
// import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info'
import { boolean, text } from '@storybook/addon-knobs'
import { Sidebar } from '../../dist'
import '../../dist/index.css'

const propsDescriptions = {
  items: {
    propType: 'array',
    description: (
      <p>
        this receive an array of sidebar element described{' '}
        <a href='/?path=/story/sidebar--simple-row' target='_BLANK'>
          {' '}
          here{' '}
        </a>{' '}
      </p>
    )
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

export default {
  title: 'Sidebar',
  decorators: [withInfo],
  component: Sidebar,
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
        import { Sidebar }from 'design-system-coopeuch';
        ~~~

        the basicest component form is: 

        ~~~js
        <Sidebar />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}

export const main = () => (
  <Sidebar
    items={[
      {
        text: text('text', 'label A', 'level 1'),
        open: boolean('open', false, 'level 1'),
        notification: boolean('notification', false, 'level 1'),
        active: boolean('active', false, 'level 1'),
        sublevel: [
          {
            text: text('text', 'label B', 'level 2'),
            open: boolean('open', false, 'level 2'),
            active: boolean('active', false, 'level 2'),
            sublevel: [
              {
                text: text('text', 'label C', 'level 3'),
                open: boolean('open', false, 'level 3'),
                active: boolean('active', false, 'level 3')
              }
            ]
          }
        ]
      }
    ]}
  />
)

main.story = {
  name: 'Sidebar component'
}
