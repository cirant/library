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
      typeList: select('typeList', ['unorder', 'order', 'icons'], 'unorder', 'Footer'),
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
        {
          text: text('text', 'Bullet text d', 'Bullet IV'),
          prefixType: select('prefixType', ['info', 'error', 'warning', 'success'], '', 'Bullet IV'),
          contentType: select('contentType', ['info', 'error', 'warning', 'success'], '', 'Bullet IV'),
          icon: select('icon', list, 'line-check', 'Bullet IV'),
          disabled: boolean('disabled', false, 'Bullet IV'),
          type: select('type', ['info', 'error', 'warning', 'success'], '', 'Bullet IV')
        },
        {
          text: text('text', 'Bullet text e', 'Bullet V'),
          prefixType: select('prefixType', ['info', 'error', 'warning', 'success'], '', 'Bullet V'),
          contentType: select('contentType', ['info', 'error', 'warning', 'success'], '', 'Bullet V'),
          icon: select('icon', list, 'line-check', 'Bullet V'),
          disabled: boolean('disabled', false, 'Bullet V'),
          type: select('type', ['info', 'error', 'warning', 'success'], '', 'Bullet V')
        },
        {
          text: text('text', 'Bullet text f', 'Bullet VI'),
          prefixType: select('prefixType', ['info', 'error', 'warning', 'success'], '', 'Bullet VI'),
          contentType: select('contentType', ['info', 'error', 'warning', 'success'], '', 'Bullet VI'),
          icon: select('icon', list, 'line-check', 'Bullet VI'),
          disabled: boolean('disabled', false, 'Bullet VI'),
          type: select('type', ['info', 'error', 'warning', 'success'], '', 'Bullet VI')
        },
        {
          text: text('text', 'Bullet text g', 'Bullet VII'),
          prefixType: select('prefixType', ['info', 'error', 'warning', 'success'], '', 'Bullet VII'),
          contentType: select('contentType', ['info', 'error', 'warning', 'success'], '', 'Bullet VII'),
          icon: select('icon', list, 'line-check', 'Bullet VII'),
          disabled: boolean('disabled', false, 'Bullet VII'),
          type: select('type', ['info', 'error', 'warning', 'success'], '', 'Bullet VII')
        },
        {
          text: text('text', 'Bullet text h', 'Bullet VIII'),
          prefixType: select('prefixType', ['info', 'error', 'warning', 'success'], '', 'Bullet VIII'),
          contentType: select('contentType', ['info', 'error', 'warning', 'success'], '', 'Bullet VIII'),
          icon: select('icon', list, 'line-check', 'Bullet VIII'),
          disabled: boolean('disabled', false, 'Bullet VIII'),
          type: select('type', ['info', 'error', 'warning', 'success'], '', 'Bullet VIII')
        },
        {
          text: text('text', 'Bullet text i', 'Bullet IX'),
          prefixType: select('prefixType', ['info', 'error', 'warning', 'success'], '', 'Bullet IX'),
          contentType: select('contentType', ['info', 'error', 'warning', 'success'], '', 'Bullet IX'),
          icon: select('icon', list, 'line-check', 'Bullet IX'),
          disabled: boolean('disabled', false, 'Bullet IX'),
          type: select('type', ['info', 'error', 'warning', 'success'], '', 'Bullet IX')
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
