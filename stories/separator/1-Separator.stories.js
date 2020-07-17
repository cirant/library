import React from 'react'
// import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info'
import { boolean } from '@storybook/addon-knobs'
import { Separator } from '../../dist'
import '../../dist/index.css'

const propsDescriptions = {
  vertical: {
    propType: 'bool',
    description: 'elemenent direction'
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
  title: 'Separator',
  decorators: [withInfo],
  component: Separator,
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
        import { Separator }from 'design-system-coopeuch';
        ~~~

        the basicest component form is: 

        ~~~js
        <Separator />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}

export const ToStorybook = () => (
  <div
    className='col d-flex justify-content-center align-items-center elevation-1'
    style={{ height: '150px' }}
  >
    <Separator vertical={boolean('Vertical', true)} />
  </div>
)

ToStorybook.story = {
  name: 'Separator'
}
