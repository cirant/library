import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { number, select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import '../codeStyles.css'
import '../../dist/index.css'
import { VoucherTitle } from '../../dist'
import list from '../icons/list'
import { action } from '@storybook/addon-actions'

const propsDescriptions = {
  title: {
    propType: 'string',
    description: 'Add a text to the title'
  },
  items: {
    propType: 'array',
    description: 'Array of items, this items are button but with according configuration for the title'
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

export const voucherTitle = () => (
  <VoucherTitle
    title={text('Label', 'Plazo', 'Voucher Title config')}
    items={[
      [
        {
          label: text('Label', 'Plazo', 'I Item'),
          icon: select('icon', list, 'line-write', 'I Item'),
          action: action('clicked Item 1'),
          flex: number('flex', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'I Item')
        },
        {
          label: text('Label', 'Descargar', 'II Item'),
          icon: select('icon', list, 'line-download', 'II Item'),
          action: action('clicked Item 2'),
          flex: number('flex', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'II Item')
        }

      ]
    ]}
  >
  </VoucherTitle>
)

export default {
  title: 'Voucher',
  decorators: [withKnobs, withInfo],
  component: VoucherTitle,
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
        import 'design-system-coopeuch/dist/index.css';
        import { VoucherTitle }from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <VoucherTitle items={[]}> </VoucherTitle>
        ~~~


        the object into array should have look like the shown below
        ~~~js
        {[
          [
           {
             label:'Some text',
             icon:'line-write',
             action: ()=> console.log('some function'),
             flex:1
           },
           {
             label:'Some text',
             icon:'line-download',
             action: ()=> console.log('some function')
           },
          ],
        ]}
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
