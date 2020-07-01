import React from 'react'
import { withInfo } from '@storybook/addon-info'
import '../codeStyles.css'
import '../../dist/index.css'
import {Tooltip} from '../../dist'
import {TitleSection} from '../../dist'
import { select, text, withKnobs } from '@storybook/addon-knobs'

const propsDescriptions = {
  content: {
    propType: 'string',
    description: 'content of tooltip'
  },
  placement: {
    propType: 'string',
    description: 'direction of the box'
  },
  eventListener: {
    propType: 'string',
    description: 'event who we want the tooltip catch'
  }
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>

const TableComponent = ({ propDefinitions, ...propsx }) => {

  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }))

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {

      return (
        <tr key={property}>
          <td>{property}
            {required && <Red/>}
          </td>
          <td>{propType}</td>
          <td>{defaultValue !== undefined ? `${defaultValue}` : ' - '}</td>
          <td>{description}</td>
        </tr>
      )
    }
  )

  return (
    <table style={{
      width: '100%'
    }} {...propsx} >
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
  title: 'Tooltip',
  decorators: [withInfo,withKnobs],
  component: Tooltip,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 40px 0px',
          margin: '10px 0'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { Tooltip } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <Tooltip>
            placement = "top"
            eventListener = "mouseClick"
            content = "test Content">
            {children}
        </Tooltip>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}



export const element = () => <Tooltip
    content={text('content','')}
    eventListener={select('eventListener',['hover','mouseClick'])}
    placement={select('placement',['top','bottom','left','right'])}
    >
    <TitleSection label="Title Section" prefix="write"></TitleSection>
  </Tooltip>


element.story = {
  name: 'Tooltip componentss',
};


