import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import '../codeStyles.css'
import '../../dist/index.css'
import { Voucher } from '../../dist'
import { VoucherTitle } from '../../dist'
import { VoucherData } from '../../dist'
import { VoucherColumnData } from '../../dist'
import { VoucherResumeContainer } from '../../dist'
import { VoucherFooter } from '../../dist'
import propsDescriptionsVoucher from './_commonsPropsVoucher';
import list from '../icons/list'
import { action } from '@storybook/addon-actions'

const propsDescriptions = {
  ...propsDescriptionsVoucher
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

export const voucherFullComponent = () => (
  <Voucher stampdirection="bottom">
    <VoucherTitle
      title= {text('Title', 'Plazo', 'Voucher Title')}
      items={[
        [
          {
            label: text('Label Item I', 'Plazo', 'Voucher Title'),
            icon: select('icon Item I', list, 'line-write', 'Voucher Title'),
            action: action('clicked Item I'),
            flex: number('flex Item I', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Voucher Title')
          },
          {
            label: text('Label Item II', 'Descargar', 'Voucher Title'),
            icon: select('icon Item II', list, 'line-download', 'Voucher Title'),
            action: action('clicked II'),
            flex: number('flex Item II', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Voucher Title')
          }

        ]
      ]}
    />
    <VoucherResumeContainer items={[
      [
        {
          label: text('Label Item I', 'Plazo', 'Voucher Resume Container'),
          content: text('Content Item I', '36 meses', 'Voucher Resume Container'),
          flex: number('flex Item I', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Voucher Resume Container')
        },
        {
          label: text('Label Item II', 'Valor cuota', 'Voucher Resume Container'),
          number: number('Number Item II', 45000, [], 'Voucher Resume Container'),
          currency: boolean('currency Item II', true, 'Voucher Resume Container'),
          flex: number('flex Item II', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Voucher Resume Container')
        },
        {
          label: text('Label Item III', 'Otros costos', 'Voucher Resume Container'),
          number: number('Number Item III', 15000, [], 'Voucher Resume Container'),
          currency: boolean('currency Item III', true, 'Voucher Resume Container'),
          flex: number('flex Item III', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Voucher Resume Container')
        },
        {
          label: text('Label Item IV', 'Saldo anterior', 'Voucher Resume Container'),
          number: number('Number Item IV', 400000, [], 'Voucher Resume Container'),
          currency: boolean('currency Item IV', true, 'Voucher Resume Container'),
          flex: number('flex Item IV', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Voucher Resume Container')
        }
      ]
    ]}
    />
    <VoucherData items={[
      {
        title: text('Title Item I', 'Deudas', 'Voucher Data'),
        items: [
          {
            label: text('Label Item I', 'Deudas', 'Voucher Data'),
            content: text('Content Item I', '$300.000', 'Voucher Data'),
          },
          {
            label: text('Label Item II', 'Label Titulo:', 'Voucher Data'),
            content: text('Content Item II', 'Label Contenido', 'Voucher Data'),
          },
          {
            label: text('Label Item II', 'Label Titulo:', 'Voucher Data'),
            content: text('Content Item II', 'Label Contenido', 'Voucher Data'),
          }
        ]
      }
    ]}/>
    <VoucherColumnData items={[
      {
        title:text('Title Item I', 'Label title', 'Voucher Column Data'),
        content:text('Content Item I', 'Label content', 'Voucher Column Data'),
      },
      {
        title:text('Title Item II', 'Label title', 'Voucher Column Data'),
        content:text('Content Item II', 'Label content', 'Voucher Column Data'),
      },
    ]} />
    <VoucherFooter
      breakColumn= {number('breakColumn', 5, [0,1,2,3,4,5], 'Voucher Footer')}
      items={{
        title: text('Title Footer', 'Order Bullet text a', 'Voucher Footer'),
        typeList: select('typeList Footer', ['unorder', 'order', 'icons'], 'icons', 'Voucher Footer'),
        bullets: [
          {
            text: text('text Item I', 'Bullet text a', 'Voucher Footer'),
            prefixType: select('prefixType Item I', ['info', 'error', 'warning', 'success'], '', 'Voucher Footer'),
            contentType: select('contentType Item I', ['info', 'error', 'warning', 'success'], '', 'Voucher Footer'),
            icon: select('icon Item I', list, 'line-check', 'Voucher Footer'),
            disabled: boolean('disabled Item I', false, 'Voucher Footer'),
            type: select('type Item I', ['info', 'error', 'warning', 'success'], '', 'Voucher Footer')
          },
          {
            text: text('text Item II', 'Bullet text b', 'Voucher Footer'),
            prefixType: select('prefixType Item II', ['info', 'error', 'warning', 'success'], '', 'Voucher Footer'),
            contentType: select('contentType Item II', ['info', 'error', 'warning', 'success'], '', 'Voucher Footer'),
            icon: select('icon Item II', list, 'line-check', 'Voucher Footer'),
            disabled: boolean('disabled Item II', false, 'Voucher Footer'),
            type: select('type Item II', ['info', 'error', 'warning', 'success'], '', 'Voucher Footer')
          },
          {
            text: text('text Item III', 'Bullet text c', 'Voucher Footer'),
            prefixType: select('prefixType Item III' , ['info', 'error', 'warning', 'success'], '', 'Voucher Footer'),
            contentType: select('contentType Item III', ['info', 'error', 'warning', 'success'], '', 'Voucher Footer'),
            icon: select('icon Item III', list, 'line-check', 'Voucher Footer'),
            disabled: boolean('disabled Item III', false, 'Voucher Footer'),
            type: select('type Item III', ['info', 'error', 'warning', 'success'], '', 'Voucher Footer')
          },
        ]
      }}/>
  </Voucher>)

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
        import { Voucher, VoucherTitle, VoucherResumeContainer, VoucherData, VoucherColumnData, VoucherFooter } from 'library';
        ~~~

        the basicest component form is:
        ~~~js
        <Voucher>
            <VoucherTitle title={''} items={[]} />
            <VoucherResumeContainer items={[]} />
            <VoucherData items={[]} />
            <VoucherColumnData items={[]} />
            <VoucherFooter bullets={[]} />
         </Voucher>
        ~~~
        the object into item in Voucher Title should have look like the shown below. If you need more information please go to the documentation of the history [Voucher Title](/?path=/story/voucher--voucher-title)
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
        the object into item in Voucher Resume Container should have look like the shown below. If you need more information please go to the documentation of the history [Voucher Resume Container](/?path=/story/voucher--voucher-resume-container)
        ~~~js
        {[
              [
                {
                  label:'Some text',
                  content:'Some content',
                  flex:1
                },
                {
                  label:'Some text',
                  number:45000,
                  currency: true,
                  flex:1
                },
                {
                  label:'Some text',
                  number:15000,
                  currency: true,
                  flex:1
                },
                {
                  label:'Some text',
                  number:400000,
                  currency: true,
                  flex:1
                },
              ],
        ]}
        ~~~
        the object into item in Voucher Data should have look like the shown below. If you need more information please go to the documentation of the history [Voucher Data](/?path=/story/voucher--voucher-data)
        ~~~js
        [
              {
                title:'Some title Text',
                items: [
                  {
                    label:'Some label:',
                    content: 'Some content'
                  },
                  {
                    label:'Some label:',
                    content: 'Some content'
                  },
                  {
                    label:'Some label:',
                    content: 'Some content'
                  },
                ]
              },
        ]
        ~~~
        the object into item in Voucher Column Data should have look like the shown below. If you need more information please go to the documentation of the history [Voucher Column Data](/?path=/story/voucher--voucher-column-data)
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
        the object into item in Voucher Footer should have look like the shown below. If you need more information please go to the documentation of the histories [Voucher Footer](/?path=/story/voucher--voucher-footer)  and [Bullets](/?path=/story/bullets--bullet-list)
        ~~~js
        [
                {
                  contentType: '',
                  disabled: false,
                  icon: 'line-check',
                  prefixType: '',
                  text: 'Some Text',
                  type: ''
                },
                 {
                  contentType: '',
                  disabled: false,
                  icon: 'line-check',
                  prefixType: '',
                  text: 'Some Text',
                  type: ''
                }
        ]
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
