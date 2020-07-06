import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import '../codeStyles.css'
import '../../dist/index.css'
import { VoucherData } from '../../dist'
import { text } from '@storybook/addon-knobs'

const propsDescriptions = {
  items: {
    propType: 'array',
    description: 'Array of items who define the different boxes of the data. Each box will have a title and a content.'
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

export const voucherData = () => (
  <VoucherData items={[
    {
      title: 'Label titulo de sección',
      items: [
        {
          label: text('Label', 'Deudas', 'I Item'),
          content: text('Content', '$300.000', 'I Item'),
        },
        {
          label: text('Label', 'Label Titulo:', 'II Item'),
          content: text('Content', 'Label Contenido', 'II Item'),
        },
        {
          label: text('Label', 'Label Titulo:', 'III Item'),
          content: text('Content', 'Label Contenido', 'III Item'),
        }
      ]
    }
  ]}/>
)

export default {
  title: 'Voucher',
  decorators: [withKnobs, withInfo],
  component: VoucherData,
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
        import { VoucherData } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <VoucherData> </VoucherData>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
