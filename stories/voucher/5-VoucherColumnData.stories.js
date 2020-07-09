import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import '../codeStyles.css'
import '../../dist/index.css'
import { VoucherColumnData } from '../../dist'
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

export const voucherColumnData = () => (
  <VoucherColumnData items={[
    {
      title:text('Title', 'Label title', 'I Item'),
      content:text('Content', 'Label content', 'I Item'),
    },
    {
      title:text('Title', 'Label title', 'II Item'),
      content:text('Content', 'Label content', 'II Item'),
    },
  ]} />
)

export default {
  title: 'Voucher',
  decorators: [withKnobs, withInfo],
  component: VoucherColumnData,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 45px',
          margin: '10px 0'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { VoucherColumnData } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <VoucherColumnData items={[]}> </VoucherColumnData>
        ~~~

       the object into array should have look like the shown below
        ~~~js
        [
              {
                title:'Some title',
                content:'Some content'
              },
              {
                title:'Some title',
                content:'Some content'
              }
        ]
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
