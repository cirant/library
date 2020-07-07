import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import '../codeStyles.css'
import '../../dist/index.css'
import { VoucherFooter } from '../../dist'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import list from '../icons/list'

const propsDescriptions = {
  items: {
    propType: 'array',
    description: 'Array of items who define each bullet'
  },
  title: {
    propType: 'string',
    description: 'Text who define the text of the section'
  },
  breakColumn: {
    propType: 'number',
    description: 'Define the number of items before break in the others column'
  },
  typeList: {
    propType: 'string',
    description: 'Define the type of bullet list of the section'
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

export const voucherFooter = () => (
  <VoucherFooter
    breakColumn= {number('breakColumn', 5, [0,1,2,3,4,5], 'Footer')}
    items={{
      title: text('Title', 'Order Bullet text a', 'Footer'),
      typeList: select('typeList', ['unorder', 'order', 'icons'], 'icons', 'Footer'),
      bullets: [
        {
          text: text('text', 'Bullet text a', 'Bullet I'),
          prefixType: select('prefixType', ['info', 'error', 'warning', 'success'], '', 'Bullet I'),
          contentType: select('contentType', ['info', 'error', 'warning', 'success'], '', 'Bullet I'),
          icon: select('icon', list, 'line-check', 'Bullet I'),
          disabled: boolean('disabled', false, 'Bullet I'),
          type: select('type', ['info', 'error', 'warning', 'success'], '', 'Bullet I')
        },
        {
          text: text('text', 'Bullet text b', 'Bullet II'),
          prefixType: select('prefixType', ['info', 'error', 'warning', 'success'], '', 'Bullet II'),
          contentType: select('contentType', ['info', 'error', 'warning', 'success'], '', 'Bullet II'),
          icon: select('icon', list, 'line-check', 'Bullet II'),
          disabled: boolean('disabled', false, 'Bullet II'),
          type: select('type', ['info', 'error', 'warning', 'success'], '', 'Bullet II')
        },
        {
          text: text('text', 'Bullet text c', 'Bullet III'),
          prefixType: select('prefixType', ['info', 'error', 'warning', 'success'], '', 'Bullet III'),
          contentType: select('contentType', ['info', 'error', 'warning', 'success'], '', 'Bullet III'),
          icon: select('icon', list, 'line-check', 'Bullet III'),
          disabled: boolean('disabled', false, 'Bullet III'),
          type: select('type', ['info', 'error', 'warning', 'success'], '', 'Bullet III')
        },
      ]
    }}/>
)

export default {
  title: 'Voucher',
  decorators: [withKnobs, withInfo],
  component: VoucherFooter,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 63px',
          margin: '10px 0'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { VoucherFooter } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <VoucherFooter/>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
