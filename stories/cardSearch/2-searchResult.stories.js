import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/react'
import { text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { CardSearch, SearchResult } from '../../dist'
import Props from './comonsProps'
import '../../dist/index.css'

const propsDescriptions = {
  ...Props,
  target: {
    propType: 'string',
    description: 'Text to be shown into title'
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

export const resultList = () => (
  <SearchResult target={text('target', 'some text')} >
    <CardSearch
      onClick={action('card Clicked 1')}
      title="sometimes some text is into a card"
      description="description card"
      routes={['location']}
    />
    <CardSearch
      onClick={action('card Clicked 2')}
      title="sometimes some text is into a card"
      description="description card"
      routes={['location']}
    />

  </SearchResult>
)

export default {
  title: 'CardSearch',
  decorators: [withKnobs, withInfo],
  component: SearchResult,
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
        import { SearchResult }from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <SearchResult target="some text" onClick={()=>null} > </SearchResult>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
