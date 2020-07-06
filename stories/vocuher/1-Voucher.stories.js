import React from 'react'
import { withInfo } from '@storybook/addon-info'
import '../../dist/index.css'
import Voucher from '../../dist'
import VoucherData from '../../dist'
import VoucherColumnData from '../../dist'
import VoucherFooter from '../../dist'
import VoucherResumeContainer from '../../dist'
import VoucherTitle from '../../dist'

const propsDescriptions = {
  stampdirection: {
    propType: 'string',
    description: 'position of the stamp in the card'
  },
  children: {
    propType: 'node',
    description: 'many nodes who are part of the voucher componenet'
  }
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>

const TableComponent = ({ propDefinitions, ...propsx }) => {
  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }))

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {
      console.log(defaultValue)

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

const colors = ['primary', 'secondary']

export const VoucherComponent = () => (
  <Voucher stampdirection="bottom">

  </Voucher>
)

export default {
  title: 'Voucher',
  decorators: [withInfo],
  component: Voucher,
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
        import 'library/dist/index.css';
        import { Voucher, VoucherTitle, VoucherResumeContainer, VoucherData, VoucherColumnData, VoucherFooter } from 'library';
        ~~~

        A way to generate this component is:

        ~~~js

        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
