import React from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Bullets } from '../../dist'
import '../../dist/index.css'
import list from '../icons/list'

const propsDescriptions = {
  typeList: {
    propType: 'string',
    description: 'type of bullet list'
  },
  items: {
    propType: 'array',
    description: 'An array of object to create the list'
  },
  newIntem: {
    propType: 'array',
    description: 'An array of object to create the list'
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

export const BulletList = () => (
  <Bullets
    typeList={select(
      'typeList',
      ['unorder', 'order', 'icons'],
      'order',
      'Bullets config'
    )}
    items={[
      {
        text: text('text', 'Order Bullet text a', 'Bullet I'),
        prefixType: select(
          'prefixType',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet I'
        ),
        contentType: select(
          'contentType',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet I'
        ),
        icon: select('icon', list, 'line-check', 'Bullet I'),
        disabled: boolean('disabled', false, 'Bullet I'),
        type: select(
          'type',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet I'
        )
      },
      {
        text: text('text', 'Order Bullet text b', 'Bullet II'),
        prefixType: select(
          'prefixType',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet II'
        ),
        contentType: select(
          'contentType',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet II'
        ),
        icon: select('icon', list, 'line-check', 'Bullet II'),
        disabled: boolean('disabled', false, 'Bullet II'),
        type: select(
          'type',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet II'
        )
      },
      {
        text: text('text', 'Order Bullet text c', 'Bullet III'),
        prefixType: select(
          'prefixType',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet III'
        ),
        contentType: select(
          'contentType',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet III'
        ),
        icon: select('icon', list, 'line-check', 'Bullet III'),
        disabled: boolean('disabled', false, 'Bullet III'),
        type: select(
          'type',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet III'
        )
      },
      {
        text: text('text', 'Order Bullet text a', 'Bullet IV'),
        prefixType: select(
          'prefixType',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet IV'
        ),
        contentType: select(
          'contentType',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet IV'
        ),
        icon: select('icon', list, 'line-check', 'Bullet IV'),
        disabled: boolean('disabled', false, 'Bullet IV'),
        type: select(
          'type',
          ['info', 'error', 'warning', 'success'],
          '',
          'Bullet IV'
        )
      }
    ]}
  />
)

export default {
  title: 'Bullets',
  decorators: [withInfo],
  component: Bullets,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          alignSelf: 'start',
          padding: '0px 40px 0px'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'design-system-coopeuch/dist/index.css';
        import { Bullets } from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <Bullets
          typeList="order"
          items={[
          {
            text: 'Order Bullet text a',
            prefixType: 'error',
            contentType:'error'
          },
          {
            text: 'Order Bullet text b',
            type: 'success',
          },
        ]}>
        </Bullets>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
