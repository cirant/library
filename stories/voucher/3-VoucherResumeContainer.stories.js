import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { boolean, number, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import '../codeStyles.css'
import '../../dist/index.css'
import { VoucherResumeContainer } from '../../dist'

const propsDescriptions = {
  items: {
    propType: 'array',
    description: 'Array of items who define the different blue boxes of the resume. Each box will have a title and a value.'
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

export const voucherResumeContainer = () => (
  <VoucherResumeContainer items={[
    [
      {
        label: text('Label', 'Plazo', 'I Item'),
        content: text('Content', '36 meses', 'I Item'),
        flex: number('flex', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'I Item')
      },
      {
        label: text('Label', 'Valor cuota', 'II Item'),
        number: number('Number', 45000, [], 'II Item'),
        currency: boolean('currency', true, 'II Item'),
        flex: number('flex', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'II Item')
      }
    ],
    [
      {
        label: text('Label', 'Otros costos', 'III Item'),
        number: number('Number', 15000, [], 'III Item'),
        currency: boolean('currency', true, 'III Item'),
        flex: number('flex', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'III Item')
      },
      {
        label: text('Label', 'Saldo anterior', 'IV Item'),
        number: number('Number', 400000, [], 'IV Item'),
        currency: boolean('currency', true, 'IV Item'),
        flex: number('flex', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'IV Item')
      }
    ]
  ]}
  >
  </VoucherResumeContainer>
)

export default {
  title: 'Voucher',
  decorators: [withKnobs, withInfo],
  component: VoucherResumeContainer,
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
        import { VoucherResumeContainer } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <VoucherResumeContainer> </VoucherResumeContainer>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
