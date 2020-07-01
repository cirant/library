import React from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Bullets } from '../../dist'
import '../../dist/index.css'
import list from "../icons/list";


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
    description: 'An array ofasd object to create the list'
  },
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

export const BulletList = () => (
  <Bullets
    typeList={select('typeList',['unorder','order','icons'],'order','Bullet config')}
    items={[
      {
        text:  text('Item 1', 'Order Bullet text a', 'Bullet text config'),
        prefixType: select('Item 1', ['info','error','warning','success'], '','Bullet prefix config'),
        contentType: select('Item 1', ['info','error','warning','success'], '','Bullet contentType config'),
        icon:select('Item 1', list, 'check','Bullet icon config'),
        disabled: boolean('Item 1',false,'Bullet disabled config'),
        type:select('Item 1', ['info','error','warning','success'], '','Bullet type config'),
      },
      {
        text: text('Item 2', 'Order Bullet text b', 'Bullet text config'),
        prefixType: select('Item 2', ['info','error','warning','success'], '','Bullet prefix config'),
        contentType: select('Item 2', ['info','error','warning','success'], '','Bullet contentType config'),
        icon:select('Item 2', list, 'check','Bullet icon config'),
        disabled: boolean('Item 2',false,'Bullet disabled config'),
        type:select('Item 2', ['info','error','warning','success'], '','Bullet type config'),
      },
      {
        text: text('Item 3', 'Order Bullet text c', 'Bullet text config'),
        prefixType: select('Item 3', ['info','error','warning','success'], '','Bullet prefix config'),
        contentType: select('Item 3', ['info','error','warning','success'], '','Bullet contentType config'),
        icon:select('Item 3', list, 'check','Bullet icon config'),
        disabled: boolean('Item 3',false,'Bullet disabled config'),
        type:select('Item 3', ['info','error','warning','success'], '','Bullet type config'),
      },
      {
        text: text('Item 4', 'Order Bullet text a', 'Bullet text config'),
        prefixType: select('Item 4', ['info','error','warning','success'], '','Bullet prefix config'),
        contentType: select('Item 4', ['info','error','warning','success'], '','Bullet contentType config'),
        icon:select('Item 4', list, 'check','Bullet icon config'),
        disabled: boolean('Item 4',false,'Bullet disabled config'),
        type:select('Item 4', ['info','error','warning','success'], '','Bullet type config'),
      }
    ]}>
  </Bullets>
)

export default {
  title: 'Bullets',
  decorators: [ withInfo],
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
          alignSelf:'start',
          padding: '0px 40px 0px',
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { Bullets } from 'library';
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
