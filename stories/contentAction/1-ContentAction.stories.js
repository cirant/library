import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import '../codeStyles.css'
import '../../dist/index.css'
import { ContentAction } from '../../dist'
import { boolean, select, text } from '@storybook/addon-knobs'
import list from '../icons/list'
import { action } from '@storybook/addon-actions'

const propsDescriptions = {
  label: {
    propType: 'string',
    description: 'Add a text to the component link'
  },
  icon: {
    propType: 'string',
    description: 'Add an icon to the component'
  },
  disabled: {
    propType: 'bool',
    description: 'disabled the action click and change the color of the component'
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

export const ContentActionComponent = () => (
  <ContentAction
    label={text('label','Imprimir')}
    onClick={action('clicked')}
    icon={select('selected', list,'line-print')}
    disabled={boolean('disabled', false)}>
  </ContentAction>
)


export default {
  title: 'Content Action',
  decorators: [withKnobs, withInfo],
  component: ContentAction,
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
        import { ContentAction } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <ContentAction
          label="Imprimir"
          onClick={()=> console.log('acción')}
          icon="line-print">
         </ContentAction>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
