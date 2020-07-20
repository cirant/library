import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Card, Tooltip } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'

const propsDescriptions = {
  border: {
    propType: 'bool',
    description: 'Add a border to the card and remove the elevation'
  },
  selected: {
    propType: 'bool',
    description: 'This stand out the element if you want make it more visible'
  },
  onClick: {
    propType: 'function',
    description:
      'This function will be called when the card is pressed, this also add an elevation animation'
  },
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
  },
  interactive: {
    propType: 'bool',
    description: 'Define if the tooltip can be clicked'
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

export const TooltipLeftPosition = () => (
  <Tooltip
    content={text(
      'content',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquam, dignissimos dolore earum eius eligendi fuga impedit itaque laudantium minima nemo quas quia quos repudiandae sed sunt unde voluptates?'
    )}
    eventListener={select('eventListener', ['hover', 'mouseClick'])}
    placement='left'
  >
    <Card
      style={{ maxWidth: 300 }}
      onClick={() => null}
      selected={false}
      border
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad
      aliquam, dignissimos dolore earum eius eligendi fuga impedit itaque
      laudantium minima nemo quas quia quos repudiandae sed sunt unde
      voluptates?
    </Card>
  </Tooltip>
)

export default {
  title: 'Tooltip',
  decorators: [withKnobs, withInfo],
  component: [Card, Tooltip],
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 40px 0px',
          display: 'flex',
          justifyContent: 'center'
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
            placement = "left"
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
