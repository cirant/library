import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import '../codeStyles.css'
import '../../dist/index.css'
import { Voucher } from '../../dist'

const propsDescriptions = {
  stampdirection: {
    propType: 'string',
    description: 'Initial position of the stamp component'
  },
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

export const voucherComponent = () => (
  <Voucher style={{ height: 400 }} stampdirection={select('stampdirection', ['top', 'bottom'], 'bottom')}/>
)

export default {
  title: 'Voucher',
  decorators: [withKnobs, withInfo],
  component: Voucher,
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
        import { Voucher } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <Voucher> </Voucher>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
