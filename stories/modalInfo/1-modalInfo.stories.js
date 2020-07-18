import React from 'react'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { ModalInfo, Button } from '../../dist'
import logo from './logo.svg'
import '../../dist/index.css'

const propsDescriptions = {
  image: {
    propType: 'img',
    description: 'Some img element with a resource'
  },
  title: {
    propType: 'string',
    description: 'Main text to be shown'
  },
  description: {
    propType: 'string',
    description: 'Secondaty text to be shown'
  },
  buttons: {
    propType: 'array',
    description: 'An array of <Button></Button>'
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

export const modal = () => (
  <ModalInfo
    image={boolean('icon', true, 'main') ? <img src={logo} /> : null}
    title={text('title', 'Some title', 'main')}
    description={text('description', 'Some title', 'main')}
    buttons={[
      <Button key='1' variant='outline' onClick={action('button 1')}>
        {text('buttonText', 'Lorem', 'button 1')}
      </Button>,
      <Button key='2' onClick={action('button 2')}>
        {text('buttonText', 'Lorem', 'button 2')}
      </Button>
    ]}
  />
)

export default {
  title: 'ModalInfo',
  decorators: [withInfo],
  component: ModalInfo,
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
        import { ModalInfo } from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <ModalInfo title="some text" />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
