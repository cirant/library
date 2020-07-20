import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/react'
import { text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { CardSearch } from '../../dist'
import propsDescriptions from './comonsProps'
import '../../dist/index.css'

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

export const simple = () => (
  <CardSearch
    onClick={action('card Clicked')}
    title={text('title', 'some title', 'main')}
    description={text('description', 'some description', 'main')}
    routes={[
      text('route', 'route 1', 'routes'),
      text('route 2', 'route 2', 'routes'),
      text('route 3', 'route 3', 'routes')
    ]}
  />
)

export default {
  title: 'CardSearch',
  decorators: [withKnobs, withInfo],
  component: CardSearch,
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
        import { CardSearch }from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <CardSearch title="some title" onClick={()=>null} />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
